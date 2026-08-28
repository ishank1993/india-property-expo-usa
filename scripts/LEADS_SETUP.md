# Where Bahrain leads go

All three expo editions write into **one** Google Sheet:

<https://docs.google.com/spreadsheets/d/1ckQ4-w6Q8a51nRJ0E1ViLwpNcFDvyJdRWMZrbMI71iA/edit>

They share a single deployed Apps Script web app, so **there is nothing to
deploy for Bahrain** — it posts to the same endpoint Singapore and Abu Dhabi
already use. The endpoint lives in one place:
[`src/app/config/leads.ts`](../src/app/config/leads.ts).

## Telling the editions apart

Every write sends `country` and `eventCity`. Filter the sheet on these:

| Edition | `country` | `eventCity` |
|---|---|---|
| Singapore | `Singapore` | `Singapore` |
| Abu Dhabi | `UAE` | `Abu Dhabi` |
| **Bahrain** | **`Bahrain`** | **`Manama`** |

If a Bahrain row ever shows a blank `country`, the write skipped
`submitLead()` — that's the bug to look for.

## Which forms write to the sheet

| Form | Writes | Notes |
|---|---|---|
| RSVP modal (all pages) | ✅ | Full record: day, city of interest, consultation type |
| Wealth / GIFT City page enquiry | ✅ | Name, email, WhatsApp only — that form has no day/city fields. Tagged `consultationService = wealth-page-enquiry` so you can spot them |
| Admin login | — | Authentication, not a lead |

The wealth-page form used to discard everything the visitor typed and simply
open the RSVP modal. It now saves the enquiry first, then opens the modal, so
someone who abandons at that point still reaches you.

## Sheet columns

`id`, `registeredAt`, `country`, `eventCity`, `fullName`, `email`,
`countryCode`, `phone`, `dateOfVisit`, `preferredCity`,
`consultationService`, `educationalSession`, `status`

`dateOfVisit` arrives as `oct-23` / `oct-24` / `both` for Bahrain.

## Testing a change

Submit the form on `npm run dev`, then confirm a new row appears with
`country = Bahrain`. Delete the test row afterwards — this is the live sheet
that already holds real leads from the other editions.

## If you ever split the sheets

Change `LEADS_ENDPOINT` in `src/app/config/leads.ts` only. Note the admin
dashboard reads the same endpoint and currently shows leads from **all**
editions, not just Bahrain.
