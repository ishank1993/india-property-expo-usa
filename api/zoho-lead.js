/**
 * Forwards a registration lead into the shared NRI NIVESH Zoho Form, in
 * addition to (never instead of) our own Google Sheet pipeline in
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
 * IMPORTANT — marketing attribution (UTMs/gclid/fbclid): confirmed live
 * against this endpoint that it validates strictly against the target
 * form's exact field schema. Sending ANY key the form doesn't define
 * (utm_source, gclid, fbclid, ...) rejects the WHOLE submission with a 400
 * — it does not just ignore the extra key. This specific form has no
 * dedicated fields for those, only this free-text REFERRER_NAME, so all
 * attribution data gets packed into that one field below instead of being
 * dropped. For it to land as separate, reportable Lead columns, the Zoho
 * Forms admin needs to add real fields for utm_source/utm_medium/
 * utm_campaign/utm_term/utm_content/gclid/fbclid in the form builder and
 * map them to custom Lead fields in Zoho CRM — then this relay's payload
 * can be extended to populate them directly instead of packing text.
 */

const ZOHO_RECORDS_URL =
  "https://forms.zohopublic.in/nriniveshrealstate1/form/RegisterYourInterest/formperma/Lj0f0TmIyo5zKFxOKwOMYn--en55raCy4hkjJk3961w/records";

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

// Keep REFERRER_NAME well under Zoho's own ~1800-char cap for this field
// even though our built string is normally far shorter than that.
const REFERRER_NAME_MAX_LENGTH = 1700;

function splitName(fullName) {
  const trimmed = (fullName || "").trim().replace(/\s+/g, " ");
  if (!trimmed) return { first: "", last: "" };
  const parts = trimmed.split(" ");
  if (parts.length === 1) return { first: parts[0], last: "" };
  return { first: parts.slice(0, -1).join(" "), last: parts[parts.length - 1] };
}

function buildReferrerName(attribution, country) {
  const a = attribution || {};
  const parts = [
    country && `Country: ${country}`,
    a.landing_page_url && `Landing: ${a.landing_page_url}`,
    a.current_url && `Current: ${a.current_url}`,
    a.referrer_url && `Referrer: ${a.referrer_url}`,
    (a.current_utm_source || a.current_utm_medium || a.current_utm_campaign || a.current_utm_term || a.current_utm_content) &&
      `UTM: source=${a.current_utm_source || "-"} medium=${a.current_utm_medium || "-"} campaign=${a.current_utm_campaign || "-"} term=${a.current_utm_term || "-"} content=${a.current_utm_content || "-"}`,
    (a.current_gclid || a.current_fbclid) &&
      `ClickIDs: gclid=${a.current_gclid || "-"} fbclid=${a.current_fbclid || "-"}`,
    (a.first_touch_utm_source || a.first_touch_utm_medium || a.first_touch_utm_campaign || a.first_touch_gclid || a.first_touch_fbclid) &&
      `First-touch UTM: source=${a.first_touch_utm_source || "-"} medium=${a.first_touch_utm_medium || "-"} campaign=${a.first_touch_utm_campaign || "-"} term=${a.first_touch_utm_term || "-"} content=${a.first_touch_utm_content || "-"} gclid=${a.first_touch_gclid || "-"} fbclid=${a.first_touch_fbclid || "-"}`,
  ].filter(Boolean);

  return parts.join(" | ").slice(0, REFERRER_NAME_MAX_LENGTH);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false });
    return;
  }

  // Best-effort forward only: whatever happens with Zoho, this must never
  // surface an error to the caller or block the real lead pipeline.
  try {
    const { product_interest, full_name, phone, email, preferred_city, country, attribution } = req.body || {};

    if (!ZOHO_CITY_OPTIONS.has(preferred_city)) {
      console.error(
        "Zoho lead forward skipped: preferred_city has no matching Zoho dropdown option:",
        JSON.stringify(preferred_city),
      );
      res.status(200).json({ ok: true, forwarded: false });
      return;
    }

    const { first, last } = splitName(full_name);

    const payload = {
      Radio: product_interest || "",
      Name: { Name_First: first, Name_Last: last },
      PhoneNumber: phone || "",
      Email: email || "",
      Dropdown: preferred_city,
      REFERRER_NAME: buildReferrerName(attribution, country),
      ADDED_LANGUAGE: "en",
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
