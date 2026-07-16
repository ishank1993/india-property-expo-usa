import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { BlogIndexPage } from "./components/blog/BlogIndexPage";
import { BlogPostPage } from "./components/blog/BlogPostPage";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ServicesSection } from "./components/ServicesSection";
import { WhyAttend } from "./components/WhyAttend";
import { InvestmentOpportunities } from "./components/InvestmentOpportunities";
import { BuilderLogos } from "./components/BuilderLogos";
import { IndiaPresence } from "./components/IndiaPresence";
import { Gallery } from "./components/Gallery";
import { Location } from "./components/Location";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import { RegistrationModal } from "./components/RegistrationModal";
import { Favicon } from "./components/Favicon";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { SEOHead } from "./components/SEOHead";
import { MetaPixel } from "./components/MetaPixel";
import { WealthPage } from "./components/WealthPage";
import { FAQSection } from "./components/FAQSection";
import { CookieConsent } from "./components/CookieConsent";
import { ComplianceFooter } from "./components/ComplianceFooter";
import { TermsConditions } from "./components/TermsConditions";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { PrivacyPolicyStandalone } from "./components/PrivacyPolicyStandalone";
import { Disclaimer } from "./components/Disclaimer";
import { AdminDashboard } from "./components/AdminDashboard";
import { trackPageView } from "@/utils/metaConversionApi";

