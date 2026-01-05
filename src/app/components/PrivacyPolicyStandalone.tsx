import React from "react";

export function PrivacyPolicyStandalone() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-orange-600 to-green-600 p-1 rounded-lg mb-8">
          <div className="bg-white p-8 rounded-lg">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2">
              Privacy Policy
            </h1>
            <p className="text-center text-gray-600">
              Last Updated: January 5, 2026
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

          {/* NEW SECTIONS - ADDITIONAL COMPLIANCE REQUIREMENTS */}

          <section className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Data Retention & Storage Duration</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We retain your personal data for the following periods:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Event Registration Data:</strong> Retained for up to 3 years after the event for customer relationship management and follow-up opportunities</li>
              <li><strong>Marketing Communications:</strong> Retained until you unsubscribe or request deletion</li>
              <li><strong>Analytics & Behavioral Data:</strong> Retained for up to 26 months (Google Analytics standard)</li>
              <li><strong>Transactional Records:</strong> Retained for 7 years to comply with tax and accounting regulations</li>
              <li><strong>Account Data (if applicable):</strong> Retained while your account is active, and up to 1 year after account closure unless legal obligations require longer retention</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              After the retention period, we will securely delete or anonymize your personal data. You may request earlier deletion by contacting us at <strong>info@nrinivesh.in</strong>.
            </p>
          </section>

          <section className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Meta (Facebook & Instagram) Lead Ads Compliance</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We use <strong>Meta Lead Ads</strong> on Facebook and Instagram to collect registrations and inquiries. When you submit a Lead Ad form:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Data Collected:</strong> Name, email address, phone number, and any optional fields you provide (e.g., city, property interest)</li>
              <li><strong>Meta Pixel:</strong> We use Meta Pixel to track user interactions, conversions, and retarget advertisements</li>
              <li><strong>Meta's Role:</strong> Meta acts as a data processor. Your submitted data is shared with NRI Nivesh as the data controller</li>
              <li><strong>Advertising & Retargeting:</strong> We may use your data to show personalized ads on Facebook and Instagram</li>
              <li><strong>Data Deletion Rights:</strong> You can request deletion of your data from our systems by emailing <strong>info@nrinivesh.in</strong>. For data held by Meta, visit your Facebook Ad Preferences or contact Meta directly</li>
            </ul>
            <p className="text-pink-700 font-semibold mt-4">
              By submitting a Meta Lead Ad form, you consent to the collection and processing of your data as described in this Privacy Policy.
            </p>
          </section>

          <section className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Google Analytics & Advertising Disclosure</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We use <strong>Google Analytics</strong> and <strong>Google Ads</strong> to understand website traffic and improve our services:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Google Analytics:</strong> Collects anonymous data such as page views, session duration, bounce rate, device type, and location (city/country level)</li>
              <li><strong>Google Ads Remarketing:</strong> We may display targeted ads to users who have previously visited our website</li>
              <li><strong>Conversion Tracking:</strong> Tracks form submissions, registrations, and other key actions to measure campaign effectiveness</li>
              <li><strong>IP Anonymization:</strong> We have enabled IP anonymization to protect your privacy</li>
              <li><strong>Opt-Out:</strong> You can opt-out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Google Analytics Opt-Out Browser Add-on</a></li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              For more information, review <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Google's Privacy Policy</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Cookie Consent & Preference Management</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              When you first visit our website, you will see a cookie consent banner with the following options:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Accept All Cookies:</strong> Allows all cookies, including analytics, advertising, and tracking cookies</li>
              <li><strong>Reject Non-Essential Cookies:</strong> Only essential cookies required for website functionality are enabled</li>
              <li><strong>Cookie Categories:</strong>
                <ul className="list-circle pl-6 space-y-1 mt-2">
                  <li><strong>Essential Cookies:</strong> Required for website operation (e.g., session management)</li>
                  <li><strong>Analytics Cookies:</strong> Google Analytics, Meta Pixel</li>
                  <li><strong>Advertising Cookies:</strong> Used for remarketing and targeted ads</li>
                </ul>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              You can change your cookie preferences at any time by clearing your browser cookies and revisiting our website. Your consent is stored locally and expires after 365 days.
            </p>
          </section>

          <section className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Data Breach Notification Procedure</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              In the unlikely event of a data breach that affects your personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Notification Timeline:</strong> We will notify affected users within 72 hours of discovering the breach, in compliance with Singapore PDPA requirements</li>
              <li><strong>Method of Notification:</strong> Email notification to the address you provided during registration</li>
              <li><strong>Information Provided:</strong> Nature of the breach, data affected, steps taken to mitigate harm, and recommended actions for users</li>
              <li><strong>Regulatory Reporting:</strong> We will report significant breaches to the Personal Data Protection Commission (PDPC) in Singapore</li>
              <li><strong>Remedial Actions:</strong> Immediate measures to secure systems, investigate the breach, and prevent future incidents</li>
            </ul>
            <p className="text-red-700 font-semibold mt-4">
              We take data security seriously and have implemented robust measures to prevent unauthorized access, disclosure, or loss of personal data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">17. Automated Decision-Making & Profiling</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>We do NOT use automated decision-making or profiling</strong> that produces legal effects or similarly significantly affects you. All decisions regarding event registrations, exhibitor approvals, and customer communications are made by human review. We may use automated tools for analytics and marketing segmentation, but these do not result in automated decisions that impact your rights.
            </p>
          </section>

          <section className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">18. Do Not Sell or Share Personal Information</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              <strong>We DO NOT sell or share your personal information for monetary consideration.</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Your data is only used for the purposes outlined in this Privacy Policy</li>
              <li>We may share data with property developers and exhibitors only with your explicit consent or when you request information about specific projects</li>
              <li>We do not sell, rent, or trade your personal data to third-party marketers or data brokers</li>
              <li>Analytics and advertising partners (Google, Meta) may receive data for service provision, but this does not constitute a "sale" under applicable privacy laws</li>
            </ul>
            <p className="text-indigo-700 font-semibold mt-4">
              If you have concerns about data sharing, please contact us at <strong>info@nrinivesh.in</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">19. User Opt-Out & Unsubscribe Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              You have the right to opt-out of marketing communications at any time:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Email Unsubscribe:</strong> Click the "Unsubscribe" link at the bottom of any marketing email</li>
              <li><strong>SMS Opt-Out:</strong> Reply "STOP" to any SMS message</li>
              <li><strong>WhatsApp Opt-Out:</strong> Reply "STOP" or block our WhatsApp Business account</li>
              <li><strong>Push Notifications:</strong> Disable notifications in your device settings</li>
              <li><strong>Cookie Opt-Out:</strong> Reject non-essential cookies via the cookie consent banner or clear your browser cookies</li>
              <li><strong>Complete Data Deletion:</strong> Email <strong>info@nrinivesh.in</strong> to request full account and data deletion</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Please note: Opting out of marketing communications will not affect transactional emails (e.g., event confirmations, account notifications).
            </p>
          </section>

          <section className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">20. Governing Law & Jurisdiction</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              This Privacy Policy is governed by the laws of:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Singapore:</strong> Compliance with Singapore's Personal Data Protection Act (PDPA) 2012 and its amendments</li>
              <li><strong>India:</strong> Compliance with India's Information Technology Act, 2000 and Digital Personal Data Protection Act (DPDPA) 2023</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              <strong>Dispute Resolution:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>For Singapore residents: Disputes will be subject to the exclusive jurisdiction of the courts of Singapore</li>
              <li>For India residents: Disputes will be subject to the jurisdiction of courts in Delhi, India</li>
              <li>For other jurisdictions: Disputes will be governed by the laws of Singapore</li>
            </ul>
            <p className="text-teal-700 font-semibold mt-4">
              If you have privacy-related complaints, you may also contact the Personal Data Protection Commission (PDPC) in Singapore or the relevant data protection authority in your country.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">21. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:
            </p>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">
                <strong>Data Protection Officer:</strong><br />
                Email: info@nrinivesh.in<br />
                Website: www.nrinivesh.in
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
