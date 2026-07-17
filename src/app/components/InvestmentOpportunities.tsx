import React from "react";
import { Home, Castle, Building2, Rocket, TrendingUp, Gem } from "lucide-react";
import { motion } from "motion/react";

const categories = [
  { icon: Home, title: "Residential Apartments", color: "from-orange-500 to-orange-400" },
  { icon: Castle, title: "Villas & Row Houses", color: "from-green-500 to-green-400" },
  { icon: Building2, title: "Commercial Spaces", color: "from-orange-600 to-amber-500" },
  { icon: Rocket, title: "Pre-Launch Projects", color: "from-green-600 to-emerald-500" },
  { icon: TrendingUp, title: "High-Rental Yield", color: "from-orange-500 to-green-500" },
  { icon: Gem, title: "Luxury & Ultra-Luxury", color: "from-green-600 to-orange-600" },
];

interface InvestmentOpportunitiesProps {
  onRegisterClick?: () => void;
}

export function InvestmentOpportunities({ onRegisterClick }: InvestmentOpportunitiesProps) {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#FF6B35_1px,transparent_1px)] [background-size:20px_20px]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-orange-600 to-green-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase mb-4">
            Property Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-green-600">Property Options Available</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Diverse property types showcased from 30 lakhs to 200 crores across 35+ Indian cities
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-white border-2 border-orange-100 p-6 rounded-xl hover:border-orange-300 hover:shadow-2xl transition-all cursor-pointer group"
            >
              <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <item.icon className="text-white w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">{item.title}</h3>
              <p className="text-gray-600 text-sm">Explore exclusive options</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}