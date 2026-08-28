import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
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
import { WealthPage } from "./components/WealthPage";
import { FAQSection } from "./components/FAQSection";
import { CookieConsent } from "./components/CookieConsent";
import { ComplianceFooter } from "./components/ComplianceFooter";
import { TermsConditions } from "./components/TermsConditions";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { PrivacyPolicyStandalone } from "./components/PrivacyPolicyStandalone";
import { Disclaimer } from "./components/Disclaimer";
import { AdminDashboard } from "./components/AdminDashboard";

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
  const routerNavigate = useNavigate();
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

  // Resolve which page to show from the real URL path first (so a direct
  // visit or crawl of e.g. /wealth or /terms serves the right content),
  // falling back to the legacy #hash links for backward compatibility.
  useEffect(() => {
    const path = window.location.pathname;
    const hash = window.location.hash.slice(1);

    if (path === '/wealth' || hash === 'wealth') {
      setCurrentPage('wealth');
    } else if (path === '/terms' || hash === 'terms') {
      setCurrentPage('terms');
    } else if (path === '/privacy-policy' || hash === 'privacy-policy') {
      setCurrentPage('privacy-policy');
    } else if (path === '/privacy' || hash === 'privacy') {
      setCurrentPage('privacy');
    } else if (path === '/disclaimer' || hash === 'disclaimer') {
      setCurrentPage('disclaimer');
    } else if (hash === 'admin') {
      setCurrentPage('admin');
    }

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
    routerNavigate("/wealth");
    window.scrollTo(0, 0);
  };
  const navigateToHome = () => {
    setCurrentPage("home");
    routerNavigate("/");
    window.scrollTo(0, 0);
  };

  const navigateToTerms = () => {
    setCurrentPage("terms");
    routerNavigate("/terms");
    window.scrollTo(0, 0);
  };
  const navigateToPrivacy = () => {
    setCurrentPage("privacy");
    routerNavigate("/privacy");
    window.scrollTo(0, 0);
  };
  const navigateToPrivacyPolicy = () => {
    setCurrentPage("privacy-policy");
    routerNavigate("/privacy-policy");
    window.scrollTo(0, 0);
  };
  const navigateToDisclaimer = () => {
    setCurrentPage("disclaimer");
    routerNavigate("/disclaimer");
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
        <SEOHead
          title="NRI Tax Clinic & GIFT City Baatchit | NRI Nivesh Bahrain"
          description="Free NRI Tax Clinic and GIFT City Baatchit for Bahrain NRIs. Learn about GIFT City regulatory updates, tax planning, and global investment opportunities beyond real estate."
          canonical="https://indiapropertyexpobahrain.com/wealth"
        />
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
          description="Read the Terms & Conditions for NRI Nivesh India Property Expo 2026 in Bahrain. Understand your rights and responsibilities when using our platform."
          canonical="https://indiapropertyexpobahrain.com/terms"
        />
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
          description="Learn how NRI Nivesh protects your personal data and privacy in compliance with Bahrain's PDPL requirements."
          canonical="https://indiapropertyexpobahrain.com/privacy"
        />
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
          description="Privacy Policy for NRI Nivesh. Learn how we collect, use, and protect your personal data in compliance with Bahrain PDPL, Meta (Facebook/Instagram) Lead Ads, and Google regulations."
          canonical="https://indiapropertyexpobahrain.com/privacy-policy"
        />
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
          canonical="https://indiapropertyexpobahrain.com/disclaimer"
        />
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
          description="Access the admin dashboard to manage registrations and view analytics for NRI Nivesh India Property Expo 2026 in Bahrain."
          noindex
        />
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
          <BuilderLogos />
          <ServicesSection onRegisterClick={openRegister} />
          <IndiaPresence />
          <WhyAttend onRegisterClick={openRegister} />
          <InvestmentOpportunities />
          <Location onRegisterClick={openRegister} />
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