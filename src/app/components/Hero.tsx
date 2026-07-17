import { Calendar, MapPin, Clock, Users, TrendingUp, Award, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

interface HeroProps {
  onRegisterClick: () => void;
  onNavigateToWealth?: () => void;
}

export function Hero({ onRegisterClick, onNavigateToWealth }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b0906]" role="banner" aria-label="Hero section for India Property Expo 2026">
      {/* Background Image - Singapore Skyline */}
      <div
        className="absolute inset-0 z-0 will-change-auto"
        role="img"
        aria-label="Singapore skyline at night"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1628933978056-81ee94ad6856?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaW5nYXBvcmUlMjBza3lsaW5lJTIwbmlnaHR8ZW58MXx8fHwxNzY3MTY0MDM0fDA&ixlib=rb-4.1.0&q=80&w=1080')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Refined single-tone overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/72 to-[#0b0906]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_0%,rgba(217,166,90,0.10),transparent)]" />
      </div>

      {/* Content */}
      <article className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            {/* Kicker */}
            <div className="inline-flex items-center gap-3 mb-8 animate-fade-up">
              <span className="w-8 h-px bg-amber-300/50" />
              <span className="font-body text-amber-200/90 text-xs font-semibold tracking-[0.25em] uppercase">
                Singapore Edition &middot; 1&ndash;2 August 2026
              </span>
              <span className="w-8 h-px bg-amber-300/50" />
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-white leading-[1.05] mb-6 animate-fade-up" style={{ animationDelay: '90ms' }}>
              India Property Expo
              <span className="block italic font-light text-amber-100/90 text-4xl sm:text-5xl md:text-6xl mt-2">
                in Singapore
              </span>
            </h1>

            {/* Subheadline - MAS Compliant: Informational */}
            <p className="font-body text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '180ms' }}>
              Meet <span className="text-amber-200 font-semibold">35+ trusted developers</span> face-to-face, explore{" "}
              <span className="text-amber-200 font-semibold">500+ verified projects</span>, and get curated insights
              built for NRI investors.
            </p>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-2 animate-fade-up" style={{ animationDelay: '270ms' }}>
              <Button
                onClick={onRegisterClick}
                className="bg-amber-400 hover:bg-amber-300 text-neutral-900 font-semibold font-body text-base px-9 py-6 rounded-full transition-colors duration-300"
                aria-label="Register for free India Property Expo in Singapore"
              >
                Register &mdash; It&apos;s Free
              </Button>
              <button
                onClick={onRegisterClick}
                className="group inline-flex items-center gap-2 font-body text-white/70 hover:text-white font-medium transition-colors duration-300"
                aria-label="Book your consultation slot"
              >
                Book a private consultation
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
              </button>
            </div>

            {/* NRI Tax Clinic & GIFT City Baatchit */}
            {onNavigateToWealth && (
              <div className="mt-10 flex justify-center animate-fade-up" style={{ animationDelay: '360ms' }}>
                <div
                  onClick={onNavigateToWealth}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onNavigateToWealth();
                    }
                  }}
                  aria-label="Navigate to NRI Tax Clinic and GIFT City Baatchit"
                  className="group max-w-xl w-full text-left bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-amber-300/30 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-amber-300" strokeWidth={1.5} />
                    <span className="font-body text-amber-300 text-xs font-semibold uppercase tracking-widest">
                      Beyond Real Estate
                    </span>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl text-white mb-1.5">
                    NRI Tax Clinic &amp; GIFT City Baatchit
                  </h3>
                  <p className="font-body text-white/55 text-sm leading-relaxed mb-3">
                    Regulatory updates, processes and global-level opportunities available to NRI participants in GIFT City.
                  </p>
                  <span className="inline-flex items-center gap-1.5 font-body text-white text-sm font-medium">
                    Explore complete information
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                  </span>
                </div>
              </div>
            )}

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-12 font-body text-sm text-white/50 animate-fade-up" style={{ animationDelay: '450ms' }}>
              <span className="inline-flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-300/80" strokeWidth={1.5} />
                Trusted by 100,000+ NRIs
              </span>
              <span className="hidden sm:inline text-white/20">&middot;</span>
              <span className="inline-flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-amber-300/80" strokeWidth={1.5} />
                Exclusive pre-launch information
              </span>
              <span className="hidden sm:inline text-white/20">&middot;</span>
              <span className="inline-flex items-center gap-2">
                <Users className="w-4 h-4 text-amber-300/80" strokeWidth={1.5} />
                Free 1-on-1 consultations
              </span>
            </div>
          </header>

          {/* Event Details Strip */}
          <div className="animate-fade-up" style={{ animationDelay: '540ms' }}>
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10 border border-white/10 rounded-2xl bg-white/[0.03] backdrop-blur-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-5">
                <Calendar className="w-5 h-5 text-amber-300 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="font-body text-white font-medium">1&ndash;2 August</p>
                  <p className="font-body text-white/45 text-sm">Sat&ndash;Sun, 10am&ndash;7pm</p>
                </div>
              </div>
              <div className="flex items-center gap-4 px-6 py-5">
                <MapPin className="w-5 h-5 text-amber-300 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="font-body text-white font-medium">Sheraton Towers</p>
                  <p className="font-body text-white/45 text-sm">39 Scotts Road, S228230</p>
                </div>
              </div>
              <div className="flex items-center gap-4 px-6 py-5">
                <Clock className="w-5 h-5 text-amber-300 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="font-body text-white font-medium">Free Entry</p>
                  <p className="font-body text-white/45 text-sm">High tea &amp; consultations</p>
                </div>
              </div>
            </div>
            <p className="text-center font-body text-white/35 text-xs tracking-wide mt-6">
              Limited slots &mdash; registration required
            </p>
          </div>
        </div>
      </article>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10" role="presentation" aria-hidden="true">
        <div className="flex flex-col items-center gap-2 opacity-50">
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-white/50">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
