import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Terms and Conditions – Sownmark Digital</title>
        <meta
          name="description"
          content="Review the terms and conditions for using Sownmark Digital's services and website. Understand our service agreement and policies."
        />
        <link rel="canonical" href="https://www.sownmark.com/terms-conditions" />
      </Helmet>
      <div className="container px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-100/50">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-lg text-gray-600">Effective Date: 1 January 2025</p>
        </motion.div>

        <motion.div {...fadeInUp} className="space-y-8 text-gray-700">
          <p>
            Welcome to Sownmark Digital. These Terms and Conditions ("Terms") govern your access and use of our website and business services. By using our site and services, you agree to comply with and be bound by the following terms.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Scope of Services</h2>
            <p>We provide:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Digital marketing services: SEO, PPC, and social media management</li>
              <li>Website development and design solutions</li>
              <li>Hiring and talent acquisition services</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Service Access</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Clients must provide accurate information at the time of inquiry or registration.</li>
              <li>Service access is granted only upon the terms outlined in the specific project agreement or full payment.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. No Refund Policy</h2>
            <p>
              All fees paid to Sownmark Digital are non-refundable under any circumstances for any business services. By making a payment, you agree to this policy without exception.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Service Quality Assurance</h2>
            <p>
              We pride ourselves on delivering best-in-industry quality in our digital services. Clients receive premium solutions at competitive rates, helping them scale their businesses affordably and maximize ROI.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Use of Our Content</h2>
            <p>
              All content—text, graphics, videos, assets, etc.—is the property of Sownmark Digital and may not be copied, resold, or redistributed without written permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. User Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Users must not use the website for any unlawful activity.</li>
              <li>Unauthorized distribution of our service material or proprietary tools is strictly prohibited.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Termination</h2>
            <p>We reserve the right to restrict or terminate access if you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violate any of our policies</li>
              <li>Misuse our content or services</li>
              <li>Fail to comply with applicable laws or these Terms</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Limitation of Liability</h2>
            <p>Sownmark Digital is not liable for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Technical interruptions</li>
              <li>Unachieved business outcomes</li>
              <li>User performance in external platforms</li>
            </ul>
            <p className="mt-4">
              All results depend on proper execution and external market factors.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <p>
              Email: <a href="mailto:hello@sownmark.com" className="text-blue-600 hover:underline">hello@sownmark.com</a>
            </p>
            <p>
              Website: <a href="https://www.sownmark.com" className="text-blue-600 hover:underline">https://www.sownmark.com</a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
