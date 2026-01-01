import React from "react";
import { motion } from "motion/react";

// DATA: This configuration assumes you have uploaded logo images to a 'public/logos' folder
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
      {/* Background with Singapore Daytime Skyline */}
      <div 
        className="absolute inset-0 z-0"
        role="img"
        aria-label="Singapore daytime skyline background"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1610956667016-15debe929a3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaW5nYXBvcmUlMjBza3lsaW5lJTIwZGF5dGltZXxlbnwxfHx8fDE3NjcxNjc3MTd8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-orange-50/90 to-white/95 backdrop-blur-sm" />
      </div>
header className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-orange-600 to-green-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase mb-4">
            Trusted Partners
          </div>
          <h2 id="builders-heading" className="text-4xl md:text-5xl font-black text-gray-900 mb-3">
            Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-green-600">35+ Top Developers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Direct access to India's most reputed real estate developers
          </p>
        </headerirect access to India's most reputed real estate developers
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center mb-10">
            {builders.map((builder, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex justify-center items-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl border border-orange-100 hover:border-orange-300 transition-all duration-300 hover:scale-105 min-h-[120px]"
                >
                    <img 
                        src={builder.logo} 
                        alt={`${builder.name} logo - Premium real estate developer`} 
                        width="200"
                        height="80"
                        loading="lazy"
                        className={`${builder.size === "large" ? "max-h-28" : "max-h-16"} max-w-full object-contain transition-all`}
                        onError={(e) => {
                            // Fallback if logo fails to load (e.g. file not uploaded yet)
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
            <div className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-orange-100 to-green-100 border-2 border-orange-200">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-green-600 font-bold text-lg">
                + Many More Leading Developers
              </span>
            </div>
        </div>
      </div>
    </section>
  );
}