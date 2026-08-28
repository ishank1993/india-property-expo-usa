/**
 * Single source of truth for the Bahrain edition event details.
 *
 * The venue is not confirmed yet. When it is, fill in `venue.name`,
 * `venue.address`, `venue.mapsQuery` and `venue.mapEmbedSrc`, then flip
 * `venue.announced` to true — every venue block on the site switches from
 * the "announced to registered guests first" treatment to the real address.
 */

export const EVENT = {
  city: "Bahrain",
  country: "Bahrain",
  countryCode: "BH",
  currency: "BHD",
  dialCode: "+973",
  domain: "https://indiapropertyexpobahrain.com",

  // Bahrain's weekend is Friday–Saturday, so 23–24 Oct 2026 is a full weekend.
  dates: {
    day1: { iso: "2026-10-23", label: "Friday, 23 October 2026", short: "23 Oct (Fri)", value: "oct-23" },
    day2: { iso: "2026-10-24", label: "Saturday, 24 October 2026", short: "24 Oct (Sat)", value: "oct-24" },
    range: "23 & 24 October 2026",
    rangeShort: "23 & 24 Oct 2026",
    hours: "10:00 AM – 7:00 PM",
    hoursShort: "10am–7pm",
  },

  venue: {
    announced: false,
    name: "Venue to be announced",
    address: "Manama, Kingdom of Bahrain",
    // Used once announced:
    mapsQuery: "",
    mapEmbedSrc: "",
    // Shown while unannounced:
    teaser: "A central Manama venue. The exact address is released to confirmed guests first.",
  },

  rsvp: {
    // This is an RSVP event, not a walk-in expo — that framing is what makes
    // the one-to-one personalisation possible.
    headline: "This is an RSVP-only event",
    reason:
      "We match every guest to the right developers, projects and advisors before you arrive. That only works if we know you're coming.",
  },
} as const;

export type EventConfig = typeof EVENT;
