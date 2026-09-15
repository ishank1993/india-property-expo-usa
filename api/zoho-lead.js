/**
 * Forwards a registration lead into the USA-specific NRI NIVESH Zoho Form,
 * in addition to (never instead of) our own Google Sheet pipeline in
 * src/app/config/leads.ts.
 *
 * This relays server-side because Zoho Forms' submission endpoint sends no
 * CORS headers, so browser JS on our domain cannot call it directly.
 *
 * The endpoint below is Zoho's own undocumented internal API — the same one
 * their hosted form's JS uses, reverse-engineered by driving the real form
 * headlessly and capturing its network request. It is unofficial and could
 * silently break if Zoho changes it; worth a spot check in Zoho after a
 * batch of real registrations.
 *
 * IMPORTANT — this endpoint validates strictly against the target form's
 * exact top-level field schema: sending ANY key the form doesn't define
 * rejects the WHOLE submission with a 400, it does not just ignore the
 * extra key (confirmed live). Unlike the older generic form, THIS form
 * (RegisterYourInterestUSA) does define real attribution fields —
 * GOOGLE_CLICK_ID and a UTM_PARAM object — which Zoho's own hosted page
 * populates from its URL query string when loaded directly. We replicate
 * that here by building the same shape ourselves. UTM_PARAM's *nested*
 * keys are NOT schema-validated (confirmed live: arbitrary extra keys
 * inside it, e.g. fbclid/referrer_url, are accepted), so it also carries
 * fbclid and page-URL context that has no dedicated top-level field.
 */

const ZOHO_RECORDS_URL =
  "https://forms.zohopublic.in/nriniveshrealstate1/form/RegisterYourInterestUSA/formperma/jOBU4AfJC-_QeZc5PgFy6J6nYqkGLzI2S4B8lju1VMY/records";

// Zoho's Dropdown field is required AND validated server-side against
// exactly this option list (confirmed by testing the live endpoint) — any
// other string, including "-Select-" or an omitted key, gets a 400. Our own
// form additionally offers "Still Exploring" / "Multiple Cities" / leaving
// it blank, none of which have a real Zoho equivalent, so those leads are
// skipped rather than forwarded with a fabricated city (see handler below).
const ZOHO_CITY_OPTIONS = new Set([
  "Mumbai", "Bangalore", "Delhi NCR", "Pune", "Hyderabad", "Chennai", "Goa",
  "Ahmedabad", "Kolkata", "Jaipur", "Chandigarh", "Kochi", "Indore",
  "Lucknow", "Coimbatore",
]);

function splitName(fullName) {
  const trimmed = (fullName || "").trim().replace(/\s+/g, " ");
  if (!trimmed) return { first: "", last: "" };
  const parts = trimmed.split(" ");
  if (parts.length === 1) return { first: parts[0], last: "" };
  return { first: parts.slice(0, -1).join(" "), last: parts[parts.length - 1] };
}

/** Prefers the value captured at submit time; falls back to first-touch so a
 *  lead who browsed the site before submitting doesn't lose their original
 *  campaign attribution once internal navigation drops the query string. */
function firstNonEmpty(...values) {
  return values.find((v) => v) || "";
}

function buildUtmParam(attribution) {
  const a = attribution || {};
  return {
    utm_source: firstNonEmpty(a.current_utm_source, a.first_touch_utm_source),
    utm_medium: firstNonEmpty(a.current_utm_medium, a.first_touch_utm_medium),
    utm_campaign: firstNonEmpty(a.current_utm_campaign, a.first_touch_utm_campaign),
    utm_term: firstNonEmpty(a.current_utm_term, a.first_touch_utm_term),
    utm_content: firstNonEmpty(a.current_utm_content, a.first_touch_utm_content),
    gclid: firstNonEmpty(a.current_gclid, a.first_touch_gclid),
    // Not a real top-level field on this form (only gclid gets one) — rides
    // along here since UTM_PARAM's nested keys aren't schema-validated.
    fbclid: firstNonEmpty(a.current_fbclid, a.first_touch_fbclid),
    referrer_url: a.referrer_url || "",
    landing_page_url: a.landing_page_url || "",
    current_url: a.current_url || "",
  };
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false });
    return;
  }

  // Best-effort forward only: whatever happens with Zoho, this must never
  // surface an error to the caller or block the real lead pipeline.
  try {
    const { product_interest, full_name, phone, email, preferred_city, attribution } = req.body || {};

    if (!ZOHO_CITY_OPTIONS.has(preferred_city)) {
      console.error(
        "Zoho lead forward skipped: preferred_city has no matching Zoho dropdown option:",
        JSON.stringify(preferred_city),
      );
      res.status(200).json({ ok: true, forwarded: false });
      return;
    }

    const { first, last } = splitName(full_name);
    const utmParam = buildUtmParam(attribution);

    const payload = {
      Radio: product_interest || "",
      Name: { Name_First: first, Name_Last: last },
      PhoneNumber: phone || "",
      Email: email || "",
      Dropdown: preferred_city,
      SingleLine: "Website", // Lead Source
      Dropdown1: "USA", // Source Country — this form's only valid option
      SingleLine1: "Not Contacted", // Lead Status
      REFERRER_NAME: (attribution && attribution.current_url) || "",
      ADDED_LANGUAGE: "en",
      GOOGLE_CLICK_ID: utmParam.gclid,
      UTM_PARAM: utmParam,
    };

    const zohoRes = await fetch(ZOHO_RECORDS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/zoho.forms-v1+json",
        "X-Requested-With": "XMLHttpRequest",
      },
      body: JSON.stringify(payload),
    });

    if (!zohoRes.ok) {
      console.error("Zoho lead forward failed:", zohoRes.status, await zohoRes.text().catch(() => ""));
    }
  } catch (err) {
    console.error("Zoho lead forward error:", err);
  }

  res.status(200).json({ ok: true });
}
