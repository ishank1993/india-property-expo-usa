import React from "react";
import { MapPin, CalendarCheck, Sparkles, Lock, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { EVENT } from "../config/event";

interface LocationProps {
  onRegisterClick?: () => void;
}

export function Location({ onRegisterClick }: LocationProps) {
  const { venue, dates, rsvp } = EVENT;

  return (
    <section id="venues" className="py-20 bg-gradient-to-b from-white via-red-50/40 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden bg-white shadow-2xl border border-red-100">

          {/* Info Side */}
          <div className="p-8 sm:p-10 flex flex-col justify-center space-y-8">
            <div>
              <div className="inline-block bg-gradient-to-r from-red-700 to-red-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                Venue &amp; Dates
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-2">Where &amp; When</h2>
              <p className="text-gray-600 text-lg">
                Two days in Manama, across the Bahrain weekend.
              </p>
            </div>

            <div className="space-y-6">
              {/* Dates */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <CalendarCheck className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-800">{dates.range}</h3>
                  <p className="text-gray-600 mt-1">
                    {dates.day1.label}<br />
                    {dates.day2.label}
                  </p>
                  <p className="text-gray-500 text-sm mt-1 flex items-center gap-1.5">
                    <Clock className="w-4 h-4" /> {dates.hours} both days
                  </p>
                </div>
              </div>

              {/* Venue */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  {venue.announced ? (
                    <MapPin className="text-white w-6 h-6" />
                  ) : (
                    <Lock className="text-white w-6 h-6" />
                  )}
                </div>
                <div>
                  {venue.announced ? (
                    <>
                      <h3 className="font-bold text-xl text-gray-800">{venue.name}</h3>
                      <p className="text-gray-600 mt-1 whitespace-pre-line">{venue.address}</p>
                    </>
                  ) : (
                    <>
                      <h3 className="font-bold text-xl text-gray-800">
                        Venue announced to confirmed guests first
                      </h3>
                      <p className="text-gray-600 mt-1">{venue.teaser}</p>
                      <p className="text-red-700 font-semibold text-sm mt-2">
                        RSVP now and we&apos;ll email you the address and your arrival time the moment it&apos;s locked.
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {venue.announced && venue.mapsQuery ? (
              <Button
                onClick={() =>
                  window.open(
                    `https://www.google.com/maps/dir//${encodeURIComponent(venue.mapsQuery)}`,
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="w-fit bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700 text-white font-bold shadow-lg hover:shadow-xl transition-all"
              >
                📍 Get Directions
              </Button>
            ) : (
              <Button
                onClick={onRegisterClick}
                className="w-fit bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700 text-white font-bold shadow-lg hover:shadow-xl transition-all"
              >
                🎟️ RSVP &amp; Get the Address First
              </Button>
            )}
          </div>

          {/* Map / RSVP Side */}
          <div className="min-h-[400px] lg:h-auto w-full relative">
            {venue.announced && venue.mapEmbedSrc ? (
              <iframe
                src={venue.mapEmbedSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map to ${venue.name}`}
                className="absolute inset-0 w-full h-full"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-red-700 via-red-600 to-red-800 flex flex-col justify-center p-8 sm:p-12 text-white">
                {/* Bahrain flag serration motif */}
                <div
                  className="absolute inset-y-0 left-0 w-10 bg-white/95"
                  style={{
                    clipPath:
                      "polygon(0 0, 60% 0, 100% 10%, 60% 20%, 100% 30%, 60% 40%, 100% 50%, 60% 60%, 100% 70%, 60% 80%, 100% 90%, 60% 100%, 0 100%)",
                  }}
                  aria-hidden="true"
                />
                <div className="pl-8 sm:pl-10">
                  <Sparkles className="w-8 h-8 text-amber-300 mb-4" aria-hidden="true" />
                  <h3 className="text-2xl sm:text-3xl font-black mb-3 leading-tight">
                    {rsvp.headline}
                  </h3>
                  <p className="text-red-50 text-base sm:text-lg leading-relaxed mb-6">
                    {rsvp.reason}
                  </p>
                  <ul className="space-y-3 text-red-50 text-sm sm:text-base">
                    <li className="flex gap-3">
                      <span className="text-amber-300 font-bold flex-shrink-0">01</span>
                      <span>Tell us the city and budget you&apos;re looking at.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-amber-300 font-bold flex-shrink-0">02</span>
                      <span>We shortlist the developers and projects that actually fit.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-amber-300 font-bold flex-shrink-0">03</span>
                      <span>Your tax, legal and home-loan slots are booked before you walk in.</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
