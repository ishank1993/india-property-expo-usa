import React from "react";
import { AlertTriangle } from "lucide-react";

export function ComplianceFooter() {
  return (
    <div className="bg-gray-900 border-t-4 border-red-600">
      <div className="container mx-auto px-4 sm:px-6 py-6">
        <div className="flex items-start gap-3 mb-4">
          <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-white font-bold mb-2">Important Disclaimer</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              The content on this website is for <strong className="text-white">informational purposes only</strong> and does not constitute financial, tax, investment, or legal advice. 
              Property investments carry inherent risks including market volatility, liquidity constraints, and regulatory changes. 
              Past performance is not indicative of future results. We do not guarantee returns, capital safety, or tax benefits.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4">
          <p className="text-gray-400 text-xs leading-relaxed">
            <strong className="text-gray-300">Regulatory Notice (United States):</strong> This platform is informational only. NRI Nivesh is not a US-registered broker-dealer or investment advisor and does not conduct regulated investment advisory activities in the United States. 
            Information presented is general in nature and not tailored to individual circumstances. 
            Users must consult licensed professionals (SEBI-registered advisors in India, licensed US financial advisors, qualified CPAs/tax consultants, and legal attorneys) before making any investment decisions. 
            NRI Nivesh disclaims all liability for losses or damages arising from reliance on information provided on this platform.
          </p>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-700">
          <p className="text-gray-400 text-xs">
            <strong className="text-gray-300">Data Protection:</strong> We handle personal data in accordance with applicable United States privacy regulations and industry standards. 
            Your personal information is collected with consent, securely stored, and used only for expo-related communications. 
            We never sell your data. You have the right to access, correct, or delete your information anytime. 
            Contact: <a href="mailto:info@nrinivesh.in" className="text-red-500 underline">info@nrinivesh.in</a>
          </p>
        </div>
      </div>
    </div>
  );
}