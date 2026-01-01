import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    // Show button after a delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    // Hide tooltip after some time
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "919372772669"; // Format: country code + number without + or spaces
    const message = encodeURIComponent("Hi! I'm interested in the NRI Property Expo in Singapore.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed bottom-6 right-6 z-50 flex items-end gap-3"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 20, opacity: 0 }}
                className="bg-white px-4 py-3 rounded-2xl shadow-2xl border border-gray-100 max-w-[200px] relative"
              >
                <button
                  onClick={() => setShowTooltip(false)}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors"
                >
                  <X size={14} />
                </button>
                <p className="text-sm text-gray-800 font-medium">
                  Need help? Chat with us on WhatsApp!
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <motion.button
            onClick={handleWhatsAppClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:shadow-[0_0_40px_rgba(37,211,102,0.8)] transition-shadow group relative overflow-hidden ring-4 ring-orange-500/20"
            aria-label="Chat on WhatsApp"
          >
            {/* Ripple effect */}
            <div className="absolute inset-0 bg-white/20 rounded-full animate-ping" />
            
            <MessageCircle className="w-8 h-8 text-white relative z-10 group-hover:scale-110 transition-transform" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}