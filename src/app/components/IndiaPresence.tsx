import React from "react";
import { motion } from "motion/react";
import { Globe, MapPin, Building2, Landmark, Cpu, Palmtree, Crown, Briefcase } from "lucide-react";

const cities = [
  "Mumbai", "Pune", "Bengaluru", "Chennai", "Hyderabad", 
  "Delhi NCR", "Goa", "Kolkata", "Ahmedabad", "Chandigarh"
];

const cityIcons = [
    { icon: Building2, city: "MUMBAI", label: "Financial Capital" },
    { icon: Landmark, city: "DELHI NCR", label: "Capital Region" },
    { icon: Cpu, city: "BENGALURU", label: "Tech Hub" },
    { icon: Palmtree, city: "GOA", label: "Holiday Homes" },
    { icon: Crown, city: "HYDERABAD", label: "Royal Living" },
    { icon: Briefcase, city: "AHMEDABAD", label: "Business Hub" }
];

export function IndiaPresence() {
  return (
    <section className="relative py-24 overflow-hidden min-h-[800px] flex items-center bg-gradient-to-br from-red-900 via-amber-900 to-red-800">
      
      {/* Background Effect */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/50 via-amber-900/50 to-red-900/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.15)_0%,transparent_60%)]" />
        {/* Animated grid lines */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <div className="lg:w-5/12 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500/20 to-transparent border-l-4 border-red-400 px-6 py-2 mb-8 backdrop-blur-sm">
                <Globe className="w-4 h-4 text-red-400" />
                <span className="text-red-300 text-sm font-bold tracking-[0.2em] uppercase">
                    🇺🇸 America to India Connection
                </span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                Invest Across <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-white to-amber-400 bg-[length:200%_auto] animate-gradient">
                    35+ Indian Cities
                </span>
                <span className="block text-2xl mt-4 text-red-300">From America</span>
              </h2>

              <p className="text-red-100 text-lg leading-relaxed mb-10 border-l-4 border-red-400/50 pl-6">
                <span className="font-semibold text-white">Exclusively for US-based NRIs, PIOs &amp; OCIs.</span> Experience the finest real estate opportunities from every major corner of India without leaving the United States. We bring India’s premier properties right to your city.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-red-400/50 transition-all duration-300 group hover:-translate-y-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="w-5 h-5 text-red-400" />
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-1 group-hover:text-red-400 transition-colors">100+</h3>
                  <p className="text-xs text-red-200 uppercase tracking-widest font-medium">Premium Projects</p>
                </div>
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-amber-400/50 transition-all duration-300 group hover:-translate-y-1">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-amber-400" />
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">35+</h3>
                  <p className="text-xs text-red-200 uppercase tracking-widest font-medium">Indian Cities</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                 {cities.map((city, i) => (
                     <div key={i} className="flex items-center space-x-1 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-red-400/50 hover:bg-red-500/10 transition-colors cursor-default group">
                         <MapPin className="w-3 h-3 text-red-300 group-hover:text-red-400 transition-colors" />
                         <span className="text-xs font-medium text-red-200 group-hover:text-white transition-colors">{city}</span>
                     </div>
                 ))}
                 <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-transparent text-red-300 border border-red-400 border-dashed">
                     & more
                 </span>
              </div>
            </motion.div>
          </div>

          {/* Right Visual - 6 Icons Orbital Layout */}
          <div className="lg:w-7/12 relative flex justify-center items-center h-[600px]">
             {/* Orbit Rings */}
             <div className="absolute w-[450px] h-[450px] rounded-full border-2 border-red-400/30 animate-spin-slow opacity-40" style={{ animationDuration: '40s' }} />
             <div className="absolute w-[300px] h-[300px] rounded-full border-2 border-amber-400/40 animate-spin-reverse-slow opacity-50" style={{ animationDuration: '30s' }} />
             <div className="absolute w-[150px] h-[150px] rounded-full border border-white/20 animate-spin-slow opacity-30" style={{ animationDuration: '20s' }} />
             
             {/* Rotating Container */}
             <motion.div 
                className="relative w-[500px] h-[500px]"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
             >
                {cityIcons.map((item, idx) => {
                    const angle = (idx * 360) / cityIcons.length;
                    const radius = 220; // Distance from center
                    const x = radius * Math.cos((angle * Math.PI) / 180);
                    const y = radius * Math.sin((angle * Math.PI) / 180);
                    
                    const Icon = item.icon;
                    
                    // Alternate colors between orange and green
                    const isOrange = idx % 2 === 0;
                    const borderColor = isOrange ? 'border-red-500/70' : 'border-amber-500/70';
                    const iconColor = isOrange ? 'text-red-600' : 'text-amber-600';
                    const hoverBorder = isOrange ? 'hover:border-red-500' : 'hover:border-amber-500';
                    const hoverIcon = isOrange ? 'group-hover:text-red-700' : 'group-hover:text-amber-700';
                    const shadowColor = isOrange ? 'hover:shadow-red-500/30' : 'hover:shadow-amber-500/30';

                    return (
                        <motion.div 
                            key={idx}
                            className={`absolute w-28 h-28 -ml-14 -mt-14 rounded-full flex flex-col items-center justify-center bg-white backdrop-blur-md border-2 ${borderColor} ${hoverBorder} shadow-lg hover:shadow-2xl ${shadowColor} group z-10 cursor-default transition-all duration-300 hover:scale-110`}
                            style={{ 
                                left: "50%", 
                                top: "50%",
                                x: x,
                                y: y
                            }}
                            // Counter-rotate to keep text upright
                            animate={{ rotate: -360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        >
                            <div className="flex flex-col items-center justify-center p-2 text-center">
                                <Icon className={`w-8 h-8 ${iconColor} mb-1 group-hover:scale-110 ${hoverIcon} transition-transform duration-300`} strokeWidth={1.5} />
                                <span className="text-[10px] font-bold text-gray-900 tracking-wider uppercase">{item.city}</span>
                                <span className="text-[8px] text-gray-600 font-medium scale-0 group-hover:scale-100 transition-all duration-300 h-0 group-hover:h-auto">{item.label}</span>
                            </div>
                        </motion.div>
                    );
                })}
             </motion.div>
             
             {/* Center Badge (Stationary) - Simple Pan India Design */}
             <div className="absolute z-20 pointer-events-none">
                 <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", duration: 1.5, bounce: 0.4 }}
                    className="w-40 h-40 bg-gradient-to-br from-white via-red-50 to-white backdrop-blur-xl border-4 border-red-500 rounded-full flex flex-col items-center justify-center shadow-2xl relative overflow-hidden"
                 >
                    {/* Animated tricolor rings */}
                    <div className="absolute inset-0 rounded-full border-2 border-red-400 animate-ping opacity-30" />
                    <div className="absolute inset-0 rounded-full border-2 border-amber-400 animate-ping opacity-20" style={{ animationDelay: '0.5s' }} />
                    
                    {/* Tricolor gradient background effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-white/50 to-amber-500/5 animate-pulse" style={{ animationDuration: '3s' }} />
                    
                    <div className="text-center z-10 relative">
                        <span className="block text-4xl font-black text-red-600 tracking-tight drop-shadow-lg leading-tight">PAN</span>
                        <span className="block text-4xl font-black text-amber-600 tracking-tight drop-shadow-lg -mt-2">INDIA</span>
                        
                        <div className="flex items-center justify-center gap-1 mt-2">
                          <div className="w-2 h-2 rounded-full bg-red-500"></div>
                          <div className="w-2 h-2 rounded-full bg-white border border-red-500"></div>
                          <div className="w-2 h-2 rounded-full bg-amber-600"></div>
                        </div>
                    </div>
                 </motion.div>
             </div>

          </div>
        </div>
      </div>
    </section>
  );
}