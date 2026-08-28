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
import { Checkbox } from "./ui/checkbox";
import { toast } from "sonner";
import { Loader2, CheckCircle2, Sparkles } from "lucide-react";
import { EVENT } from "../config/event";

/**
 * Bahrain edition lead endpoint.
 *
 * Deploy `scripts/bahrain-leads.gs` as a Google Apps Script Web App bound to
 * the Bahrain leads sheet, then paste the resulting /exec URL here.
 * Sheet: https://docs.google.com/spreadsheets/d/1ckQ4-w6Q8a51nRJ0E1ViLwpNcFDvyJdRWMZrbMI71iA/edit
 *
 * See scripts/GOOGLE_SHEET_SETUP.md for the 6-step deploy walkthrough.
 */
const GOOGLE_SHEETS_URL = "PASTE_YOUR_BAHRAIN_APPS_SCRIPT_EXEC_URL_HERE";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

// Country codes — Bahrain first, then the rest of the GCC where NRIs cluster
const countryCodes = [
  { code: "+973", country: "Bahrain", flag: "\u{1F1E7}\u{1F1ED}" },
  { code: "+966", country: "Saudi Arabia", flag: "\u{1F1F8}\u{1F1E6}" },
  { code: "+971", country: "UAE", flag: "\u{1F1E6}\u{1F1EA}" },
  { code: "+974", country: "Qatar", flag: "\u{1F1F6}\u{1F1E6}" },
  { code: "+965", country: "Kuwait", flag: "\u{1F1F0}\u{1F1FC}" },
  { code: "+968", country: "Oman", flag: "\u{1F1F4}\u{1F1F2}" },
  { code: "+91", country: "India", flag: "\u{1F1EE}\u{1F1F3}" },
  { code: "+44", country: "UK", flag: "\u{1F1EC}\u{1F1E7}" },
  { code: "+1", country: "USA/Canada", flag: "\u{1F1FA}\u{1F1F8}" },
  { code: "+65", country: "Singapore", flag: "\u{1F1F8}\u{1F1EC}" },
  { code: "+61", country: "Australia", flag: "\u{1F1E6}\u{1F1FA}" },
  { code: "+60", country: "Malaysia", flag: "\u{1F1F2}\u{1F1FE}" },
  { code: "+852", country: "Hong Kong", flag: "\u{1F1ED}\u{1F1F0}" },
  { code: "+49", country: "Germany", flag: "\u{1F1E9}\u{1F1EA}" },
  { code: "+33", country: "France", flag: "\u{1F1EB}\u{1F1F7}" },
  { code: "+41", country: "Switzerland", flag: "\u{1F1E8}\u{1F1ED}" },
  { code: "+27", country: "South Africa", flag: "\u{1F1FF}\u{1F1E6}" },
  { code: "+64", country: "New Zealand", flag: "\u{1F1F3}\u{1F1FF}" },
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
  "Coimbatore"
];

