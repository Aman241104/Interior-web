# Google Sheets logging setup

Form submissions log to a Google Sheet via the Sheets API using a service account
(not the Apps Script webhook — that approach was abandoned because Google blocks
Vercel's serverless IP range with a 401).

## One-time setup

1. Go to https://console.cloud.google.com and create a new project (or use an existing one).
2. Enable the **Google Sheets API**: APIs & Services → Library → search "Google Sheets API" → Enable.
3. Create a service account: APIs & Services → Credentials → Create Credentials → Service Account.
   Give it any name (e.g. "sheet-logger"). No roles needed — skip that step.
4. Open the service account → Keys tab → Add Key → Create new key → JSON. This downloads a `.json` file.
5. From that JSON file, note:
   - `client_email` → this is `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `private_key` → this is `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` (keep the `\n` characters as literal `\n` in the env var)
6. Open your Google Sheet → Share → paste the `client_email` address → give it **Editor** access.
7. Get the spreadsheet ID from the sheet's URL:
   `https://docs.google.com/spreadsheets/d/THIS_PART_IS_THE_ID/edit` → this is `GOOGLE_SHEET_ID`.

## Environment variables

Set these in `.env.local` (local dev) and in Vercel → Settings → Environment Variables (production):

```
GOOGLE_SHEET_ID=...
GOOGLE_SERVICE_ACCOUNT_EMAIL=...
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

The private key must be wrapped in quotes and keep its `\n` sequences — the code
replaces them with real newlines at runtime.

Sheet tabs (`Contact`, `Estimate`, `Newsletter`) and header rows are created automatically
on first submission to each.
