/**
 * Detects this site's NRI NIVESH country from the domain it's served on.
 * Every country edition shares this same util shape — only the map (and
 * the default) differ per repo, so a new domain is a one-line edit here.
 */

// One-line edit if this site's own domain ever changes.
const DEFAULT_SITE_COUNTRY = "USA";

const HOSTNAME_COUNTRY_MAP: Record<string, string> = {
  "indiapropertyexpousa.com": "USA",
  "www.indiapropertyexpousa.com": "USA",
  "localhost": DEFAULT_SITE_COUNTRY,
};

/** Reads window.location.hostname and maps it to this site's country. */
export function getSiteCountry(): string {
  if (typeof window === "undefined") return DEFAULT_SITE_COUNTRY;
  return HOSTNAME_COUNTRY_MAP[window.location.hostname] ?? DEFAULT_SITE_COUNTRY;
}
