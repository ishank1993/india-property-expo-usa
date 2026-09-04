# Where USA leads go

All expo editions write into **one** Google Sheet:

<https://docs.google.com/spreadsheets/d/1ckQ4-w6Q8a51nRJ0E1ViLwpNcFDvyJdRWMZrbMI71iA/edit>

They share a single deployed Apps Script web app, so **there is nothing new to
deploy for USA** — it posts to the same endpoint Singapore, Abu Dhabi, and Bahrain
already use. The endpoint lives in one place:
[`src/app/config/leads.ts`](../src/app/config/leads.ts).

## Telling the editions apart

Every write sends `country` and `eventCity`. Filter the sheet on these:

| Edition | `country` | `eventCity` |
|---|---|---|
| Singapore | `Singapore` | `Singapore` |
| Abu Dhabi | `UAE` | `Abu Dhabi` |
| Bahrain | `Bahrain` | `Manama` |
| **USA** | **`USA`** | **`San Francisco Bay Area` / `New York / New Jersey` / `Dallas-Fort Worth` / etc.** |

If a USA row ever shows a blank `country`, the write skipped
`submitLead()` — that's the bug to look for.

## Which forms write to the sheet

| Form | Writes | Notes |
|---|---|---|
| RSVP modal (all pages) | ✅ | Full record: US event city, Indian city of interest, consultation type |
| Wealth / GIFT City page enquiry | ✅ | Name, email, phone only. Tagged `consultationService = wealth-page-enquiry` |
| Admin login | — | Authentication, not a lead |

## Sheet columns

`id`, `registeredAt`, `country`, `eventCity`, `fullName`, `email`,
`countryCode`, `phone`, `dateOfVisit`, `preferredCity`,
`consultationService`, `educationalSession`, `status`

For the USA edition:
- `country` is `"USA"`
- `eventCity` records the user's selected US metro / location
- `dateOfVisit` records `"RSVP - <Selected City>"` (e.g. `"RSVP - San Francisco Bay Area"`) since the tour is RSVP-only without static dates

## Testing a change

Submit the form on `npm run dev`, then confirm a new row appears with
`country = USA`. Delete the test row afterwards if needed — this is the live sheet
that holds real leads across editions.

## If you ever split the sheets

Change `LEADS_ENDPOINT` in `src/app/config/leads.ts` only. Note the admin
dashboard reads the same endpoint and shows leads filtered or across all editions.
