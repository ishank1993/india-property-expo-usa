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
import { Loader2, CheckCircle2 } from "lucide-react";
import { projectId, publicAnonKey } from "../../../utils/supabase/info";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

// Country codes with Singapore as default
const countryCodes = [
  { code: "+65", country: "Singapore", flag: "🇸🇬" },
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+1", country: "USA/Canada", flag: "🇺🇸" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+971", country: "UAE", flag: "🇦🇪" },
  { code: "+60", country: "Malaysia", flag: "🇲🇾" },
  { code: "+852", country: "Hong Kong", flag: "🇭🇰" },
  { code: "+86", country: "China", flag: "🇨🇳" },
  { code: "+81", country: "Japan", flag: "🇯🇵" },
  { code: "+82", country: "South Korea", flag: "🇰🇷" },
  { code: "+66", country: "Thailand", flag: "🇹🇭" },
  { code: "+64", country: "New Zealand", flag: "🇳🇿" },
  { code: "+27", country: "South Africa", flag: "🇿🇦" },
  { code: "+49", country: "Germany", flag: "🇩🇪" },
  { code: "+33", country: "France", flag: "🇫🇷" },
  { code: "+39", country: "Italy", flag: "🇮🇹" },
  { code: "+41", country: "Switzerland", flag: "🇨🇭" },
  { code: "+47", country: "Norway", flag: "🇳🇴" },
  { code: "+46", country: "Sweden", flag: "🇸🇪" },
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
    countryCode: "+65",
    phone: "",
    dateOfVisit: "",
    preferredCity: "",
    educationalSession: "",
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

    setIsSubmitting(true);

    try {
      // Call Supabase backend API
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-232426bc/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            countryCode: formData.countryCode,
            dateOfVisit: formData.dateOfVisit,
            preferredCity: formData.preferredCity,
            educationalSession: formData.educationalSession || "none",
            consultationService: formData.consultationService || "none",
          }),
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to register");
      }

      console.log("✅ Registration successful:", result);
      
      setIsSuccess(true);
      
      // Store submission in localStorage
      localStorage.setItem('registrationSubmitted', 'true');
      localStorage.setItem('registrationId', result.registrationId);
      
      toast.success("🎉 Registration Confirmed! Check your email for event details.");
      
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setFormData({
          fullName: "",
          email: "",
          countryCode: "+65",
          phone: "",
          dateOfVisit: "",
          preferredCity: "",
          educationalSession: "",
          consultationService: "",
          agreeToTerms: false,
        });
        if (onSuccess) {
          onSuccess();
        }
      }, 2500);
    } catch (error) {
      console.error("❌ Registration error:", error);
      toast.error(`Registration failed: ${error.message || "Please try again."}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center justify-center py-8 sm:py-12 text-center">
            <CheckCircle2 className="w-16 h-16 sm:w-20 sm:h-20 text-green-500 mb-4 sm:mb-6 animate-bounce" />
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">🎉 You're Registered!</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 px-2">
              Your free pass is confirmed. Check your email for event details and exclusive pre-launch offers.
            </p>
            <p className="text-xs sm:text-sm text-orange-600 font-semibold px-2">
              See you at Novotel Kitchener on 31st Jan or 1st Feb!
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl p-3 sm:p-6">
        <DialogHeader className="space-y-1 sm:space-y-3 mb-1 sm:mb-0">
          <DialogTitle className="text-base sm:text-2xl font-bold text-center bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent px-1 sm:px-2 pr-8 sm:pr-10">
            🎯 Secure Your FREE Pass
          </DialogTitle>
          <DialogDescription className="text-center text-[10px] sm:text-base px-1 sm:px-2 leading-tight sm:leading-normal">
            Singapore's Largest India Property Exhibition
            <br className="hidden sm:block" />
            <span className="text-orange-600 font-semibold text-[10px] sm:text-base"> 📅 31 Jan & 1 Feb 2026</span>
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-6 pt-1 sm:pt-4">
          {/* Full Name */}
          <div className="space-y-1 sm:space-y-2.5">
            <Label htmlFor="fullName" className="text-xs sm:text-sm">Full Name *</Label>
            <Input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              required
              className="w-full h-10 sm:h-11 text-sm sm:text-base"
              aria-required="true"
            />
          </div>

          {/* Email and Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div className="space-y-1 sm:space-y-2.5">
              <Label htmlFor="email" className="text-xs sm:text-sm">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
                className="h-10 sm:h-11 text-sm sm:text-base"
                aria-required="true"
              />
            </div>
            <div className="space-y-1 sm:space-y-2.5">
              <Label htmlFor="phone" className="text-xs sm:text-sm">Phone Number *</Label>
              <div className="flex gap-1.5 sm:gap-2">
                <Select 
                  value={formData.countryCode} 
                  onValueChange={(value) => handleInputChange("countryCode", value)}
                >
                  <SelectTrigger className="w-[90px] sm:w-[120px] h-10 sm:h-11 text-xs sm:text-sm">
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
                  className="flex-1 h-10 sm:h-11 text-sm sm:text-base"
                  pattern="\d{7,15}"
                  aria-required="true"
                />
              </div>
            </div>
          </div>

          {/* Date of Visit */}
          <div className="space-y-1 sm:space-y-2.5">
            <Label htmlFor="dateOfVisit" className="text-xs sm:text-sm">When Will You Visit? (Optional)</Label>
            <Select onValueChange={(value) => handleInputChange("dateOfVisit", value)}>
              <SelectTrigger className="h-10 sm:h-11 text-xs sm:text-sm">
                <SelectValue placeholder="Select your preferred date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="jan-31" className="text-xs sm:text-sm">31st Jan (Fri) 10am-7pm</SelectItem>
                <SelectItem value="feb-1" className="text-xs sm:text-sm">1st Feb (Sat) 10am-7pm</SelectItem>
                <SelectItem value="both" className="text-xs sm:text-sm">Both Days</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Preferred Investment City */}
          <div className="space-y-1 sm:space-y-2.5">
            <Label htmlFor="preferredCity" className="text-xs sm:text-sm font-semibold">City of Interest (Optional)</Label>
            <Select onValueChange={(value) => handleInputChange("preferredCity", value)}>
              <SelectTrigger className="h-10 sm:h-11 text-xs sm:text-sm">
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

          {/* Educational Session */}
          <div className="space-y-1 sm:space-y-2.5">
            <Label htmlFor="educationalSession" className="text-xs sm:text-sm font-semibold">
              📚 Educational Sessions (Optional)
            </Label>
            <p className="text-[9px] sm:text-xs text-gray-500 -mt-0.5 mb-1">
              Free seminars on NRI-focused topics
            </p>
            <Select onValueChange={(value) => handleInputChange("educationalSession", value)}>
              <SelectTrigger className="text-xs sm:text-sm border-2 border-orange-200 focus:border-orange-500">
                <SelectValue placeholder="Select a session (optional)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gift-city" className="text-xs sm:text-sm">🏛️ GIFT City Property Information</SelectItem>
                <SelectItem value="nri-tax-clinic" className="text-xs sm:text-sm">💼 NRI Tax Planning & Returns</SelectItem>
                <SelectItem value="will-inheritance" className="text-xs sm:text-sm">📜 Will & Estate Planning for NRIs</SelectItem>
                <SelectItem value="all-sessions" className="text-xs sm:text-sm">✅ All Educational Sessions</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Consultation Service */}
          <div className="space-y-1 sm:space-y-2.5">
            <Label htmlFor="consultationService" className="text-xs sm:text-sm font-semibold">
              🤝 One-on-One Consultation (Optional)
            </Label>
            <p className="text-[9px] sm:text-xs text-gray-500 -mt-0.5 mb-1">
              Book personalized advisory sessions with experts
            </p>
            <Select onValueChange={(value) => handleInputChange("consultationService", value)}>
              <SelectTrigger className="h-10 sm:h-11 text-xs sm:text-sm">
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
          <div className="flex items-start space-x-2 pt-1 bg-gray-50 p-2.5 sm:p-4 rounded-lg border border-gray-200">
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
              <span className="text-orange-600 underline">Privacy Policy</span> and{" "}
              <span className="text-green-600 underline">Terms</span>.
            </label>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-600 to-green-600 hover:from-orange-700 hover:to-green-700 text-white font-bold text-sm sm:text-lg py-5 sm:py-7 h-auto shadow-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                Registering...
              </>
            ) : (
              "🎯 Register Now - FREE"
            )}
          </Button>

          <p className="text-[9px] sm:text-xs text-center text-gray-500 pt-0 sm:pt-2">
            🔒 Your information is secure
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}