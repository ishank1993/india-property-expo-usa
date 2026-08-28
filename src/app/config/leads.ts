/**
 * Single place the site talks to the shared NRI Nivesh leads sheet.
 *
 * Sheet: https://docs.google.com/spreadsheets/d/1ckQ4-w6Q8a51nRJ0E1ViLwpNcFDvyJdRWMZrbMI71iA/edit
 *
 * This is the SAME Apps Script endpoint the Singapore and Abu Dhabi sites
 * post to — all three editions land in one sheet. Rows are told apart by the
 * `country` / `eventCity` columns, so those must be sent on every write.
 *
 *   Singapore  -> country "Singapore", eventCity "Singapore"
 *   Abu Dhabi  -> country "UAE",       eventCity "Abu Dhabi"
 *   Bahrain    -> country "Bahrain",   eventCity "Manama"
 *
 * Do not point this at a new deployment: a separate script would split the
 * leads across sheets and break the shared admin dashboard.
 */
export const LEADS_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbzA08KCv3DFbFMcKUzpMi5Ug-xUd0_tqDmicwg-xr0ENcNtx7OfJdGvqTaHzHOkYxWw/exec";

/** Tags every row this site writes, matching the sibling editions. */
export const EVENT_COUNTRY = "Bahrain";
export const EVENT_CITY = "Manama";

export interface LeadPayload {
  fullName: string;
  email: string;
  countryCode?: string;
  phone: string;
  dateOfVisit?: string;
  preferredCity?: string;
  /**
   * Doubles as the provenance marker: the wealth-page enquiry form sends
   * "wealth-page-enquiry" so those rows are distinguishable from full RSVPs.
   */
  consultationService?: string;
}

/**
 * Appends one row to the shared leads sheet.
 * Throws on a failed write so callers surface an error rather than a false
 * success — a silently dropped lead is the worst outcome here.
 */
export async function submitLead(lead: LeadPayload): Promise<void> {
  const params = new URLSearchParams({
    action: "write",
    country: EVENT_COUNTRY,
    eventCity: EVENT_CITY,
    fullName: lead.fullName,
    email: lead.email,
    countryCode: lead.countryCode || "",
    phone: lead.phone,
    dateOfVisit: lead.dateOfVisit || "",
    preferredCity: lead.preferredCity || "",
    consultationService: lead.consultationService || "none",
  });

  const response = await fetch(`${LEADS_ENDPOINT}?${params}`);
  const result = await response.json();
  if (!result.success) {
    throw new Error(result.error || "Sheet rejected the write");
  }
}
