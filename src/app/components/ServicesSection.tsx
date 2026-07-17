import { Building2, Home, Trees, Store, MapPin, CheckCircle, TrendingUp, Users, Shield, FileText, Banknote } from "lucide-react";
import { Button } from "./ui/button";

interface ServicesSectionProps {
  onRegisterClick: () => void;
}

export function ServicesSection({ onRegisterClick }: ServicesSectionProps) {
  const cities = [
    "Mumbai", "Bangalore", "Hyderabad", "Chennai", 
    "Delhi NCR", "Pune", "Goa", "Cochin",
    "Kolkata", "Coimbatore", "Mangalore", "Ahmedabad",
    "Vadodara", "Gurugram"
  ];

  const propertyTypes = [
    {
      icon: Home,
      title: "RESIDENTIAL",
      description: "Premium apartments and luxury homes",
      gradient: "from-orange-500 to-orange-400"
    },
    {
      icon: Trees,
      title: "PLOTS",
      description: "Strategic land investments",
      gradient: "from-green-500 to-green-400"
    },
    {
      icon: Building2,
      title: "VILLAS",
      description: "Exclusive villa communities",
      gradient: "from-orange-600 to-amber-500"
    },
    {
      icon: Store,
      title: "COMMERCIAL",
      description: "High-yield commercial spaces",
      gradient: "from-green-600 to-emerald-500"
    }
  ];

  const services = [
    { icon: Shield, text: "Legal Procedures & Documentation" },
    { icon: FileText, text: "Taxation Guidance" },
    { icon: Banknote, text: "Home Loan Assistance" },
    { icon: TrendingUp, text: "Investment Advisory" },
    { icon: Users, text: "One-on-One Developer Meetings" },
    { icon: CheckCircle, text: "Exclusive Deals & Offers" }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-orange-50/30" />
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block bg-gradient-to-r from-orange-600 to-green-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase mb-6">
            India's Premier Property Exhibition in Singapore
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Your Gateway to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-green-600">Verified Premium Properties</span> in India
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Stop browsing endless listings online. <span className="font-bold text-orange-600">Meet India's most trusted developers face-to-face</span> right here in Singapore and explore <span className="font-bold text-green-600">500+ hand-picked, verified projects</span> across <span className="font-bold text-orange-600">35+ prime Indian cities</span>.
          </p>
          <p className="text-lg text-gray-500 mt-4">
            From residential apartments to luxury villas, commercial spaces to land — discover your perfect property with expert guidance.
          </p>
          <p className="text-sm text-gray-400 mt-4 italic">
            * This content is for informational awareness only and does not constitute financial advice.
          </p>
        </div>

        {/* Who Is This For */}
        <div className="bg-gradient-to-r from-orange-600 to-green-600 rounded-3xl p-12 mb-16 shadow-2xl">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              🎯 Exclusively for Indians Living in Singapore
            </h3>
            <p className="text-xl text-orange-100 mb-6 max-w-3xl mx-auto">
              This Exhibition is designed specifically for <span className="font-bold text-white">NRIs, PIOs, OCIs, and Resident Indians abroad</span> who want to learn about India's growing property market
            </p>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              💼 Meet Top Property Developers from across India for personalized 1-on-1 consultations — right here in Singapore
            </p>
          </div>
        </div>

        {/* Property Types Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Explore Properties Across Multiple Categories
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {propertyTypes.map((type, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${type.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300`}>
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{type.title}</h4>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-green-600">
              Ranging from ₹30 Lakhs to ₹15 Crores
            </p>
          </div>
        </div>

        {/* Cities Coverage */}
        <div className="mb-16 bg-gradient-to-br from-orange-50 to-green-50 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-10">
            <MapPin className="inline-block w-8 h-8 text-orange-600 mr-2 mb-1" />
            Properties Across 35+ Major Indian Cities
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {cities.map((city, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl px-4 py-3 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-center border border-orange-100"
              >
                <p className="font-semibold text-gray-800">{city}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services & Benefits */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Expert Guidance on Every Aspect
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Special Perks */}
        <div className="bg-gradient-to-r from-orange-500 to-green-600 rounded-3xl p-12 mb-16 shadow-2xl text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            ☕ Special Perks for Registered Clients
          </h3>
          <p className="text-xl text-orange-50 mb-8">
            Complimentary Snacks & High Tea will be provided to all Registered Clients
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold">
              ✅ Free Entry
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold">
              ✅ Complimentary Refreshments
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold">
              ✅ Expert Consultations
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold">
              ✅ Exclusive Deals
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-br from-gray-900 to-orange-900 rounded-3xl p-16 shadow-2xl">
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Invest in Your Dream Property?
          </h3>
          <p className="text-xl text-orange-200 mb-8 max-w-2xl mx-auto">
            Don't miss this exclusive opportunity to meet India's top developers face-to-face in Singapore
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              onClick={onRegisterClick}
              className="bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 text-white font-bold text-xl px-12 py-7 rounded-full shadow-[0_0_40px_rgba(249,115,22,0.6)] hover:shadow-[0_0_60px_rgba(249,115,22,0.8)] transition-all duration-300 transform hover:scale-105"
            >
              📝 BOOK YOUR SLOT TODAY
            </Button>
          </div>
          <p className="text-orange-300 text-sm mt-6">
            ⏰ Limited Slots Available • Register Now to Secure Your Spot
          </p>
        </div>
      </div>
    </section>
  );
}