// Top-level router: blog gets real URL paths, everything else keeps
// the existing hash-based page switching in MainApp.
export default function App() {
  return (
    <Routes>
      <Route path="/blog" element={<BlogIndexPage />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
      <Route path="*" element={<MainApp />} />
    </Routes>
  );
}

// Main App Component - Mobile Optimized Form
function MainApp() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<"home" | "wealth" | "terms" | "privacy" | "privacy-policy" | "disclaimer" | "admin">("home");
  const [popupCount, setPopupCount] = useState(0);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // Add smooth scrolling behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  // Check if user has already submitted the form
  useEffect(() => {
    const submitted = localStorage.getItem('registrationSubmitted');
    if (submitted === 'true') {
      setHasSubmitted(true);
    }
  }, []);

  // Handle URL hash for admin access
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash === 'admin') {
      setCurrentPage('admin');
    } else if (hash === 'privacy-policy') {
      setCurrentPage('privacy-policy');
    } else if (hash === 'privacy') {
      setCurrentPage('privacy');
    } else if (hash === 'terms') {
      setCurrentPage('terms');
    } else if (hash === 'disclaimer') {
      setCurrentPage('disclaimer');
    } else if (hash === 'wealth') {
      setCurrentPage('wealth');
    }
    
    // Track initial page view
    trackPageView();
  }, []);

  // Timed modal popup logic with specific intervals: 10s, 40s, 1min, 1min
  useEffect(() => {
    // Don't show popup if already submitted or max count reached (4 popups max)
    if (hasSubmitted || popupCount >= 4) return;

    let timer: NodeJS.Timeout;

    if (popupCount === 0) {
      // First popup after 10 seconds
      timer = setTimeout(() => {
        setIsRegisterOpen(true);
        setPopupCount(1);
      }, 10000);
    } else if (popupCount === 1) {
      // Second popup after 40 seconds from first
      timer = setTimeout(() => {
        if (!isRegisterOpen) {
          setIsRegisterOpen(true);
          setPopupCount(2);
        }
      }, 40000);
    } else if (popupCount === 2) {
      // Third popup after 1 minute from second
      timer = setTimeout(() => {
        if (!isRegisterOpen) {
          setIsRegisterOpen(true);
          setPopupCount(3);
        }
      }, 60000);
    } else if (popupCount === 3) {
      // Fourth popup after 1 minute from third (final)
      timer = setTimeout(() => {
        if (!isRegisterOpen) {
          setIsRegisterOpen(true);
          setPopupCount(4);
        }
      }, 60000);
    }

    return () => clearTimeout(timer);
  }, [popupCount, hasSubmitted, isRegisterOpen]);

  const openRegister = () => setIsRegisterOpen(true);
  
  const closeRegister = () => {
    setIsRegisterOpen(false);
  };

  const handleRegistrationSuccess = () => {
    setHasSubmitted(true);
    localStorage.setItem('registrationSubmitted', 'true');
    setIsRegisterOpen(false);
  };

  const navigateToWealth = () => {
    setCurrentPage("wealth");
    window.scrollTo(0, 0);
    trackPageView(); // Track page navigation
  };
  const navigateToHome = () => {
    setCurrentPage("home");
    window.scrollTo(0, 0);
    trackPageView(); // Track page navigation
  };

  const navigateToTerms = () => {
    setCurrentPage("terms");
    window.scrollTo(0, 0);
  };
  const navigateToPrivacy = () => {
    setCurrentPage("privacy");
    window.scrollTo(0, 0);
  };
  const navigateToPrivacyPolicy = () => {
    setCurrentPage("privacy-policy");
    window.scrollTo(0, 0);
  };
  const navigateToDisclaimer = () => {
    setCurrentPage("disclaimer");
    window.scrollTo(0, 0);
  };

  const navigateToAdmin = () => {
    setCurrentPage("admin");
    window.scrollTo(0, 0);
  };

  // If on wealth page, render WealthPage component
  if (currentPage === "wealth") {
    return (
      <>
        <SEOHead />
        <MetaPixel />
        <WealthPage 
          onRegisterClick={openRegister} 
          onNavigateHome={navigateToHome}
          onNavigateWealth={navigateToWealth}
          currentPage="wealth"
        />
        <RegistrationModal isOpen={isRegisterOpen} onClose={closeRegister} onSuccess={handleRegistrationSuccess} />
      </>
    );
  }

  // If on terms page, render TermsConditions component
  if (currentPage === "terms") {
    return (
      <>
        <SEOHead 
          title="Terms & Conditions | NRI Nivesh Property Expo 2026"
          description="Read the Terms & Conditions for NRI Nivesh India Property Expo 2026 in Singapore. Understand your rights and responsibilities when using our platform."
        />
        <MetaPixel />
        <div className="min-h-screen bg-white">
          <Favicon />
          <Navbar 
            onRegisterClick={openRegister}
            onNavigateHome={navigateToHome}
            onNavigateWealth={navigateToWealth}
            currentPage="home"
          />
          <TermsConditions />
          <Footer 
            onNavigateToPrivacy={navigateToPrivacyPolicy}
            onNavigateToTerms={navigateToTerms}
            onNavigateToDisclaimer={navigateToDisclaimer}
          />
          <ComplianceFooter />
        </div>
        <RegistrationModal isOpen={isRegisterOpen} onClose={closeRegister} onSuccess={handleRegistrationSuccess} />
        <Toaster />
      </>
    );
  }

  // If on privacy page, render PrivacyPolicy component
  if (currentPage === "privacy") {
    return (
      <>
        <SEOHead 
          title="Privacy Policy | NRI Nivesh Property Expo 2026"
          description="Learn how NRI Nivesh protects your personal data and privacy in compliance with Singapore's PDPA regulations."
        />
        <MetaPixel />
        <div className="min-h-screen bg-white">
          <Favicon />
          <Navbar 
            onRegisterClick={openRegister}
            onNavigateHome={navigateToHome}
            onNavigateWealth={navigateToWealth}
            currentPage="home"
          />
          <PrivacyPolicy />
          <Footer 
            onNavigateToPrivacy={navigateToPrivacyPolicy}
            onNavigateToTerms={navigateToTerms}
            onNavigateToDisclaimer={navigateToDisclaimer}
          />
          <ComplianceFooter />
        </div>
        <RegistrationModal isOpen={isRegisterOpen} onClose={closeRegister} onSuccess={handleRegistrationSuccess} />
        <Toaster />
      </>
    );
  }

  // If on privacy-policy page (standalone), render new PrivacyPolicyPage
  if (currentPage === "privacy-policy") {
    return (
      <>
        <SEOHead 
          title="Privacy Policy | NRI Nivesh"
          description="Privacy Policy for NRI Nivesh. Learn how we collect, use, and protect your personal data in compliance with Singapore PDPA, Meta (Facebook/Instagram) Lead Ads, and Google regulations."
          canonical="https://www.nrinivesh.in/privacy-policy"
        />
        <MetaPixel />
        <div className="min-h-screen bg-white">
          <Favicon />
          <Navbar 
            onRegisterClick={openRegister}
            onNavigateHome={navigateToHome}
            onNavigateWealth={navigateToWealth}
            currentPage="home"
          />
          {/* Import and render the new standalone privacy policy page */}
          <PrivacyPolicyStandalone />
          <Footer 
            onNavigateToPrivacy={navigateToPrivacyPolicy}
            onNavigateToTerms={navigateToTerms}
            onNavigateToDisclaimer={navigateToDisclaimer}
          />
          <ComplianceFooter />
        </div>
        <RegistrationModal isOpen={isRegisterOpen} onClose={closeRegister} onSuccess={handleRegistrationSuccess} />
        <Toaster />
      </>
    );
  }

  // If on disclaimer page, render Disclaimer component
  if (currentPage === "disclaimer") {
    return (
      <>
        <SEOHead 
          title="Disclaimer | NRI Nivesh Property Expo 2026"
          description="Important disclaimer about property investment information. This site is for informational purposes only and not financial, tax, or legal advice."
        />
        <MetaPixel />
        <div className="min-h-screen bg-white">
          <Favicon />
          <Navbar 
            onRegisterClick={openRegister}
            onNavigateHome={navigateToHome}
            onNavigateWealth={navigateToWealth}
            currentPage="home"
          />
          <Disclaimer />
          <Footer 
            onNavigateToPrivacy={navigateToPrivacyPolicy}
            onNavigateToTerms={navigateToTerms}
            onNavigateToDisclaimer={navigateToDisclaimer}
          />
          <ComplianceFooter />
        </div>
        <RegistrationModal isOpen={isRegisterOpen} onClose={closeRegister} onSuccess={handleRegistrationSuccess} />
        <Toaster />
      </>
    );
  }

  // If on admin page, render AdminDashboard component
  if (currentPage === "admin") {
    return (
      <>
        <SEOHead 
          title="Admin Dashboard | NRI Nivesh Property Expo 2026"
          description="Access the admin dashboard to manage registrations and view analytics for NRI Nivesh India Property Expo 2026 in Singapore."
        />
        <MetaPixel />
        <div className="min-h-screen bg-white">
          <Favicon />
          <Navbar 
            onRegisterClick={openRegister}
            onNavigateHome={navigateToHome}
            onNavigateWealth={navigateToWealth}
            currentPage="home"
          />
          <AdminDashboard />
          <Footer 
            onNavigateToPrivacy={navigateToPrivacyPolicy}
            onNavigateToTerms={navigateToTerms}
            onNavigateToDisclaimer={navigateToDisclaimer}
          />
          <ComplianceFooter />
        </div>
        <RegistrationModal isOpen={isRegisterOpen} onClose={closeRegister} onSuccess={handleRegistrationSuccess} />
        <Toaster />
      </>
    );
  }

  // Default home page
  return (
    <>
      <SEOHead />
      <MetaPixel />
      <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
        <Favicon />
        <Navbar 
          onRegisterClick={openRegister}
          onNavigateHome={navigateToHome}
          onNavigateWealth={navigateToWealth}
          currentPage="home"
        />
        <main>
          <Hero onRegisterClick={openRegister} onNavigateToWealth={navigateToWealth} />
          <ServicesSection onRegisterClick={openRegister} />
          <BuilderLogos />
          <IndiaPresence />
          <WhyAttend onRegisterClick={openRegister} />
          <InvestmentOpportunities />
          <Location />
          <Gallery />
          <FAQSection />
          <Testimonials />
        </main>
        <Footer 
          onNavigateToPrivacy={navigateToPrivacyPolicy}
          onNavigateToTerms={navigateToTerms}
          onNavigateToDisclaimer={navigateToDisclaimer}
        />
        <ComplianceFooter />
        <Toaster />
        <RegistrationModal isOpen={isRegisterOpen} onClose={closeRegister} onSuccess={handleRegistrationSuccess} />
        <WhatsAppButton />
        <CookieConsent />
      </div>
    </>
  );
}