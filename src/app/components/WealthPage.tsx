import React, { useState } from "react";
import { 
  TrendingUp, 
  Shield, 
  Globe, 
  DollarSign, 
  FileText, 
  Calendar, 
  Building2, 
  Briefcase, 
  PiggyBank, 
  Users, 
  BarChart3, 
  Landmark,
  Download,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Phone,
  Mail,
  MessageCircle
} from "lucide-react";
import { Button } from "./ui/button";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";
import { Toaster } from "./ui/sonner";

interface WealthPageProps {
  onRegisterClick: () => void;
  onNavigateHome?: () => void;
  onNavigateWealth?: () => void;
  currentPage?: "home" | "wealth";
}

export function WealthPage({ onRegisterClick, onNavigateHome, onNavigateWealth, currentPage = "wealth" }: WealthPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    country: "Singapore"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRegisterClick();
  };

  return (
    <>
      <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
        <Navbar 
          onRegisterClick={onRegisterClick}
          onNavigateHome={onNavigateHome}
          onNavigateWealth={onNavigateWealth}
          currentPage={currentPage}
        />
        
        {/* Hero Block */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background with Diaspora Flow Map */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-green-50" />
            
            {/* Subtle World Map Background */}
            <div className="absolute inset-0 opacity-5">
              <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M200,300 Q400,250 600,300 T1000,300" stroke="#ff6b35" strokeWidth="2" strokeDasharray="5,5" opacity="0.3"/>
                <path d="M600,300 Q700,400 800,350 T1200,400" stroke="#22c55e" strokeWidth="2" strokeDasharray="5,5" opacity="0.3"/>
                <circle cx="600" cy="300" r="8" fill="#ff6b35"/>
                <circle cx="400" cy="250" r="6" fill="#22c55e"/>
                <circle cx="1000" cy="300" r="6" fill="#ff6b35"/>
                <circle cx="800" cy="350" r="6" fill="#22c55e"/>
              </svg>
            </div>
            
            {/* Animated Gradient Orbs */}
            <div className="absolute top-20 right-20 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          {/* Content */}
          <div className="container mx-auto px-6 py-32 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-green-100 px-6 py-2.5 rounded-full border border-orange-200 mb-8">
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                <span className="text-orange-700 font-semibold tracking-wide text-sm">Part of NRI Property Expo 2026</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-gray-900 to-green-600">
                  NRI GIFT City Knowledge Pavilion
                </span>
                <br />
                <span className="text-gray-900 text-3xl md:text-4xl lg:text-5xl">
                  Product Sessions, Educational Clinics & Interactive Rooms
                </span>
              </h1>

              {/* Subheadline - MAS Compliant */}
              <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-4xl mx-auto mb-8 leading-relaxed">
                Many NRIs struggle to resolve taxation and regulatory issues while living abroad. NRIs also want clarity on what is happening inside GIFT City across multi-currency regulations, compliance, taxation, repatriation, banking and more — this pavilion is designed to educate, simplify and guide NRIs through these complex topics.
              </p>

              <p className="text-sm text-gray-400 italic mb-10">
                * This content is for informational awareness only and does not constitute financial advice.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <Button 
                  onClick={onRegisterClick}
                  className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white text-lg px-10 py-7 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  📞 Book Consultation
                </Button>
                <Button 
                  onClick={() => document.getElementById('venue-section')?.scrollIntoView({ behavior: 'smooth' })}
                  variant="outline"
                  className="border-2 border-green-600 text-green-700 hover:bg-green-50 text-lg px-10 py-7 rounded-full transition-all duration-300"
                >
                  📍 Venue
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                {[
                  { icon: Users, label: "100,000+ NRIs" },
                  { icon: Globe, label: "From 14+ Countries" },
                  { icon: Calendar, label: "Interactive Sessions Available" },
                  { icon: MessageCircle, label: "One-on-One Support Sessions Available" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center space-y-2">
                    <item.icon className="w-8 h-8 text-orange-600" />
                    <span className="text-sm text-gray-600 font-medium text-center">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why This Page Exists */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl shadow-xl p-12 border-t-4 border-orange-500">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl mb-4 text-gray-900">Why This Pavilion Exists</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Many NRIs struggle to resolve taxation and regulatory issues while living abroad. NRIs also want clarity on what is happening inside GIFT City across multi-currency regulations, compliance, taxation, repatriation, banking and more — this pavilion is designed to educate, simplify and guide NRIs through these complex topics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Sessions Available */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-4">
                  <Landmark className="w-5 h-5 text-orange-600" />
                  <span className="text-orange-700 font-semibold text-sm">Educational Content</span>
                </div>
                <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
                  Educational Sessions Available at the Expo
                </h2>
                <p className="text-xl text-gray-600">Learn about NRI taxation, compliance and regulatory frameworks</p>
              </div>

              {/* Educational Sessions Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: FileText,
                    title: "NRI Tax Basics",
                    description: "Understand fundamentals of NRI taxation and filing requirements",
                    color: "orange"
                  },
                  {
                    icon: Globe,
                    title: "Understanding DTAA",
                    description: "Learn about Double Taxation Avoidance Agreements and benefits",
                    color: "green"
                  },
                  {
                    icon: DollarSign,
                    title: "Multi-Currency Transactions",
                    description: "Explore regulations around foreign exchange and currency management",
                    color: "orange"
                  },
                  {
                    icon: TrendingUp,
                    title: "Repatriation Rules",
                    description: "Discover how to repatriate funds compliantly across borders",
                    color: "green"
                  },
                  {
                    icon: Building2,
                    title: "Banking & Compliance",
                    description: "Get clarity on NRI banking regulations and compliance requirements",
                    color: "orange"
                  },
                  {
                    icon: MessageCircle,
                    title: "NRI Advisory Q&A Lounge",
                    description: "Interactive sessions with experts for your specific questions",
                    color: "green"
                  }
                ].map((session, i) => (
                  <div 
                    key={i}
                    className="group bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${session.color === 'orange' ? 'from-orange-500 to-orange-600' : 'from-green-500 to-green-600'} flex items-center justify-center mb-6`}>
                      <session.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl mb-3 text-gray-900 font-bold">{session.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{session.description}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center mt-12">
                <Button 
                  onClick={onRegisterClick}
                  className="bg-gradient-to-r from-orange-600 to-green-600 hover:from-orange-700 hover:to-green-700 text-white text-lg px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Register for Sessions <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Will and Inheritance for NRIs in India */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-orange-50">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="grid md:grid-cols-2">
                  {/* Left: Icon Visual */}
                  <div className="bg-gradient-to-br from-orange-600 to-green-600 p-12 flex items-center justify-center">
                    <div className="text-center">
                      <Shield className="w-24 h-24 text-white mx-auto mb-6" />
                      <h3 className="text-3xl text-white mb-2">Will and Inheritance for NRIs in India</h3>
                      <p className="text-orange-100">Secure Your Legacy</p>
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="p-12">
                    <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">
                      Protect Your Family — No Matter Where You Live
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      Cross-border inheritance for NRIs is complicated. Learn about securing assets in India and protecting your family's future.
                    </p>

                    <div className="space-y-4 mb-8">
                      {[
                        "Legal Will — Secure assets & avoid conflict",
                        "Family Trust — Advisory, Creation, Management",
                        "Succession Certificate",
                        "Probate Services",
                        "Property Due Diligence",
                        "Estate Planning Guidance",
                        "Executor of Will",
                        "Transfer of Property (NRI to Family)"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      onClick={onRegisterClick}
                      className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Speak to Estate Lawyer
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NRI Tax Clinic */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left: Content */}
                <div>
                  <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full mb-6">
                    <FileText className="w-5 h-5 text-green-600" />
                    <span className="text-green-700 font-semibold text-sm">Expert Tax Advisory</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
                    Pay Less Tax — Stay Compliant Globally
                  </h2>
                  
                  <div className="space-y-2 mb-6">
                    <p className="text-lg text-green-700 font-semibold">→ Returning NRIs — Learn to become tax-efficient</p>
                    <p className="text-lg text-orange-700 font-semibold">�� How to follow a better tax structure while abroad</p>
                    <p className="text-lg text-green-700 font-semibold">→ How to manage ESOPs as an NRI</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {[
                      "NRI tax filing for India + UAE + Canada + UK + Singapore",
                      "DTAA (Double Taxation Avoidance Agreement) planning",
                      "Avoiding double tax on global income",
                      "TDS optimization on Indian investments",
                      "Residential status determination"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">{i + 1}</span>
                        </div>
                        <p className="text-gray-700 text-lg">{item}</p>
                      </div>
                    ))}
                  </div>

                  <Button 
                    onClick={onRegisterClick}
                    className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white text-lg px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Register for Tax Clinic <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>

                {/* Right: Visual Card */}
                <div className="bg-gradient-to-br from-orange-50 to-green-50 rounded-3xl p-12 border-2 border-orange-200">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <BarChart3 className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl mb-4 text-gray-900">Tax Savings</h3>
                    <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-green-600 mb-4">
                      Up to 70%
                    </p>
                    <p className="text-gray-600 mb-6">With proper DTAA & planning</p>
                  </div>

                  <div className="mt-8 text-center">
                    <p className="text-lg font-bold text-gray-800 mb-2">14+ Countries | 10,000+ NRIs Helped</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Attend Wealth & Knowledge Sessions */}
        <section className="py-24 bg-gradient-to-br from-gray-900 via-orange-900 to-green-900 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                  <Calendar className="w-5 h-5 text-orange-300" />
                  <span className="text-orange-200 font-semibold text-sm">Live at the Expo</span>
                </div>
                <h2 className="text-4xl md:text-5xl mb-4">
                  Attend Wealth & Knowledge Sessions
                </h2>
                <p className="text-xl text-gray-300">Educational sessions designed for NRIs</p>
              </div>

              {/* Session Blocks */}
              <div className="grid md:grid-cols-3 gap-8">
                {/* NRI Tax Clinic */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-4">
                    <FileText className="w-8 h-8 text-orange-400" />
                    <span className="text-green-300 text-sm font-semibold">Session A</span>
                  </div>
                  
                  <h3 className="text-2xl mb-4 font-bold">NRI Tax Clinic</h3>
                  
                  <div className="space-y-2">
                    {[
                      "Learn compliance basics",
                      "Understand DTAA rights",
                      "One-on-one advisory signups inside venue"
                    ].map((point, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Will & Inheritance */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-4">
                    <Shield className="w-8 h-8 text-orange-400" />
                    <span className="text-green-300 text-sm font-semibold">Session B</span>
                  </div>
                  
                  <h3 className="text-2xl mb-4 font-bold">Will & Inheritance for NRIs</h3>
                  
                  <div className="space-y-2">
                    {[
                      "Indian legal process explained",
                      "How to protect family assets",
                      "Create & execute a Will abroad",
                      "Transfer of property guidance"
                    ].map((point, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* GIFT City for NRIs */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-4">
                    <Landmark className="w-8 h-8 text-orange-400" />
                    <span className="text-green-300 text-sm font-semibold">Session C</span>
                  </div>
                  
                  <h3 className="text-2xl mb-4 font-bold">GIFT City for NRIs</h3>
                  
                  <div className="space-y-2">
                    {[
                      "What is happening inside GIFT City",
                      "Regulatory clarity for NRIs",
                      "How NRIs can participate compliantly"
                    ].map((point, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center mt-12">
                <Button 
                  onClick={onRegisterClick}
                  className="bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 text-white text-lg px-12 py-7 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Reserve Seat →
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Venue Section */}
        <section id="venue-section" className="py-24 bg-gradient-to-br from-orange-50 via-white to-green-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-green-600">Event Venue</span>
                </h2>
                <p className="text-xl text-gray-600">Join us at Sheraton Towers Singapore, Scotts Road</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Left: Venue Info */}
                <div className="p-10 flex flex-col justify-center space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Landmark className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-800">Sheraton Towers Singapore</h3>
                      <p className="text-gray-600 mt-1">
                        39 Scotts Road,<br />
                        Singapore 228230
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Calendar className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-800">Event Date</h3>
                      <p className="text-gray-600 mt-1">
                        1st & 2nd August 2026 | 10am–7pm<br />
                        Check-in starts 30 minutes before sessions
                      </p>
                    </div>
                  </div>

                  <Button 
                    onClick={() => window.open('https://www.google.com/maps/dir//Sheraton+Towers+Singapore,+39+Scotts+Road,+Singapore+228230', '_blank')}
                    className="w-fit bg-gradient-to-r from-orange-600 to-green-600 hover:from-orange-700 hover:to-green-700 text-white font-bold shadow-lg hover:shadow-xl transition-all"
                  >
                    📍 Get Directions
                  </Button>
                </div>

                {/* Right: Map */}
                <div className="h-[400px] md:h-auto w-full bg-gray-200">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.774656757!2d103.8282837!3d1.3083553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1991f44e0169%3A0x7ff4a8da58234d97!2sSheraton%20Towers%20Singapore!5e0!3m2!1sen!2ssg!4v1629876543210!5m2!1sen!2ssg" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy"
                    title="Google Map"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Form */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl p-12 border-t-4 border-orange-500">
                {/* Header */}
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
                    Get Access to Every NRI Solution
                  </h2>
                  <p className="text-lg text-gray-600">
                    One registration unlocks property expo + wealth pavilion
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder="+65 XXXX XXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Country of Residence *
                    </label>
                    <select
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                    >
                      <option value="Singapore">Singapore</option>
                      <option value="UAE">UAE</option>
                      <option value="UK">United Kingdom</option>
                      <option value="USA">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-600 to-green-600 hover:from-orange-700 hover:to-green-700 text-white text-lg py-7 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    🎯 Get Access Now
                  </Button>
                </form>

                {/* Trust Badge */}
                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-500">
                    <Shield className="w-4 h-4 inline mr-1" />
                    Your information is secure and will never be shared
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
        <Toaster />
      </div>
    </>
  );
}

// Import guard (to prevent accidental auto-imports)
const Award = TrendingUp;