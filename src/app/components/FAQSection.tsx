import React, { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "Who can attend the India Property Expo 2026 in Bahrain?",
    answer: "The expo is open to all NRIs, PIOs, OCIs, and Resident Indians abroad who are interested in exploring property options in India. Whether you're a first-time buyer or an experienced investor, you're welcome to attend. Entry is FREE with pre-registration."
  },
  {
    question: "Is there any entry fee for the expo?",
    answer: "No, entry to the India Property Expo 2026 is completely FREE. You just need to register online in advance to secure your free pass. This includes access to all exhibitors, educational sessions, and complimentary high tea."
  },
  {
    question: "What types of properties will be showcased?",
    answer: "The expo features 500+ premium projects including residential apartments, luxury villas, plotted developments, commercial properties, and GIFT City property options. Properties are available across 35+ major cities including Mumbai, Bangalore, Delhi NCR, Pune, Hyderabad, Chennai, and Goa, with prices ranging from ₹30 lakhs to ₹200 crores."
  },
  {
    question: "How do I invest in Indian property as an NRI from Bahrain?",
    answer: "NRIs can purchase residential and commercial properties in India (excluding agricultural land). The process involves: (1) Opening an NRE/NRO bank account, (2) Obtaining a PAN card, (3) Conducting property verification, (4) Completing legal documentation, (5) Making payment through proper banking channels. Our expo provides expert guidance on each step, including NRI home loan assistance and legal support."
  },
  {
    question: "What is GIFT City and how can NRIs benefit?",
    answer: "Gujarat International Finance Tec-City (GIFT City) is India's first International Financial Services Centre (IFSC). NRIs can benefit from special tax advantages, simplified regulations, and investment opportunities in this dedicated financial hub. Our educational sessions provide detailed information about GIFT City investment options and eligibility."
  },
  {
    question: "Are there tax benefits for NRIs investing in Indian property?",
    answer: "NRIs may be eligible for certain tax benefits including deductions under Section 80C for home loan principal repayment and Section 24 for interest on home loans. However, tax implications vary based on individual circumstances and residency status. We recommend attending our FREE NRI Tax Clinic session at the expo for personalized guidance from qualified tax consultants."
  },
  {
    question: "Can I get home loan assistance as an NRI?",
    answer: "Yes, several Indian banks and financial institutions offer home loans to NRIs with competitive interest rates. Typical loan-to-value ratios range from 70-80% for NRIs. Our expo partners include financial institutions that can assist with NRI home loan applications, documentation, and approvals."
  },
  {
    question: "How do I verify if a property developer is genuine and RERA-registered?",
    answer: "All developers at our expo are verified and RERA-registered. However, we always recommend conducting your own due diligence by: (1) Checking RERA registration on the official RERA website, (2) Reviewing project approvals and clearances, (3) Visiting the site if possible, (4) Consulting with legal advisors. Our legal experts at the expo can guide you through the verification process."
  },
  {
    question: "What documents do I need to purchase property in India as an NRI?",
    answer: "Essential documents include: (1) Valid passport with visa stamps, (2) PAN Card, (3) Overseas address proof, (4) NRE/NRO bank account statements, (5) Employment/income proof from abroad, (6) Power of Attorney (if required). Our legal advisors at the expo can provide a complete checklist based on your specific situation."
  },
  {
    question: "Can I repatriate funds after selling property in India?",
    answer: "Yes, NRIs can repatriate sale proceeds of up to 2 residential properties purchased from NRE/FCNR funds, subject to RBI regulations and proper documentation. Properties purchased from NRO funds have repatriation limits. Our financial advisors can explain repatriation rules and FEMA compliance in detail."
  },
  {
    question: "What educational sessions are offered at the expo?",
    answer: "The expo features three key educational sessions: (1) GIFT City Property Information - understanding benefits and eligibility, (2) NRI Tax Clinic - expert guidance on tax planning, returns, and compliance, (3) Will & Inheritance Planning - estate planning for NRI families. All sessions are FREE and conducted by qualified professionals."
  },
  {
    question: "How can I book a meeting with specific developers?",
    answer: "You can pre-select your city of interest during registration, and we'll connect you with relevant developers. At the expo, you can walk up to any developer booth for consultations. We also offer exclusive one-on-one meeting slots - just mention your preferences in the registration form or speak to our coordinators on-site."
  },
  {
    question: "Is my personal information safe when I register?",
    answer: "Yes, we take data privacy seriously and comply with Bahrain's PDPL requirements. Your information is encrypted, securely stored, and used only for expo-related communication. We never sell your data to third parties. You can request data deletion anytime by contacting info@nrinivesh.in. Please review our Privacy Policy for complete details."
  },
  {
    question: "What are the event dates, timings, and venue?",
    answer: "The Bahrain edition runs across the Bahrain weekend: Friday 23rd and Saturday 24th October 2026, from 10:00 AM to 7:00 PM each day, at a central Manama venue. This is an RSVP-only event — once you confirm your RSVP we email you the exact address, parking details and your suggested arrival time, so registered guests always hear first."
  },
  {
    question: "Will there be any special offers or pre-launch projects?",
    answer: "Yes, many developers offer exclusive pre-launch information, early-bird pricing, and special discounts for expo attendees. These offers are typically available only to registered participants and may include limited-time incentives, waived booking fees, or preferential unit selection. Register early to maximize your access to these exclusive opportunities."
  }
];

export function FAQSection() {
  useEffect(() => {
    // Add FAQ Schema for SEO
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    let scriptTag = document.getElementById('faq-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      scriptTag.setAttribute('id', 'faq-schema');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(faqSchema);

    return () => {
      const existingScript = document.getElementById('faq-schema');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 to-amber-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about the India Property Expo 2026, NRI property investment, and our services.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white border border-gray-200 rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left hover:no-underline py-5">
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center p-6 bg-red-50 rounded-lg border border-red-200">
          <p className="text-gray-700 mb-4">
            <strong>Still have questions?</strong> Our team is here to help!
          </p>
          <p className="text-sm text-gray-600">
            Email us at <a href="mailto:info@nrinivesh.in" className="text-red-600 underline">info@nrinivesh.in</a> or 
            visit us at the expo for personalized assistance.
          </p>
        </div>
      </div>
    </section>
  );
}