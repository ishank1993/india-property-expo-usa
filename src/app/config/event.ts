/**
 * Single source of truth for the America edition event details.
 *
 * Multi-city US Tour across major American metropolitan hubs.
 * Each city's weekend dates are published up front; the venue stays
 * unannounced and is emailed only to confirmed RSVPs.
 */

export const EVENT = {
  city: "USA",
  country: "United States",
  countryCode: "US",
  currency: "USD",
  dialCode: "+1",
  domain: "https://www.indiapropertyexpousa.com",

  // Multi-city US tour — weekend dates published per city, all RSVP only
  dates: {
    range: "Weekends, Oct 3 – Nov 15, 2026",
    rangeShort: "Weekends • Oct–Nov 2026",
    hours: "Exclusive RSVP Consultation Sessions",
    hoursShort: "RSVP Only",
    announcement: "Weekend Dates Published Per City — Venue Emailed to Confirmed RSVPs",
  },

  venue: {
    announced: false,
    name: "Private 5-Star Venues Across Major US Metros",
    address: "SF Bay Area • New York / NJ • Dallas • Houston • Chicago • Seattle • Atlanta",
    // Used once announced:
    mapsQuery: "",
    mapEmbedSrc: "",
    // Shown while unannounced:
    teaser: "Luxury hotel & conference venues across top US metros. Exact addresses and personalized slots are emailed to confirmed RSVPs.",
  },

  rsvp: {
    headline: "This is an RSVP-only event",
    reason:
      "We match every guest to the right developers, projects and advisors before you arrive. That only works if we know you're coming.",
  },
} as const;

export type EventConfig = typeof EVENT;