export function RegistrationModal({ isOpen, onClose, onSuccess }: RegistrationModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+973",
    phone: "",
    dateOfVisit: "",
    preferredCity: "",
    consultationService: "",
    agreeToTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Enhanced validation
    if (!formData.fullName.trim()) {
      toast.error("Please enter your full name");
      return;
    }
    
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    if (!formData.phone.match(/^\d{7,15}$/)) {
      toast.error("Please enter a valid phone number (7-15 digits)");
      return;
    }
    
    if (!formData.agreeToTerms) {
      toast.error("Please agree to the terms and privacy policy to continue");
      return;
    }

    if (GOOGLE_SHEETS_URL.startsWith("PASTE_")) {
      console.error(
        "RegistrationModal: GOOGLE_SHEETS_URL is not configured. " +
          "Deploy scripts/bahrain-leads.gs and paste the /exec URL."
      );
      toast.error("Registration is not live yet. Please try again shortly.");
      return;
    }

    setIsSubmitting(true);

    try {
      const params = new URLSearchParams({
        action: "write",
        edition: "Bahrain",
        fullName: formData.fullName,
        email: formData.email,
        countryCode: formData.countryCode,
        phone: formData.phone,
        dateOfVisit: formData.dateOfVisit || "",
        preferredCity: formData.preferredCity || "",
        consultationService: formData.consultationService || "none",
        source: typeof window !== "undefined" ? window.location.pathname : "",
      });
      const response = await fetch(`${GOOGLE_SHEETS_URL}?${params}`);
      const result = await response.json();
      if (!result.success) throw new Error("Failed to save registration");

      setIsSuccess(true);
      localStorage.setItem('registrationSubmitted', 'true');
      toast.success("🎉 RSVP confirmed! We’re preparing your shortlist.");

      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setFormData({
          fullName: "",
          email: "",
          countryCode: "+973",
          phone: "",
          dateOfVisit: "",
          preferredCity: "",
          consultationService: "",
          agreeToTerms: false,
        });
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
            <CheckCircle2 className="w-16 h-16 sm:w-20 sm:h-20 text-emerald-500 mb-4 sm:mb-6 animate-bounce" />
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">🎉 Your RSVP is Confirmed!</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 px-2">
              We’re now building your shortlist. Check your email — your venue address, arrival time and matched developers land there first.
            </p>
            <p className="text-xs sm:text-sm text-red-600 font-semibold px-2">
              See you on 23 or 24 October in Manama — details on their way.
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
            🎯 RSVP — Free Entry
          </DialogTitle>
          <DialogDescription className="text-center text-[10px] sm:text-base px-1 sm:px-2 leading-tight sm:leading-normal">
            Bahrain’s Largest India Property Exhibition · RSVP Only
            <br className="hidden sm:block" />
            <span className="text-red-600 font-semibold text-[10px] sm:text-base"> 📅 23 & 24 Oct 2026 (Fri & Sat) · Manama</span>
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-4 pt-1 sm:pt-3">
          {/* Why we ask — RSVP is what enables the 1-on-1 matching */}
          <div className="flex gap-2.5 rounded-lg border border-red-200 bg-red-50/70 p-2.5 sm:p-3">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-[10px] sm:text-sm text-gray-700 leading-snug sm:leading-relaxed">
              <span className="font-semibold text-gray-900">This is an RSVP event.</span> The three optional
              questions below are what let us match you to the right developers and book your advisor slot
              <span className="font-semibold"> before you arrive</span>. The more you tell us, the better your visit.
            </p>
          </div>

          {/* Full Name */}
          <div className="space-y-1 sm:space-y-1.5">
            <Label htmlFor="fullName" className="text-xs sm:text-sm">Full Name *</Label>
            <Input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              required
              className="w-full h-9 sm:h-10 text-sm sm:text-base"
              aria-required="true"
            />
          </div>

          {/* Email and Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-3">
            <div className="space-y-1 sm:space-y-1.5">
              <Label htmlFor="email" className="text-xs sm:text-sm">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
                className="h-9 sm:h-10 text-sm sm:text-base"
                aria-required="true"
              />
            </div>
            <div className="space-y-1 sm:space-y-1.5">
              <Label htmlFor="phone" className="text-xs sm:text-sm">Phone Number *</Label>
              <div className="flex gap-1.5 sm:gap-2">
                <Select 
                  value={formData.countryCode} 
                  onValueChange={(value) => handleInputChange("countryCode", value)}
                >
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
                  placeholder="12345678"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value.replace(/\D/g, ""))}
                  required
                  className="flex-1 h-9 sm:h-10 text-sm sm:text-base"
                  pattern="\d{7,15}"
                  aria-required="true"
                />
              </div>
            </div>
          </div>

          {/* Date of Visit */}
          <div className="space-y-1 sm:space-y-1.5">
            <Label htmlFor="dateOfVisit" className="text-xs sm:text-sm">Which Day Will You Attend?</Label>
            <Select onValueChange={(value) => handleInputChange("dateOfVisit", value)}>
              <SelectTrigger className="h-9 sm:h-10 text-xs sm:text-sm">
                <SelectValue placeholder="Select your preferred date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="oct-23" className="text-xs sm:text-sm">Fri 23 Oct · 10am–7pm</SelectItem>
                <SelectItem value="oct-24" className="text-xs sm:text-sm">Sat 24 Oct · 10am–7pm</SelectItem>
                <SelectItem value="both" className="text-xs sm:text-sm">Both Days</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Preferred Investment City */}
          <div className="space-y-1 sm:space-y-1.5">
            <Label htmlFor="preferredCity" className="text-xs sm:text-sm font-semibold">City of Interest (Optional)</Label>
            <Select onValueChange={(value) => handleInputChange("preferredCity", value)}>
              <SelectTrigger className="h-9 sm:h-10 text-xs sm:text-sm">
                <SelectValue placeholder="Select city or exploring" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="exploring" className="text-xs sm:text-sm">Still Exploring</SelectItem>
                <SelectItem value="multiple" className="text-xs sm:text-sm">Multiple Cities</SelectItem>
                {indianCities.map((city) => (
                  <SelectItem key={city} value={city.toLowerCase().replace(/\s+/g, '-')} className="text-xs sm:text-sm">
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Consultation Service */}
          <div className="space-y-1 sm:space-y-1.5">
            <Label htmlFor="consultationService" className="text-xs sm:text-sm font-semibold">
              🤝 One-on-One Consultation (Optional)
            </Label>
            <p className="text-[9px] sm:text-xs text-gray-500 -mt-0.5 mb-1">
              Book personalized advisory sessions with experts
            </p>
            <Select onValueChange={(value) => handleInputChange("consultationService", value)}>
              <SelectTrigger className="h-9 sm:h-10 text-xs sm:text-sm">
                <SelectValue placeholder="Select consultation type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tax-advisory" className="text-xs sm:text-sm">💰 Tax Advisory (NRI/OCI)</SelectItem>
                <SelectItem value="legal-consultation" className="text-xs sm:text-sm">⚖️ Legal Consultation</SelectItem>
                <SelectItem value="property-evaluation" className="text-xs sm:text-sm">🏘️ Property Evaluation</SelectItem>
                <SelectItem value="investment-planning" className="text-xs sm:text-sm">📊 Investment Planning</SelectItem>
                <SelectItem value="home-loan-assistance" className="text-xs sm:text-sm">🏦 Home Loan Assistance</SelectItem>
                <SelectItem value="repatriation-guidance" className="text-xs sm:text-sm">💱 Repatriation Guidance</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Terms Agreement */}
          <div className="flex items-start space-x-2 pt-1 bg-gray-50 p-2 sm:p-3 rounded-lg border border-gray-200">
            <Checkbox
              id="agreeToTerms"
              checked={formData.agreeToTerms}
              onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
              className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5"
            />
            <label
              htmlFor="agreeToTerms"
              className="text-[10px] sm:text-sm text-gray-600 leading-tight sm:leading-relaxed cursor-pointer"
            >
              I agree to receive event updates. I accept the{" "}
              <a href="/privacy-policy.html" target="_blank" rel="noopener noreferrer" className="text-red-600 underline hover:text-red-700">Privacy Policy</a> and{" "}
              <span className="text-amber-600 underline">Terms</span>.
            </label>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold text-sm sm:text-lg py-4 sm:py-6 h-auto shadow-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                Confirming your RSVP...
              </>
            ) : (
              "🎯 Confirm My RSVP — Free"
            )}
          </Button>

          <p className="text-[9px] sm:text-xs text-center text-gray-500 pt-0">
            🔒 Your details are used only to prepare your visit — never sold.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
