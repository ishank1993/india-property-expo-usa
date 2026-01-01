import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { X, Cookie } from "lucide-react";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after 2 seconds
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    // Initialize analytics or tracking scripts here
    console.log('Cookies accepted - Analytics enabled');
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
    console.log('Cookies rejected - Essential cookies only');
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 animate-in slide-in-from-bottom duration-500">
      <div className="max-w-6xl mx-auto bg-white border-2 border-gray-200 rounded-lg shadow-2xl">
        <div className="relative p-4 sm:p-6">
          <button
            onClick={handleReject}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <Cookie className="w-6 h-6 text-orange-600" />
              </div>
            </div>

            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-2">
                🍪 We Use Cookies
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We use cookies and similar technologies to improve your browsing experience, analyze site traffic, and show personalized content. 
                By clicking "Accept All", you consent to our use of cookies. You can manage preferences or reject non-essential cookies.{" "}
                <a href="#privacy" className="text-orange-600 underline hover:text-orange-700">
                  Learn more in our Privacy Policy
                </a>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <Button
                onClick={handleReject}
                variant="outline"
                className="border-gray-300 hover:bg-gray-100 text-gray-700"
              >
                Reject
              </Button>
              <Button
                onClick={handleAccept}
                className="bg-gradient-to-r from-orange-600 to-green-600 hover:from-orange-700 hover:to-green-700 text-white"
              >
                Accept All
              </Button>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              <strong>Essential cookies:</strong> Required for site functionality (always active) • 
              <strong> Analytics cookies:</strong> Help us understand how you use our site • 
              <strong> Marketing cookies:</strong> Used for targeted advertising
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
