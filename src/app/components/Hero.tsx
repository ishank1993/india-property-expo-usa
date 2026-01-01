import { Calendar, MapPin, Clock, Users, TrendingUp, Award, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

interface HeroProps {
  onRegisterClick: () => void;
  onNavigateToWealth?: () => void;
}

export function Hero({ onRegisterClick, onNavigateToWealth }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" role="banner" aria-label="Hero section for India Property Expo 2026">
      {/* Background Image - Singapore Skyline */}
      <div 
        className="absolute inset-0 z-0"
        role="img"
        aria-label="Singapore skyline at night"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1628933978056-81ee94ad6856?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaW5nYXBvcmUlMjBza3lsaW5lJTIwbmlnaHR8ZW58MXx8fHwxNzY3MTY0MDM0fDA&ixlib=rb-4.1.0&q=80&w=1080')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/30 via-transparent to-green-900/30" />
      </div>

      {/* Animated Particles/Dots */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute top-20 left-10 w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-green-500 rounded-full animate-pulse delay-100" />
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-200" />
        <div className="absolute bottom-20 right-40 w-3 h-3 bg-green-400 rounded-full animate-pulse delay-300" />
      </div>

      {/* Content */}
      <article className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            {/* Event Badge */}
            <div className="inline-flex items-center space-x-3 mb-6 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <span className="w-2.5 h-2.5 bg-orange-500 rounded-full animate-ping absolute" />
              <span className="w-2.5 h-2.5 bg-orange-500 rounded-full" />
              <span className="text-orange-300 font-semibold tracking-wider uppercase text-sm">Exclusive Singapore Edition 2026</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              <span className="text-white inline-block">
                INDIA PROPERTY EXPO
              </span>
              <br />
              <span className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mt-2 inline-block">
                IN SINGAPORE 2026
              </span>
            </h1>

            {/* Subheadline - MAS Compliant: Informational */}
            <p className="text-xl md:text-2xl text-gray-100 font-medium max-w-3xl mx-auto mb-8 leading-relaxed">
              Meet <span className="text-orange-400 font-bold">35+ Trusted Developers</span> Face-to-Face • Explore <span className="text-green-400 font-bold">500+ Verified Projects</span> • Discover <span className="text-white font-bold">Curated Insights & Offerings</span>
            </p>

            {/* Primary CTA - Large & Prominent */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Button 
                onClick={onRegisterClick}
                className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-bold text-xl px-12 py-7 rounded-full shadow-[0_0_40px_rgba(249,115,22,0.6)] hover:shadow-[0_0_60px_rgba(249,115,22,0.8)] transition-all duration-300 transform hover:scale-105 animate-bounce"
                aria-label="Register for free India Property Expo in Singapore"
              >
                🎯 REGISTER FREE NOW
              </Button>
              <Button 
                onClick={onRegisterClick}
                variant="outline"
                className="border-2 border-green-500 text-green-300 hover:bg-green-600/20 font-bold text-lg px-10 py-7 rounded-full backdrop-blur-sm transition-all duration-300"
                aria-label="Book your consultation slot"
              >
                📅 Book Your Slot
              </Button>
            </div>

            {/* NEW: NRI Tax Clinic & GIFT City Baatchit Banner */}
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
                    🏦 NRI Tax Clinic & GIFT City Baatchit
                  </h3>
                  <p className="text-blue-100 mb-4">
                    Get to know what's happening in GIFT City and how it benefits NRIs — discover regulatory updates, processes and global-level opportunities available to NRI participants.
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
                <Award className="w-5 h-5 text-orange-400" />
                <span>Trusted by 100,000+ NRIs</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span>Exclusive Pre-Launch Information</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-orange-400" />
                <span>Free 1-on-1 Consultations</span>
              </div>
            </div>
          </div>

          {/* Event Details Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Date Card */}
            <div className="group bg-gradient-to-br from-orange-900/40 to-orange-800/30 backdrop-blur-lg rounded-2xl p-6 border border-orange-400/30 shadow-xl hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all duration-300 hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                  <Calendar className="text-white w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-orange-300 mb-1">31st JAN & 1st FEB</h3>
                  <p className="text-orange-200 font-medium">Friday - Saturday</p>
                  <p className="text-orange-300 text-sm mt-1">10:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>

            {/* Venue Card */}
            <div className="group bg-gradient-to-br from-green-900/40 to-green-800/30 backdrop-blur-lg rounded-2xl p-6 border border-green-400/30 shadow-xl hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all duration-300 hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                  <MapPin className="text-white w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-green-300 mb-1">Novotel Kitchener</h3>
                  <p className="text-green-200 text-sm">180 Kitchener Road</p>
                  <p className="text-green-300 text-sm mt-1">Singapore 208539</p>
                </div>
              </div>
            </div>

            {/* Bonus Card */}
            <div className="group bg-gradient-to-br from-orange-900/40 to-orange-800/30 backdrop-blur-lg rounded-2xl p-6 border border-orange-400/30 shadow-xl hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all duration-300 hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                  <Clock className="text-white w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-orange-300 mb-1">FREE Entry</h3>
                  <p className="text-orange-200 text-sm">Complimentary High Tea</p>
                  <p className="text-orange-300 text-sm mt-1">Expert Consultations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary CTA */}
          <div className="text-center mt-12">
            <Button 
              onClick={onRegisterClick}
              className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-bold text-lg px-10 py-6 rounded-full shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:shadow-[0_0_50px_rgba(34,197,94,0.7)] transition-all duration-300"
            >
              ✨ Secure Your Free Pass Today
            </Button>
            <p className="text-orange-200 text-sm mt-4">⚡ Limited Slots Available • First Come First Served</p>
          </div>
        </div>
      </article>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce\" role=\"presentation\" aria-hidden=\"true\">
        <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center\">
          <div className="w-1 h-3 bg-orange-400 rounded-full mt-2 animate-pulse\" />
        </div>
      </div>
    </section>
  );
}