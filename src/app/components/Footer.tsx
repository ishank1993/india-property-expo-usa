import React, { useState } from "react";
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { PrivacyPolicyModal } from "./PrivacyPolicyModal";
import { TermsModal } from "./TermsModal";

interface FooterProps {
  onNavigateToPrivacy?: () => void;
  onNavigateToTerms?: () => void;
  onNavigateToDisclaimer?: () => void;
}

export function Footer({ onNavigateToPrivacy, onNavigateToTerms, onNavigateToDisclaimer }: FooterProps = {}) {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  const socialLinks = [
    { Icon: Facebook, href: "https://www.facebook.com/p/NRI-Nivesh-61560752896860/" },
    { Icon: Instagram, href: "https://www.instagram.com/nrinivesh_/" },
    { Icon: Linkedin, href: "https://in.linkedin.com/company/nri-nivesh-by-mudra" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    
    if (link === "Privacy Policy") {
      if (onNavigateToPrivacy) {
        onNavigateToPrivacy();
      } else {
        setIsPrivacyOpen(true);
      }
      return;
    }
    if (link === "Terms & Conditions") {
      if (onNavigateToTerms) {
        onNavigateToTerms();
      } else {
        setIsTermsOpen(true);
      }
      return;
    }
    if (link === "Disclaimer") {
      if (onNavigateToDisclaimer) {
        onNavigateToDisclaimer();
      }
      return;
    }
  };

  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 via-orange-900 to-green-900 text-white pt-20 pb-10 border-t-4 border-orange-500" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Brand & Mission */}
          <section className="space-y-6" aria-labelledby="footer-brand">
            <div className="flex items-center space-x-2">
              <img 
                src="/logo.png" 
                alt="NRI Nivesh - India Property Expo Singapore logo" 
                width="160"
                height="40"
                className="h-10 w-auto object-contain"
                onError={(e) => {
                    e.currentTarget.style.display = 'none';
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
            <p id="footer-brand" className="text-orange-200 leading-relaxed text-sm">
              Empowering NRIs globally with trusted Indian real estate opportunities. We bring the best of India's property market to your doorstep.
            </p>
            <a 
              href="https://www.nrinivesh.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 text-white font-bold rounded-lg shadow-lg transition-all hover:scale-105"
              aria-label="Visit NRI Nivesh main website"
            >
              🌐 Visit Main Website
            </a>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-600 to-green-600 hover:from-orange-500 hover:to-green-500 flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </section>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-orange-300">Quick Links</h3>
            <ul className="space-y-3 text-orange-200">
              {["About The Expo", "Venues & Location"].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="hover:text-white hover:translate-x-1 transition-all inline-block cursor-pointer"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-bold mt-8 mb-6 text-green-300">Legal</h3>
            <ul className="space-y-3 text-orange-200">
              <li>
                <a 
                  href="/privacy-policy.html" 
                  className="hover:text-white hover:translate-x-1 transition-all inline-block cursor-pointer"
                >
                  Privacy Policy
                </a>
              </li>
              {["Terms & Conditions", "Disclaimer"].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    onClick={(e) => handleLinkClick(e, link)}
                    className="hover:text-white hover:translate-x-1 transition-all inline-block cursor-pointer"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-orange-300">Contact Us</h3>
            <ul className="space-y-4 text-orange-200">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span>+91 93727 72669</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span>info@nrinivesh.in</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span>Novotel Kitchener Road,<br />180 Kitchener Road, Singapore 208539</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-400">© 2026 NRI Nivesh Property Expo. All rights reserved.</p>
          <p>Designed for Excellence.</p>
        </div>
      </div>

      <PrivacyPolicyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </footer>
  );
}