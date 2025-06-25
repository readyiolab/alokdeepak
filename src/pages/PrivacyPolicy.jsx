
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const PrivacyPolicy = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-100/50">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">Effective Date: 1 January 2025</p>
        </motion.div>

        <motion.div {...fadeInUp} className="space-y-8 text-gray-700">
          <p>
            At Sownmark ("Sownmark", "we", "us", or "our"), your privacy is important to us. This Privacy Policy explains how we collect, use, store, and protect your personal data when you access our website, enroll in our online courses, or purchase our digital services. By using our website and services, you consent to the practices described in this policy.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Who We Are</h2>
            <p>
              Sownmark is a digital education and marketing solutions provider based in India. We offer online digital marketing courses, hiring solutions, and all-in-one business services including website development, social media marketing, and digital advertising, primarily for businesses seeking growth at industry-best pricing.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
            <p>We collect the following personal data through forms, registrations, and interactions:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Course/Application Preferences</li>
              <li>Service Requirements (for business clients)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Enroll students in online courses</li>
              <li>Offer scholarships based on academic performance in entrance tests</li>
              <li>Provide requested services to business clients</li>
              <li>Communicate offers, updates, and service details</li>
              <li>Improve user experience on our platforms</li>
            </ul>
            <p className="mt-4">We do not sell, rent, or trade your information to third parties.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Marketing and CRM Usage</h2>
            <p>We may use your information to send you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Course reminders, scholarship updates, new offerings</li>
              <li>Business service promotions or project updates</li>
            </ul>
            <p className="mt-4">
              You may opt out at any time by emailing us or unsubscribing via our emails.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Cookies and Analytics</h2>
            <p>
              We use cookies and third-party tools like Meta Pixel and Google Analytics to track site behavior for performance improvement. You can control cookies via your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Data Protection and Security</h2>
            <p>
              Your data is stored on secure servers with standard encryption practices. We take appropriate measures to prevent unauthorized access or misuse of your personal information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access and update your data</li>
              <li>Withdraw consent at any time</li>
              <li>Request deletion of your personal data</li>
            </ul>
            <p className="mt-4">
              To request any of the above, email us at: <a href="mailto:hello@sownmark.com" className="text-blue-600 hover:underline">hello@sownmark.com</a>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Policy Updates</h2>
            <p>
              We may revise this policy from time to time. Changes will be posted here with the effective date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <p>
              For questions or concerns regarding this Privacy Policy:
            </p>
            <ul className="list-none pl-0 space-y-2">
              <li>Email: <a href="mailto:hello@sownmark.com" className="text-blue-600 hover:underline">hello@sownmark.com</a></li>
              <li>Website: <a href="https://sownmark.com" className="text-blue-600 hover:underline">https://sownmark.com</a></li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
