import React from "react";
import { motion } from "motion/react";

// Only developers with a logo asset in public/logos are listed here.
// Add the file, then add the row — the grid has no text-only fallback tiles.
const builders = [
  { name: "Godrej Properties", logo: "/logos/godrej.png", size: "normal" },
  { name: "Lodha", logo: "/logos/lodha.png", size: "normal" },
  { name: "Rustomjee", logo: "/logos/rustomjee.png", size: "normal" },
  { name: "Sobha", logo: "/logos/sobha.png", size: "normal" },
  { name: "Raymond Realty", logo: "/logos/raymond.png", size: "normal" },
  { name: "Puravankara", logo: "/logos/puravankara.png", size: "normal" },
  { name: "L&T Realty", logo: "/logos/lnt.png", size: "normal" },
  { name: "Kolte Patil", logo: "/logos/koltepatil.png", size: "large" },
  { name: "Kalpataru", logo: "/logos/kalpataru.png", size: "normal" },
  { name: "BPTP", logo: "/logos/bptp.png", size: "normal" },
  { name: "Prestige Group", logo: "/logos/prestige.png", size: "large" },
  { name: "Brigade Group", logo: "/logos/brigade.png", size: "large" },
  { name: "Oberoi Realty", logo: "/logos/oberoi.png", size: "large" },
  { name: "Mahindra Lifespaces", logo: "/logos/mahindra.png", size: "large" },
  { name: "Shapoorji Pallonji", logo: "/logos/shapoorji.png", size: "large" },
];

export function BuilderLogos() {
  return (
    <section className="py-20 relative overflow-hidden" aria-labelledby="builders-heading">
      {/* Background: Manama waterfront, heavily washed out behind the grid */}
      <div 
        className="absolute inset-0 z-0"
        role="img"
        aria-label="Manama waterfront skyline"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1748366546170-1ee68388f183?fm=jpg&q=70&w=1600&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-red-50/90 to-white/95 backdrop-blur-sm" />
      </div>

      {/* Fade-in from the dark Hero section above, for a seamless transition */}
      <div
        className="absolute top-0 left-0 right-0 h-32 z-[1] bg-gradient-to-b from-black/50 via-black/10 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 relative z-10">
        <header className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-red-600 to-amber-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase mb-4">
            Trusted Partners
          </div>
          <h2 id="builders-heading" className="text-4xl md:text-5xl font-black text-gray-900 mb-3">
            Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-amber-600">35+ Top Developers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Direct access to India's most reputed real estate developers
          </p>
        </header>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center mb-10">
            {builders.map((builder, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex justify-center items-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl border border-red-100 hover:border-red-300 transition-all duration-300 hover:scale-105 min-h-[120px]"
                >
                    <img 
                        src={builder.logo} 
                        alt={`${builder.name} logo - Premium real estate developer`} 
                        width="200"
                        height="80"
                        loading="lazy"
                        decoding="async"
                        className={`${builder.size === "large" ? "max-h-28" : "max-h-16"} max-w-full object-contain transition-all`}
                        onError={(e) => {
                            // Safety net if an asset 404s; every listed builder has a logo file
                            e.currentTarget.style.display = 'none';
                            const parent = e.currentTarget.parentElement;
                            if (parent) {
                                parent.innerHTML = `<span class="font-bold text-gray-700 text-center text-sm">${builder.name}</span>`;
                            }
                        }}
                    />
                </motion.div>
            ))}
        </div>
        
        <div className="text-center">
            <div className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-red-100 to-amber-100 border-2 border-red-200">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-amber-600 font-bold text-lg">
                + Many More Leading Developers
              </span>
            </div>
        </div>
      </div>
    </section>
  );
}