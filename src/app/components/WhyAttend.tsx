import React from "react";
import { Users, FileText, Briefcase, MessageSquare, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "./ui/button";

const features = [
  {
    icon: Users,
    title: "Meet India's Top Developers",
    desc: "Get direct access to reputed developers from Mumbai, Bangalore, Delhi, Pune, Hyderabad.",
    gradient: "from-orange-500 to-orange-400"
  },
  {
    icon: FileText,
    title: "Estate Planning & Will Advisory",
    desc: "Learn about estate planning, will creation, and succession planning for seamless wealth transfer.",
    gradient: "from-green-500 to-green-400"
  },
  {
    icon: Briefcase,
    title: "NRI Legal & Tax Advisory",
    desc: "Attend free sessions on taxation, repatriation, and regulatory information for NRIs.",
    gradient: "from-orange-600 to-amber-500"
  },
  {
    icon: TrendingUp,
    title: "GIFT City Information",
    desc: "Discover information about India's first operational smart city and IFSC for NRI participants.",
    gradient: "from-green-600 to-emerald-500"
  },
  {
    icon: MessageSquare,
    title: "Personalised Guidance",
    desc: "1-on-1 consultation with real estate experts to explore property options suited to you.",
    gradient: "from-orange-500 to-green-500"
  }
];

export function WhyAttend({ onRegisterClick }: { onRegisterClick: () => void }) {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-orange-50/30 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent" />
        
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                  Why Attend This <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-green-600">Exclusive Event?</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Premium services and expert guidance tailored for NRI investors
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ y: -10 }}
                        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 group hover:shadow-2xl transition-all duration-300 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)] max-w-[400px] hover:border-orange-200"
                    >
                        <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                            <feature.icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            {feature.desc}
                        </p>
                    </motion.div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <Button 
                    onClick={onRegisterClick}
                    className="bg-gradient-to-r from-orange-600 to-green-600 hover:from-orange-700 hover:to-green-700 text-white font-bold py-7 px-12 text-xl shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:shadow-[0_0_50px_rgba(249,115,22,0.6)] transition-all duration-300 rounded-full transform hover:scale-105"
                >
                    🎯 Register Now - Limited Slots
                </Button>
                <p className="text-gray-600 mt-4 font-medium">Join 100,000+ NRIs who attend our events</p>
            </div>
        </div>
    </section>
  );
}