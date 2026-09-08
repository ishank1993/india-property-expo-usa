import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { toast } from "sonner";
import { Loader2, CheckCircle2 } from "lucide-react";
import { submitRsvpLead } from "../config/leads";
import { getSiteCountry } from "../utils/siteCountry";
import { cn } from "./ui/utils";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

// Country codes — USA/Canada first, followed by major NRI regions
const countryCodes = [
  { code: "+1", country: "USA/Canada", flag: "🇺🇸" },
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+971", country: "UAE", flag: "🇦🇪" },
  { code: "+65", country: "Singapore", flag: "🇸🇬" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+973", country: "Bahrain", flag: "🇧🇭" },
  { code: "+966", country: "Saudi Arabia", flag: "🇸🇦" },
  { code: "+974", country: "Qatar", flag: "🇶🇦" },
  { code: "+965", country: "Kuwait", flag: "🇰🇼" },
  { code: "+968", country: "Oman", flag: "🇴🇲" },
  { code: "+49", country: "Germany", flag: "🇩🇪" },
  { code: "+33", country: "France", flag: "🇫🇷" },
  { code: "+41", country: "Switzerland", flag: "🇨🇭" },
  { code: "+852", country: "Hong Kong", flag: "🇭🇰" },
  { code: "+60", country: "Malaysia", flag: "🇲🇾" },
  { code: "+27", country: "South Africa", flag: "🇿🇦" },
  { code: "+64", country: "New Zealand", flag: "🇳🇿" },
];

// Top 15 cities in India
const indianCities = [
  "Mumbai",
  "Bangalore",
  "Delhi NCR",
  "Pune",
  "Hyderabad",
  "Chennai",
  "Goa",
  "Ahmedabad",
  "Kolkata",
  "Jaipur",
  "Chandigarh",
  "Kochi",
  "Indore",
  "Lucknow",
  "Coimbatore",
];

const productInterests = ["Property", "NRI Tax & Wealth", "GIFT City"] as const;

/** Finds this site's own default dial code from its detected country. */
function getDefaultDialCode(siteCountry: string): string {
  const match = countryCodes.find((item) => item.country.includes(siteCountry));
  return match?.code ?? "+1";
}

export function RegistrationModal({ isOpen, onClose, onSuccess }: RegistrationModalProps) {
  const siteCountry = getSiteCountry();

  const [productInterest, setProductInterest] = useState("");
  const [fullName, setFullName] = useState("");
  const [dialCode, setDialCode] = useState(getDefaultDialCode(siteCountry));
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [preferredCity, setPreferredCity] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const resetForm = () => {
    setProductInterest("");
    setFullName("");
    setDialCode(getDefaultDialCode(siteCountry));
    setPhoneNumber("");
    setEmail("");
    setPreferredCity("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!productInterest) {
      toast.error("Please select what you're interested in");
      return;
    }

    if (!fullName.trim()) {
      toast.error("Please enter your full name");
      return;
    }

    if (!phoneNumber.match(/^\d{7,15}$/)) {
      toast.error("Please enter a valid phone number (7-15 digits)");
      return;
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      await submitRsvpLead({
        product_interest: productInterest,
        country: siteCountry,
        full_name: fullName,
        phone: `${dialCode} ${phoneNumber}`,
        email,
        preferred_city: preferredCity,
      });

      setIsSuccess(true);
      localStorage.setItem("registrationSubmitted", "true");
      toast.success("Thank you for registering your interest!");

      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        resetForm();
        if (onSuccess) onSuccess();
      }, 2500);
    } catch (error) {
      console.error("❌ Registration error:", error);
      toast.error("Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center justify-center py-8 sm:py-12 text-center">
            <CheckCircle2 className="w-16 h-16 sm:w-20 sm:h-20 text-emerald-500 mb-4 sm:mb-6" />
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Thank You!</h3>
            <p className="text-sm sm:text-base text-gray-600 px-2">
              Thank you for registering your interest with NRI NIVESH. Our team will contact you shortly with the RSVP details, including the date and venue.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto p-3 sm:p-6">
        <DialogHeader className="space-y-1 sm:space-y-2 mb-1 sm:mb-0">
          <DialogTitle className="text-base sm:text-2xl font-bold text-center bg-gradient-to-r from-red-600 to-amber-600 bg-clip-text text-transparent px-1 sm:px-2 pr-8 sm:pr-10">
            Register Your Interest
          </DialogTitle>
          <DialogDescription className="text-center text-[11px] sm:text-base px-1 sm:px-2 leading-tight sm:leading-normal">
            Tell us a little about your interest and our team will provide you with the RSVP details.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 pt-1 sm:pt-3">
          {/* What are you interested in? */}
          <div className="space-y-1 sm:space-y-1.5">
            <Label className="text-xs sm:text-sm">
              What are you interested in? <span className="text-red-600">*</span>
            </Label>
            <div className="grid grid-cols-3 gap-2">
              {productInterests.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setProductInterest(option)}
                  aria-pressed={productInterest === option}
                  className={cn(
                    "h-9 sm:h-10 rounded-md border text-[11px] sm:text-sm font-medium px-1.5 sm:px-2 text-center transition-colors",
                    productInterest === option
                      ? "border-amber-600 bg-amber-50 text-amber-800"
                      : "border-input bg-background text-foreground hover:bg-accent",
                  )}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Full Name */}
          <div className="space-y-1 sm:space-y-1.5">
            <Label htmlFor="fullName" className="text-xs sm:text-sm">
              Full Name <span className="text-red-600">*</span>
            </Label>
            <Input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full h-9 sm:h-10 text-sm sm:text-base"
              aria-required="true"
            />
          </div>

          {/* Phone and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-3">
            <div className="space-y-1 sm:space-y-1.5">
              <Label htmlFor="phone" className="text-xs sm:text-sm">
                Phone Number <span className="text-red-600">*</span>
              </Label>
              <div className="flex gap-1.5 sm:gap-2">
                <Select value={dialCode} onValueChange={setDialCode}>
                  <SelectTrigger className="w-[90px] sm:w-[120px] h-9 sm:h-10 text-xs sm:text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {countryCodes.map((item) => (
                      <SelectItem key={item.code} value={item.code} className="text-xs sm:text-sm">
                        {item.flag} {item.code}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="2025550143"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
                  required
                  className="flex-1 h-9 sm:h-10 text-sm sm:text-base"
                  pattern="\d{7,15}"
                  aria-required="true"
                />
              </div>
            </div>
            <div className="space-y-1 sm:space-y-1.5">
              <Label htmlFor="email" className="text-xs sm:text-sm">
                Email Address <span className="text-red-600">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-9 sm:h-10 text-sm sm:text-base"
                aria-required="true"
              />
            </div>
          </div>

          {/* Preferred City of Interest */}
          <div className="space-y-1 sm:space-y-1.5">
            <Label htmlFor="preferredCity" className="text-xs sm:text-sm">
              Preferred City of Interest
            </Label>
            <Select value={preferredCity} onValueChange={setPreferredCity}>
              <SelectTrigger id="preferredCity" className="h-9 sm:h-10 text-xs sm:text-sm">
                <SelectValue placeholder="Select a city" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="exploring" className="text-xs sm:text-sm">Still Exploring</SelectItem>
                <SelectItem value="multiple" className="text-xs sm:text-sm">Multiple Cities</SelectItem>
                {indianCities.map((city) => (
                  <SelectItem key={city} value={city} className="text-xs sm:text-sm">
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <p className="text-[10px] sm:text-xs text-center text-gray-500">
            Once you enter your information, our team will provide you with the RSVP details, including the date, venue and other relevant information.
          </p>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold text-sm sm:text-lg py-4 sm:py-6 h-auto shadow-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              "Get RSVP Details"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
