import React from "react";
import { AlertTriangle } from "lucide-react";

export function Disclaimer() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-red-600 to-amber-600 p-1 rounded-lg mb-8">
          <div className="bg-white p-8 rounded-lg">
            <div className="flex items-center justify-center gap-3 mb-2">
              <AlertTriangle className="w-8 h-8 text-red-600" />
              <h1 className="text-3xl sm:text-4xl font-bold text-center">
                Disclaimer
              </h1>
            </div>
            <p className="text-center text-gray-600">
              Last Updated: March 18, 2026
            </p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-bold text-red-900 mb-3">IMPORTANT NOTICE</h2>
                <p className="text-gray-800 leading-relaxed font-medium">
                  All content on this website is for <strong>educational and informational purposes only</strong>. Nothing on this site constitutes professional advice or recommendations.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Not Financial, Investment, or Tax Advice</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              The information provided on this website does NOT constitute:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Investment advice</strong> or recommendations to buy, sell, or hold any property or financial instrument</li>
              <li><strong>Tax advice</strong> or guidance on tax planning, returns, or obligations</li>
              <li><strong>Legal advice</strong> on property laws, contracts, or regulatory compliance</li>
              <li><strong>Personalized financial recommendations</strong> tailored to individual circumstances</li>
              <li><strong>Professional consulting services</strong> regulated by financial authorities</li>
            </ul>
          </section>

          <section className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. No Guaranteed Returns or Benefits</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We do NOT guarantee or promise:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Safety of capital or principal amount</li>
              <li>Fixed, monthly, or annual returns on investment</li>
              <li>Capital appreciation or property value increase</li>
              <li>Rental income or occupancy rates</li>
              <li>Tax benefits, exemptions, or deductions</li>
              <li>Residency, visa, or citizenship eligibility through property purchase</li>
              <li>GIFT City investment outcomes or regulatory approvals</li>
              <li>Eligibility for NRI-specific schemes or benefits</li>
            </ul>
            <p className="text-red-700 font-bold mt-4 text-lg">
              ⚠️ All investments involve risk. Past performance is not indicative of future results.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Regulatory Position (Kingdom of Bahrain)</h2>
            <p className="text-gray-700 leading-relaxed">
              This website is informational only. NRI Nivesh is not licensed by the Central Bank of Bahrain (CBB) and does not carry on any regulated financial service, investment advisory or investment business activity in the Kingdom of Bahrain. Nothing on this site is an offer, solicitation or recommendation to buy or sell any security or financial instrument.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Any property investment information presented is general in nature and not tailored to individual financial situations, risk profiles, or investment objectives.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Developers & Exhibitors</h2>
            <p className="text-gray-700 leading-relaxed">
              The property developers, builders, and exhibitors featured on this platform are independent third parties. NRI Nivesh:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
              <li>Does NOT endorse, guarantee, or verify the claims made by exhibitors</li>
              <li>Is NOT responsible for project delays, quality issues, or delivery failures</li>
              <li>Does NOT verify RERA registrations, approvals, or legal compliance of projects</li>
              <li>Acts solely as a platform connecting users with developers</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4 font-medium">
              Users must conduct their own due diligence before making any investment decisions.
            </p>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Consult Professional Advisors</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Before making any property investment or financial decision, users MUST consult:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li><strong>Licensed Financial Advisor:</strong> CBB-licensed in Bahrain, or SEBI-registered in India</li>
              <li><strong>Tax Consultant:</strong> Qualified chartered accountant familiar with NRI taxation</li>
              <li><strong>Legal Attorney:</strong> Specialist in property law and cross-border transactions</li>
              <li><strong>Immigration Consultant:</strong> For residency or visa-related queries</li>
              <li><strong>RERA-Registered Agent:</strong> For property verification in India</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Information Accuracy & Updates</h2>
            <p className="text-gray-700 leading-relaxed">
              While we strive to provide accurate and up-to-date information, we do not warrant:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
              <li>Completeness or accuracy of property details, prices, or specifications</li>
              <li>Current availability of projects or units</li>
              <li>Accuracy of third-party content, links, or references</li>
              <li>Real-time updates on regulatory changes or market conditions</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Information on this site may become outdated. Users should verify all details directly with developers and official sources.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              NRI Nivesh and its affiliates shall not be liable for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
              <li>Financial losses arising from property investments</li>
              <li>Decisions made based on information on this website</li>
              <li>Actions or omissions of third-party developers or service providers</li>
              <li>Delays, errors, or interruptions in website functionality</li>
              <li>Tax implications or legal consequences of investment decisions</li>
              <li>Changes in laws, regulations, or government policies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Risk Factors in Real Estate Investment</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Real estate investments carry inherent risks including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Market volatility and price fluctuations</li>
              <li>Liquidity constraints and difficulty in selling properties</li>
              <li>Regulatory changes and policy modifications</li>
              <li>Currency exchange rate fluctuations (for NRI investors)</li>
              <li>Construction delays and project abandonment</li>
              <li>Title disputes and legal complications</li>
              <li>Economic downturns affecting property values</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. NRI-Specific Considerations</h2>
            <p className="text-gray-700 leading-relaxed">
              NRI investors should be aware of:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
              <li>Foreign Exchange Management Act (FEMA) regulations in India</li>
              <li>Tax implications in both India and country of residence</li>
              <li>Repatriation restrictions and currency conversion rules</li>
              <li>Documentation requirements for NRI property purchases</li>
              <li>Banking and funding restrictions for non-residents</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4 font-medium">
              Always consult with FEMA-compliant legal and tax advisors before proceeding.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. GIFT City Information</h2>
            <p className="text-gray-700 leading-relaxed">
              Information about Gujarat International Finance Tec-City (GIFT City) is provided for general awareness only. We do not:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
              <li>Guarantee eligibility for GIFT City investment schemes</li>
              <li>Provide tax advice on GIFT City benefits</li>
              <li>Ensure regulatory approvals or compliance</li>
              <li>Verify authenticity of GIFT City-related projects or offerings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. No Liability for Educational Content</h2>
            <p className="text-gray-700 leading-relaxed">
              Educational sessions, webinars, and informational content (including NRI Tax Clinic, GIFT City sessions, Will & Inheritance seminars) are for general knowledge only and do not constitute professional advice or consultation services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact for Clarifications</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For any questions or clarifications regarding this disclaimer, contact us at:
            </p>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> info@nrinivesh.in<br />
                <strong>Website:</strong> www.nrinivesh.in
              </p>
            </div>
          </section>

          <div className="mt-12 p-6 bg-yellow-50 border-2 border-yellow-400 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-800 leading-relaxed font-semibold mb-2">
                  FINAL DISCLAIMER:
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  The content on this website is for information only and is not financial, tax, or legal advice. Investments carry risks. Past performance does not guarantee future results. Users should conduct independent due diligence and consult professional advisors before making any investment decisions. NRI Nivesh disclaims all liability for losses or damages arising from reliance on information provided on this platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
