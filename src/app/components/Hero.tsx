import { Calendar, MapPin, Clock, Users, TrendingUp, Award, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { EVENT } from "../config/event";

interface HeroProps {
  onRegisterClick: () => void;
  onNavigateToWealth?: () => void;
}

export function Hero({ onRegisterClick, onNavigateToWealth }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" role="banner" aria-label="Hero section for India Property Expo America 2026">
      {/* Background Image - American Skyline at Dusk */}
      <div 
        className="absolute inset-0 z-0 will-change-auto"
        role="img"
        aria-label="American city skyline at dusk with dramatic lighting"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?fm=jpg&q=80&w=1920&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Enhanced Gradient Overlay blending USA deep navy/red with warm Indian saffron/gold tones */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/65 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-red-950/60 via-black/30 to-amber-950/50" />
      </div>

      {/* Animated Particles/Dots */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute top-20 left-10 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-amber-500 rounded-full animate-pulse delay-100" />
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-red-400 rounded-full animate-pulse delay-200" />
        <div className="absolute bottom-20 right-40 w-3 h-3 bg-amber-400 rounded-full animate-pulse delay-300" />
      </div>

      {/* Content */}
      <article className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            {/* Event Badge */}
            <div className="inline-flex items-center space-x-3 mb-6 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-ping absolute" />
              <span className="w-2.5 h-2.5 bg-red-500 rounded-full" />
              <span className="text-red-300 font-semibold tracking-wider uppercase text-sm">
                🇺🇸 Multi-City US Tour • RSVP Only
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              <span className="text-white inline-block">
                INDIA PROPERTY EXPO
              </span>
              <br />
              <span className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mt-2 inline-block">
                IN AMERICA 2026
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-100 font-medium max-w-3xl mx-auto mb-8 leading-relaxed">
              Meet <span className="text-red-400 font-bold">35+ Trusted Developers</span> Face-to-Face • Explore <span className="text-amber-400 font-bold">500+ Verified Projects</span> • Get a <span className="text-white font-bold">Shortlist Built Around You</span>
            </p>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Button 
                onClick={onRegisterClick}
                className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold text-xl px-12 py-7 rounded-full shadow-[0_0_40px_rgba(249,115,22,0.6)] hover:shadow-[0_0_60px_rgba(249,115,22,0.8)] transition-all duration-300 transform hover:scale-105 animate-bounce"
                aria-label="Register for free India Property Expo in America"
              >
                🎯 RSVP FREE NOW
              </Button>
              <Button 
                onClick={onRegisterClick}
                variant="outline"
                className="border-2 border-amber-500 text-amber-300 hover:bg-amber-600/20 font-bold text-lg px-10 py-7 rounded-full backdrop-blur-sm transition-all duration-300"
                aria-label="Book your consultation slot"
              >
                📅 Book Your 1-on-1 Slot
              </Button>
            </div>

            {/* RSVP notice */}
            <div className="max-w-3xl mx-auto mb-10">
              <div className="flex flex-col sm:flex-row items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-5 text-left">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Sparkles className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <p className="text-gray-100 text-sm sm:text-base leading-relaxed">
                  <span className="font-bold text-white">{EVENT.rsvp.headline}.</span>{" "}
                  {EVENT.rsvp.reason}{" "}
                  <span className="text-amber-300 font-semibold">Walk-ins can&apos;t be matched in advance.</span>
                </p>
              </div>
            </div>

            {/* NRI Tax Clinic & GIFT City Baatchit Banner */}
            {onNavigateToWealth && (
              <div className="mb-12">
                <div className="inline-block bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-md rounded-2xl p-6 border-2 border-blue-400/50 shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:shadow-[0_0_60px_rgba(59,130,246,0.7)] transition-all duration-300 transform hover:scale-105 cursor-pointer max-w-2xl"
                     onClick={onNavigateToWealth}
                     role="button"
                     tabIndex={0}
                     aria-label="Navigate to NRI Tax Clinic and GIFT City Baatchit">
                  <div className="flex items-center space-x-3 mb-3">
                    <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse" />
                    <span className="text-yellow-300 font-bold text-sm uppercase tracking-wider">BONUS: Beyond Real Estate</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    🏦 NRI Tax Clinic &amp; GIFT City Baatchit
                  </h3>
                  <p className="text-blue-100 mb-4">
                    Get to know what&apos;s happening in GIFT City and how it benefits US-based NRIs — discover regulatory updates, tax planning, and global-level investment opportunities.
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-white font-semibold">
                    <span>Explore Complete Information</span>
                    <span className="text-2xl">→</span>
                  </div>
                </div>
              </div>
            )}

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-200 mb-12">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-red-400" />
                <span>Trusted by 100,000+ Global NRIs</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-amber-400" />
                <span>Exclusive Pre-Launch Information</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-red-400" />
                <span>Free 1-on-1 Consultations</span>
              </div>
            </div>
          </header>

          {/* Event Details Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Multi-City Tour Card */}
            <div className="group bg-gradient-to-br from-red-900/40 to-red-800/30 backdrop-blur-lg rounded-2xl p-6 border border-red-400/30 shadow-xl hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all duration-300 hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                  <Calendar className="text-white w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-red-300 mb-1">MULTI-CITY TOUR</h3>
                  <p className="text-red-200 font-medium">Major US Metros</p>
                  <p className="text-red-300 text-sm mt-1">Dates emailed on RSVP</p>
                </div>
              </div>
            </div>

            {/* Venue Card */}
            <div className="group bg-gradient-to-br from-amber-900/40 to-amber-800/30 backdrop-blur-lg rounded-2xl p-6 border border-amber-400/30 shadow-xl hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all duration-300 hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                  <MapPin className="text-white w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-amber-300 mb-1">Across America</h3>
                  <p className="text-amber-200 text-sm">Private 5-star venues</p>
                  <p className="text-amber-300 text-sm mt-1">Confirmed guests emailed first</p>
                </div>
              </div>
            </div>

            {/* Bonus Card */}
            <div className="group bg-gradient-to-br from-red-900/40 to-red-800/30 backdrop-blur-lg rounded-2xl p-6 border border-red-400/30 shadow-xl hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all duration-300 hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                  <Clock className="text-white w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-red-300 mb-1">RSVP &amp; It&apos;s Free</h3>
                  <p className="text-red-200 text-sm">Matched to your city &amp; budget</p>
                  <p className="text-red-300 text-sm mt-1">1-on-1 advisor slot reserved</p>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary CTA */}
          <div className="text-center mt-12">
            <Button 
              onClick={onRegisterClick}
              className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white font-bold text-lg px-10 py-6 rounded-full shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:shadow-[0_0_50px_rgba(34,197,94,0.7)] transition-all duration-300"
            >
              ✨ Confirm Your RSVP — It’s Free
            </Button>
            <p className="text-red-200 text-sm mt-4">⚡ All events are RSVP-only • Registered attendees receive venue locations &amp; schedules</p>
          </div>
        </div>
      </article>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce" role="presentation" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-red-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-red-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}