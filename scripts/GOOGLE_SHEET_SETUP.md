# Wiring Bahrain leads into your Google Sheet

Target sheet: <https://docs.google.com/spreadsheets/d/1ckQ4-w6Q8a51nRJ0E1ViLwpNcFDvyJdRWMZrbMI71iA/edit>

The form posts to a Google Apps Script Web App, which appends a row to that sheet.
The script must be deployed from **your** Google account — that step can't be automated.
It takes about three minutes.

---

## 1. Open the Apps Script editor

Open the sheet → **Extensions** → **Apps Script**.

## 2. Paste the script

Delete whatever is in `Code.gs`, then paste the entire contents of
[`scripts/bahrain-leads.gs`](./bahrain-leads.gs). Save (⌘S).

The spreadsheet ID is already filled in, so nothing needs editing.

## 3. Authorise it

In the editor's function dropdown pick **`testConnection`** → **Run**.

Google will ask for permission. Choose your account → **Advanced** →
**Go to (project name) (unsafe)** → **Allow**. This warning is normal for
personal scripts; you're granting your own script access to your own sheet.

Check **Execution log** — it should print the sheet name and row count.
A `Leads` tab with a red header row is created automatically on first write.

## 4. Deploy as a Web App

**Deploy** → **New deployment** → gear icon → **Web app**.

| Field | Value |
|---|---|
| Description | `Bahrain expo leads` |
| Execute as | **Me** |
| Who has access | **Anyone** |

> "Anyone" is required — visitors submitting the form are not signed into Google.
> The script only ever appends rows; it never reads or returns sheet data.

Click **Deploy** and copy the **Web app URL**. It ends in `/exec`.

## 5. Paste the URL into the site

In [`src/app/components/RegistrationModal.tsx`](../src/app/components/RegistrationModal.tsx),
replace the placeholder:

```ts
const GOOGLE_SHEETS_URL = "PASTE_YOUR_BAHRAIN_APPS_SCRIPT_EXEC_URL_HERE";
```

with your `/exec` URL. Until you do, the form shows
"Registration is not live yet" instead of silently dropping leads.

## 6. Test end to end

```bash
npm run dev
```

Submit the form with real-looking test data, then confirm a new row landed in
the `Leads` tab. Delete the test row afterwards.

---

## Columns written

| Column | Source |
|---|---|
| Timestamp | Server time of submission |
| Edition | Always `Bahrain` — lets you merge with the Singapore sheet later |
| Full Name / Email / Phone | Form fields |
| Country Code / Full Phone | Split and combined, so the full number is dialable |
| Day Attending | `Fri 23 Oct 2026`, `Sat 24 Oct 2026`, or `Both days` |
| City of Interest | Indian city the guest wants to buy in |
| Consultation Requested | Tax / legal / valuation / loan / repatriation |
| Source Page | Path the RSVP came from, for attribution |

The last four columns are what drive the pre-event personalisation — the RSVP
copy on the site promises a matched shortlist, and these are the inputs for it.

## Redeploying after script edits

Apps Script pins each deployment to a version. If you change `bahrain-leads.gs`,
go to **Deploy → Manage deployments → edit (pencil) → Version: New version → Deploy**.
The `/exec` URL stays the same, so no site change is needed.
