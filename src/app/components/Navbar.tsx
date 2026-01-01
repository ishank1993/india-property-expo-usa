import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, Home, Landmark } from "lucide-react";

interface NavbarProps {
    onRegisterClick?: () => void;
    onNavigateHome?: () => void;
    onNavigateWealth?: () => void;
    currentPage?: "home" | "wealth";
}

export function Navbar({ onRegisterClick, onNavigateHome, onNavigateWealth, currentPage = "home" }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleRegisterClick = () => {
      if (onRegisterClick) {
          onRegisterClick();
      } else {
          document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
      }
      setMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (onNavigateHome) {
      onNavigateHome();
      setMobileMenuOpen(false);
    }
  };

  const handleWealthClick = () => {
    if (onNavigateWealth) {
      onNavigateWealth();
      setMobileMenuOpen(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
          : "bg-gradient-to-r from-gray-900/95 via-orange-900/95 to-green-900/95 backdrop-blur-md py-4"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center cursor-pointer group" 
          onClick={handleLogoClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleLogoClick();
            }
          }}
          aria-label="Go to homepage"
        >
          <img 
            src="/logo.png" 
            alt="NRI Nivesh - India Property Expo Singapore logo" 
            width="160"
            height="48"
            className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
                e.currentTarget.style.display = 'none';
                // Fallback text if logo is missing
                const parent = e.currentTarget.parentElement;
                if (parent) {
                    const span = document.createElement('span');
                    span.className = "text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-400 tracking-tight";
                    span.innerText = "NRI Nivesh";
                    parent.appendChild(span);
                }
            }}
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6" role="menubar">
          {/* Navigation Links */}
          {onNavigateHome && (
            <button
              onClick={handleLogoClick}
              className={`flex items-center space-x-2 font-semibold transition-all duration-300 px-4 py-2 rounded-full ${
                currentPage === "home"
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md"
                  : isScrolled 
                    ? "text-gray-800 hover:text-orange-600" 
                    : "text-orange-200 hover:text-orange-400"
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Property Expo</span>
            </button>
          )}
          
          {onNavigateWealth && (
            <button
              onClick={handleWealthClick}
              className={`flex items-center space-x-2 font-semibold transition-all duration-300 px-4 py-2 rounded-full ${
                currentPage === "wealth"
                  ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md"
                  : isScrolled 
                    ? "text-gray-800 hover:text-green-600" 
                    : "text-green-200 hover:text-green-400"
              }`}
            >
              <Landmark className="w-4 h-4" />
              <span>Tax Clinic & GIFT City</span>
            </button>
          )}

          <a
            href="#venues"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('venues');
            }}
            className={`font-medium hover:text-orange-400 transition-colors cursor-pointer ${
              isScrolled ? "text-gray-800" : "text-orange-200"
            }`}
          >
            Venues
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            className={`font-medium hover:text-orange-400 transition-colors cursor-pointer ${
              isScrolled ? "text-gray-800" : "text-orange-200"
            }`}
          >
            Contact
          </a>
          <a
            href="https://www.nrinivesh.in"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-medium hover:text-orange-400 transition-colors ${
              isScrolled ? "text-gray-800" : "text-orange-200"
            } underline underline-offset-4`}
          >
            Main Website
          </a>
          
          <Button
            className="bg-gradient-to-r from-orange-600 to-green-600 hover:from-orange-700 hover:to-green-700 text-white font-bold border-none shadow-lg hover:shadow-xl transition-all"
            onClick={handleRegisterClick}
          >
            🎯 Register Free
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={isScrolled ? "text-orange-600" : "text-orange-300"}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-gradient-to-br from-gray-900 to-orange-900 shadow-xl p-6 flex flex-col space-y-4 md:hidden border-t border-orange-400/20">
          {/* Mobile Navigation Links */}
          {onNavigateHome && (
            <button
              onClick={handleLogoClick}
              className={`flex items-center space-x-3 font-semibold text-lg transition-all duration-300 px-4 py-3 rounded-lg ${
                currentPage === "home"
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                  : "text-orange-300 hover:text-orange-400 hover:bg-orange-900/30"
              }`}
            >
              <Home className="w-5 h-5" />
              <span>Property Expo</span>
            </button>
          )}
          
          {onNavigateWealth && (
            <button
              onClick={handleWealthClick}
              className={`flex items-center space-x-3 font-semibold text-lg transition-all duration-300 px-4 py-3 rounded-lg ${
                currentPage === "wealth"
                  ? "bg-gradient-to-r from-green-500 to-green-600 text-white"
                  : "text-green-300 hover:text-green-400 hover:bg-green-900/30"
              }`}
            >
              <Landmark className="w-5 h-5" />
              <span>Tax Clinic & GIFT City</span>
            </button>
          )}

          {["Venues", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.toLowerCase());
              }}
              className="text-orange-300 font-medium text-lg hover:text-orange-400 transition-colors px-4 py-2 cursor-pointer"
            >
              {item}
            </a>
          ))}
          
          <a
            href="https://www.nrinivesh.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-300 font-medium text-lg hover:text-green-400 transition-colors px-4 py-2 underline underline-offset-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            🌐 Main Website
          </a>
          
          <Button
            className="bg-gradient-to-r from-orange-600 to-green-600 hover:from-orange-700 hover:to-green-700 text-white font-bold w-full"
            onClick={handleRegisterClick}
          >
            🎯 Register Free
          </Button>
        </div>
      )}
    </nav>
  );
}