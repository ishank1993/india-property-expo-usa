import React, { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "Who can attend the India Property Expo in America?",
    answer: "The expo tour is open to all US-based NRIs, PIOs, OCIs, and global Indians who are interested in exploring premium property and investment opportunities in India. Whether you're looking for an ancestral home, a high-yielding rental asset, or a luxury retirement villa, you're welcome to attend. Entry is completely FREE with RSVP."
  },
  {
    question: "Is there any entry fee for the expo?",
    answer: "No, entry to the India Property Expo 2026 is completely FREE. You just need to RSVP online in advance to secure your free pass. This includes access to all exhibitors, educational sessions, and complimentary high tea."
  },
  {
    question: "What types of properties will be showcased?",
    answer: "The expo features 500+ premium projects including residential apartments, luxury villas, plotted developments, commercial properties, and GIFT City property options. Properties are available across 35+ major cities including Mumbai, Bangalore, Delhi NCR, Pune, Hyderabad, Chennai, and Goa, with prices ranging from ₹30 lakhs to ₹200 crores."
  },
  {
    question: "How do I invest in Indian property as an NRI from America?",
    answer: "NRIs and OCIs residing in the United States can freely purchase residential and commercial properties in India. The process involves: (1) Setting up an NRE or NRO bank account, (2) Getting or updating your PAN card, (3) Selecting pre-verified RERA projects, (4) Legal title verification & KYC documentation, (5) Making payments directly in INR via outward remittance from USD. Our expo provides dedicated US-India tax advisory, legal consultants, and NRI home loan specialists to assist you with every step."
  },
  {
    question: "What is GIFT City and how can NRIs benefit?",
    answer: "Gujarat International Finance Tec-City (GIFT City) is India's first International Financial Services Centre (IFSC). NRIs can benefit from special tax advantages, simplified regulations, and investment opportunities in this dedicated financial hub. Our educational sessions provide detailed information about GIFT City investment options and eligibility."
  },
  {
    question: "Are there tax benefits for NRIs investing in Indian property?",
    answer: "NRIs may be eligible for certain tax benefits including deductions under Section 80C for home loan principal repayment and Section 24 for interest on home loans. However, tax implications vary based on individual circumstances and US-India dual tax treaties. We recommend attending our FREE NRI Tax Clinic session at the expo for personalized guidance from qualified tax consultants."
  },
  {
    question: "Can I get home loan assistance as an NRI?",
    answer: "Yes, several Indian banks and financial institutions offer home loans to US-based NRIs with competitive interest rates. Typical loan-to-value ratios range from 70-80% for NRIs. Our expo partners include financial institutions that can assist with NRI home loan applications, documentation, and approvals."
  },
  {
    question: "How do I verify if a property developer is genuine and RERA-registered?",
    answer: "All developers at our expo are verified and RERA-registered. However, we always recommend conducting your own due diligence by: (1) Checking RERA registration on the official RERA website, (2) Reviewing project approvals and clearances, (3) Visiting the site if possible, (4) Consulting with legal advisors. Our legal experts at the expo can guide you through the verification process."
  },
  {
    question: "What documents do I need to purchase property in India as an NRI?",
    answer: "Essential documents include: (1) Valid passport with visa / green card or OCI card, (2) PAN Card, (3) Overseas US address proof, (4) NRE/NRO bank account statements, (5) Employment/income proof (W2 or tax returns), (6) Power of Attorney (if required). Our legal advisors at the expo can provide a complete checklist based on your specific situation."
  },
  {
    question: "Can I repatriate funds after selling property in India back to the USA?",
    answer: "Yes, NRIs can repatriate sale proceeds of up to 2 residential properties purchased from NRE/FCNR funds back to the US, subject to RBI regulations and proper documentation (Form 15CA/15CB). Properties purchased from NRO funds have an annual USD 1 million remittance scheme. Our financial advisors can explain repatriation rules and FEMA compliance in detail."
  },
  {
    question: "What educational sessions are offered at the expo?",
    answer: "The expo features three key educational sessions: (1) GIFT City Property Information - understanding benefits and eligibility, (2) NRI Tax Clinic - expert guidance on US-India tax treaties, foreign asset reporting, and compliance, (3) Will & Inheritance Planning - estate planning for global NRI families. All sessions are FREE and conducted by qualified professionals."
  },
  {
    question: "How can I book a meeting with specific developers?",
    answer: "You can pre-select your city of interest during registration, and we'll connect you with relevant developers. We offer exclusive one-on-one meeting slots - just mention your preferences in the RSVP form or speak to our coordinators on-site."
  },
  {
    question: "Is my personal information safe when I register?",
    answer: "Yes, we prioritize data privacy and confidentiality in full accordance with applicable privacy standards. Your contact details are encrypted, stored securely, and used exclusively for your RSVP coordination and personal builder shortlist. We never sell or share your data with unauthorized third parties. You can request data updates or removal anytime by contacting info@nrinivesh.in."
  },
  {
    question: "What are the event cities, dates, and how do venues work?",
    answer: "Our America tour visits major metropolitan centers with large NRI communities every weekend from October 3 through November 15, 2026: SF Bay Area / Silicon Valley (Oct 3-4), New York / New Jersey Metro (Oct 10-11), Dallas & Houston (Oct 17-18), Greater Chicago (Oct 24-25), Greater Seattle (Nov 7-8), and Atlanta (Nov 14-15). Because all events are strictly RSVP-only to ensure high-touch, private 1-on-1 consultations with developers and advisors, the exact 5-star venue location and your dedicated consultation time slot are emailed directly to confirmed RSVPs."
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
          <p className="text-gray-600 text-lg">
            Everything you need to know about attending the India Property Expo America tour
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-xl border border-gray-200 px-6 py-2 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-red-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center bg-red-50 rounded-2xl p-8 border border-red-100">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our property advisory team is here to assist you with every aspect of investing in India from America.
          </p>
          <a
            href="https://wa.me/919372772668?text=Hi!%20I%20have%20questions%20about%20the%20India%20Property%20Expo%20America."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold px-8 py-3 rounded-full hover:shadow-lg transition-all"
          >
            💬 Chat with an Advisor on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}