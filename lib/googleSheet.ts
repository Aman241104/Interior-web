import { JWT } from 'google-auth-library'

// Logs form submissions to a Google Sheet via the Sheets API using a service account.
// Set GOOGLE_SHEET_ID, GOOGLE_SERVICE_ACCOUNT_EMAIL, and GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY
// to enable; see docs/google-sheets-setup.md for one-time setup instructions.

let client: JWT | null = null

function getClient(): JWT | null {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
  const key = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, '\n')
  if (!email || !key) return null
  if (!client) {
    client = new JWT({
      email,
      key,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })
  }
  return client
}

async function sheetsApiFetch(client: JWT, path: string, init?: RequestInit) {
  const { token } = await client.getAccessToken()
  const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${path}`, {
    ...init,
    headers: {
      ...init?.headers,
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
  if (!res.ok) {
    const body = await res.text().catch(() => '')
    throw new Error(`Sheets API ${res.status}: ${body.slice(0, 300)}`)
  }
  return res.json()
}

async function ensureSheetTab(client: JWT, spreadsheetId: string, sheetName: string) {
  const meta = await sheetsApiFetch(client, spreadsheetId)
  const exists = meta.sheets?.some((s: any) => s.properties?.title === sheetName)
  if (!exists) {
    await sheetsApiFetch(client, `${spreadsheetId}:batchUpdate`, {
      method: 'POST',
      body: JSON.stringify({ requests: [{ addSheet: { properties: { title: sheetName } } }] }),
    })
  }
}

export async function logToGoogleSheet(sheetName: string, row: Record<string, unknown>) {
  const spreadsheetId = process.env.GOOGLE_SHEET_ID
  const client = getClient()
  if (!spreadsheetId || !client) {
    console.log(`Google Sheets not configured, skipping log for ${sheetName}:`, row)
    return
  }

  try {
    await ensureSheetTab(client, spreadsheetId, sheetName)

    const keys = Object.keys(row)
    const headerResult = await sheetsApiFetch(
      client,
      `${spreadsheetId}/values/${encodeURIComponent(sheetName)}!1:1`
    )
    const existingHeader: string[] = headerResult.values?.[0] ?? []

    if (existingHeader.length === 0) {
      await sheetsApiFetch(
        client,
        `${spreadsheetId}/values/${encodeURIComponent(sheetName)}!A1?valueInputOption=USER_ENTERED`,
        { method: 'PUT', body: JSON.stringify({ values: [keys] }) }
      )
    }

    const headerToUse = existingHeader.length > 0 ? existingHeader : keys
    const rowValues = headerToUse.map((key) => {
      const value = row[key]
      return value === undefined ? '' : String(value)
    })

    await sheetsApiFetch(
      client,
      `${spreadsheetId}/values/${encodeURIComponent(sheetName)}!A:A:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
      { method: 'POST', body: JSON.stringify({ values: [rowValues] }) }
    )
  } catch (err) {
    console.error(`Failed to log to Google Sheet (${sheetName}):`, err)
  }
}
