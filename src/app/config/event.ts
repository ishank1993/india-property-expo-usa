/**
 * Single source of truth for the America edition event details.
 *
 * Multi-city US Tour across major American metropolitan hubs.
 * All events are strictly RSVP-only without fixed public dates.
 */

export const EVENT = {
  city: "USA",
  country: "United States",
  countryCode: "US",
  currency: "USD",
  dialCode: "+1",
  domain: "https://www.indiapropertyexpousa.com",

  // Multi-city US tour — no single event date, all RSVP only
  dates: {
    range: "Multi-City US Tour",
    rangeShort: "Multi-City US Tour",
    hours: "Exclusive RSVP Consultation Sessions",
    hoursShort: "RSVP Only",
    announcement: "Dates & Personalized Slots Emailed to Confirmed RSVPs",
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
