// Logs form submissions to a Google Sheet via an Apps Script Web App webhook.
// Set GOOGLE_SHEET_WEBHOOK_URL in env to enable; see docs/google-apps-script.gs for the paired script.
export async function logToGoogleSheet(sheetName: string, row: Record<string, unknown>) {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL
  if (!webhookUrl) {
    console.log(`Google Sheet webhook not configured, skipping log for ${sheetName}:`, row)
    return
  }
  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sheet: sheetName, ...row }),
    })
    if (!res.ok) throw new Error(`Sheet webhook responded ${res.status}`)
  } catch (err) {
    console.error(`Failed to log to Google Sheet (${sheetName}):`, err)
  }
}
