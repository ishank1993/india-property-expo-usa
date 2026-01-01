import React from "react";

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-orange-600 to-green-600 p-1 rounded-lg mb-8">
          <div className="bg-white p-8 rounded-lg">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2">
              Privacy Policy
            </h1>
            <p className="text-center text-gray-600">
              Last Updated: January 1, 2026
            </p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <p className="text-gray-700 leading-relaxed">
              At NRI Nivesh, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains what information we collect, how it's used, stored, and how you can control it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Data We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Personal Information:</strong> Name, Email Address, Phone Number, Country of Residence</li>
              <li><strong>Expo Registration Details:</strong> Preferred date of visit, city of interest, educational session preferences</li>
              <li><strong>Exhibitor Business Information:</strong> Company name, business registration details, contact information</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, operating system</li>
              <li><strong>Cookies & Tracking Data:</strong> Analytics data, user behavior, page views, session duration</li>
              <li><strong>Communication Data:</strong> Emails, chat messages, feedback, inquiries</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Data</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We use your personal data to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Provide access to property expos, webinars, and educational sessions</li>
              <li>Send event confirmations, updates, newsletters, and reminders</li>
              <li>Connect you with relevant property developers and exhibitors</li>
              <li>Improve our platform, marketing strategies, and user experience</li>
              <li>Analyze website traffic and user behavior through analytics tools</li>
              <li>Comply with legal obligations and regulatory requirements</li>
              <li>Prevent fraud, abuse, and security threats</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Legal Basis for Processing (PDPA Compliance)</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Under Singapore's Personal Data Protection Act (PDPA), we process your data based on:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Consent:</strong> You provide consent when registering for events or subscribing to newsletters</li>
              <li><strong>Contractual Necessity:</strong> Processing required to fulfill expo registration and services</li>
              <li><strong>Legitimate Interests:</strong> Analytics, marketing, platform improvement</li>
              <li><strong>Legal Compliance:</strong> Meeting regulatory requirements</li>
            </ul>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Sharing of Data</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Property Developers & Exhibitors:</strong> Only when you request meetings, information, or express interest in specific projects</li>
              <li><strong>Analytics & Marketing Tools:</strong> Google Analytics, Facebook Pixel, email automation platforms</li>
              <li><strong>CRM & Communication Tools:</strong> Customer relationship management systems</li>
              <li><strong>Payment Processors:</strong> Secure third-party payment gateways (if applicable)</li>
              <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
            </ul>
            <p className="text-blue-700 font-semibold mt-4">
              We NEVER sell your personal data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies & Tracking Technologies</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              This website uses cookies to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Track website visits and user interactions</li>
              <li>Improve user experience and personalization</li>
              <li>Display relevant advertisements and content</li>
              <li>Analyze website performance and traffic sources</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              A cookie consent banner allows you to Accept or Reject non-essential cookies. You can manage cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Storage & Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement industry-standard security measures including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
              <li>SSL/TLS encryption for data transmission</li>
              <li>Secure servers with restricted access</li>
              <li>Regular security audits and updates</li>
              <li>Password protection and authentication protocols</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Your data is stored on secure servers and retained only as long as necessary for the purposes outlined in this policy or as required by law.
            </p>
          </section>

          <section className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Data Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data</li>
              <li><strong>Withdraw Consent:</strong> Opt-out of marketing communications anytime</li>
              <li><strong>Data Portability:</strong> Receive your data in a structured, machine-readable format</li>
              <li><strong>Object to Processing:</strong> Object to certain types of data processing</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              To exercise any of these rights, please contact us at: <strong>info@nrinivesh.in</strong>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed">
              Your data may be transferred to and processed in countries outside Singapore, including India and other regions where our service providers operate. We ensure adequate safeguards are in place to protect your data in accordance with PDPA requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may contain links to third-party websites, developer portals, or partner platforms. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal data from children. If you believe we have collected information from a minor, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:
            </p>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">
                <strong>Data Protection Officer:</strong><br />
                Email: info@nrinivesh.in<br />
                Website: www.nrinivesh.com
              </p>
            </div>
          </section>

          <div className="mt-12 p-6 bg-orange-50 border-l-4 border-orange-600 rounded-lg">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-orange-700">Your Consent:</strong> By using this website and registering for our events, you acknowledge that you have read and understood this Privacy Policy and consent to the collection, use, and sharing of your personal data as described herein.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}