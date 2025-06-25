
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const TermsAndConditions = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-100/50">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-lg text-gray-600">Effective Date: 1 January 2025</p>
        </motion.div>

        <motion.div {...fadeInUp} className="space-y-8 text-gray-700">
          <p>
            Welcome to Sownmark. These Terms and Conditions ("Terms") govern your access and use of our website, online courses, and business services. By using our site and services, you agree to comply with and be bound by the following terms.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Scope of Services</h2>
            <p>We provide:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Online digital marketing courses through our platform</li>
              <li>All-in-one business solutions: website development, hiring solution, digital marketing, social media management, and advertising services</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Enrollment & Course Access</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Students must provide accurate information at the time of registration.</li>
              <li>Scholarships of up to 60% may be awarded based on performance in qualifying assessments.</li>
              <li>Course access is granted only upon full payment or approved scholarship confirmation.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. No Refund Policy</h2>
            <p>
              All fees paid to Sownmark are non-refundable under any circumstances—whether for student courses or business services. By making a payment, you agree to this policy without exception.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Service Quality Assurance</h2>
            <p>
              We pride ourselves on delivering best-in-industry quality in both educational and service domains. Clients receive premium digital services at discounted rates, helping them scale their businesses affordably and maximize ROI.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Use of Our Content</h2>
            <p>
              All content—text, graphics, videos, course material, etc.—is the property of SOWNmark and may not be copied, resold, or redistributed without written permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. User Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Users must not use the website for any unlawful activity.</li>
              <li>Sharing login credentials or course material is strictly prohibited.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Termination</h2>
            <p>We reserve the right to restrict or terminate access if you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violate any of our policies</li>
              <li>Misuse course content or services</li>
              <li>Fail to comply with applicable laws or these Terms</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Limitation of Liability</h2>
            <p>SOWNmark is not liable for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Technical interruptions</li>
              <li>Unachieved business outcomes</li>
              <li>User performance in external platforms</li>
            </ul>
            <p className="mt-4">
              All services and course results depend on proper execution and external market factors.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Amendments</h2>
            <p>
              We may update these Terms at any time. Continued use of our services means you accept any changes made.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Governing Law</h2>
            <p>
              These Terms are governed by and interpreted under the laws of the Republic of India. Any disputes shall be subject to the jurisdiction of the courts of [Your City/State].
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <p>
              Email: <a href="mailto:hello@sownmark.com" className="text-blue-600 hover:underline">hello@sownmark.com</a>
            </p>
            <p>
              Website: <a href="https://sownmark.com" className="text-blue-600 hover:underline">https://sownmark.com</a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
