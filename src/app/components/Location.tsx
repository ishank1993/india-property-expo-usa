import React from "react";
import { MapPin, Sparkles, Lock, ShieldCheck } from "lucide-react";
import { Button } from "./ui/button";
import { EVENT } from "../config/event";

interface LocationProps {
  onRegisterClick?: () => void;
}

const usCities = [
  {
    name: "SF Bay Area & Silicon Valley",
    state: "California",
    desc: "San Jose • Santa Clara • San Francisco • Fremont",
    highlight: "High Tech & Venture Corridor",
  },
  {
    name: "New York & New Jersey Metro",
    state: "NY / NJ",
    desc: "Edison • Jersey City • Woodbridge • Manhattan",
    highlight: "East Coast Financial Hub",
  },
  {
    name: "Dallas & Houston Metros",
    state: "Texas",
    desc: "Frisco • Plano • Irving • Dallas • Houston • Sugar Land",
    highlight: "Fastest-Growing NRI Hub",
  },
  {
    name: "Greater Chicago",
    state: "Illinois",
    desc: "Naperville • Schaumburg • Chicago Downtown",
    highlight: "Midwest Center",
  },
  {
    name: "Greater Seattle",
    state: "Washington",
    desc: "Bellevue • Redmond • Seattle Downtown",
    highlight: "Pacific Northwest Tech",
  },
  {
    name: "Atlanta & Southeast",
    state: "Georgia",
    desc: "Alpharetta • Cumming • Atlanta Metro",
    highlight: "Southern Business Center",
  },
];

export function Location({ onRegisterClick }: LocationProps) {
  const { rsvp } = EVENT;

  return (
    <section id="venues" className="py-20 bg-gradient-to-b from-white via-red-50/40 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <span>🇺🇸 Multi-City US Tour • RSVP Only</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Where We Meet Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-amber-600">America</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Exclusive private exhibitions held in 5-star hotel &amp; conference venues across major US metros. Strictly RSVP-only — no public walk-ins.
          </p>
        </div>

        {/* Main 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 rounded-3xl overflow-hidden bg-white shadow-2xl border border-red-100 p-6 sm:p-10">

          {/* Left Side: Major US Metros Grid (7 columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-red-600" />
                Featured US Tour Destinations
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                Select your city in the RSVP form. Dates, private luxury hotel addresses, and personalized consultation appointments are emailed directly to confirmed guests.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {usCities.map((city, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-2xl border border-gray-200 hover:border-red-400/80 bg-gradient-to-br from-gray-50 to-white hover:from-red-50/40 hover:to-white transition-all duration-300 group shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors text-sm">
                        {city.name}
                      </h4>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-700">
                        {city.state}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 leading-snug mb-2">
                      {city.desc}
                    </p>
                    <div className="flex items-center gap-1.5 text-[11px] text-amber-700 font-semibold">
                      <Lock className="w-3 h-3" />
                      <span>Venue &amp; date sent on RSVP</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>100% Free Entry • Pre-screened Developers • Direct Builder Pricing</span>
              </div>
              <Button
                onClick={onRegisterClick}
                className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                🎟️ RSVP For Your US City
              </Button>
            </div>
          </div>

          {/* Right Side: America–India RSVP Advantage (5 columns) */}
          <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-red-700 via-red-600 to-red-800 text-white p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between">
            {/* Background flag accents */}
            <div className="absolute top-4 right-4 text-3xl select-none opacity-20">
              🇺🇸 🇮🇳
            </div>
            
            <div>
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-semibold mb-6">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Private &amp; Tailored Experience</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black mb-3 leading-tight">
                {rsvp.headline}
              </h3>
              <p className="text-red-100 text-sm leading-relaxed mb-6">
                {rsvp.reason}
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-3.5 rounded-xl border border-white/10">
                  <div className="w-7 h-7 rounded-full bg-amber-400 text-red-900 flex items-center justify-center font-bold text-xs flex-shrink-0">
                    01
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-sm">Tell Us Your Target Cities</h5>
                    <p className="text-xs text-red-100 mt-0.5">
                      Mumbai, Bengaluru, Delhi NCR, Hyderabad, Pune, Goa, or other regions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-3.5 rounded-xl border border-white/10">
                  <div className="w-7 h-7 rounded-full bg-amber-400 text-red-900 flex items-center justify-center font-bold text-xs flex-shrink-0">
                    02
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-sm">We Pre-Match Top Developers</h5>
                    <p className="text-xs text-red-100 mt-0.5">
                      Receive an exclusive shortlist matched precisely to your budget and goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-3.5 rounded-xl border border-white/10">
                  <div className="w-7 h-7 rounded-full bg-amber-400 text-red-900 flex items-center justify-center font-bold text-xs flex-shrink-0">
                    03
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-sm">One-on-One Advisory Booked</h5>
                    <p className="text-xs text-red-100 mt-0.5">
                      Private sessions with FEMA, US-India tax, and legal specialists reserved before you arrive.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20 text-center sm:text-left">
              <p className="text-xs text-amber-200 font-medium">
                📍 Exact hotel address, venue map, and suggested arrival window are dispatched directly to confirmed RSVPs.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
