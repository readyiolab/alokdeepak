import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const CancellationRefundPolicy = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-100/50">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Cancellation & Refund Policy
          </h1>
          <p className="text-lg text-gray-600">Effective Date: 1 January 2025</p>
        </motion.div>

        <motion.div {...fadeInUp} className="space-y-8 text-gray-700">
          <p>
            At Sownmark, we are committed to delivering high-quality digital marketing services and training programs with complete transparency. Please read our cancellation and refund policy carefully before engaging with our services or enrolling in our courses.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Before Contract Signing</h2>
            <p>
              We understand that situations may change, and you may need to cancel your service or course enrollment. If a refund or cancellation request is raised before a formal contract is signed, we will review and process the request accordingly.
            </p>
            <div className="mt-4">
              <h3 className="text-xl font-medium text-gray-800 mb-2">For Digital Marketing Course Students:</h3>
              <p>
                If cancellation is requested before signing the course agreement or formal onboarding, a full or partial refund (if payment has been made) will be initiated within 7-10 business days.
              </p>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-medium text-gray-800 mb-2">For Clients (Business/Marketing Services):</h3>
              <p>
                If a cancellation is requested before signing the service agreement, we may process a refund after a review, subject to any administrative or onboarding charges.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. After Contract Signing</h2>
            <p>Once a contract is signed for any of our services or training programs:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>No refunds will be issued under any circumstances.</li>
              <li>No cancellations will be accepted once services or course delivery has begun under the agreement.</li>
            </ul>
            <p className="mt-4">
              This policy is in place to ensure fairness and commitment from both parties and to uphold the time, planning, and resource allocation that begins immediately upon agreement.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Important Notes</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Refunds, if applicable before contract signing, are processed to the original payment method.</li>
              <li>Refund eligibility is subject to Sownmark’s internal review and approval.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Contact Us</h2>
            <p>
              If you have any concerns or wish to discuss your situation before contract signing, please feel free to contact us:
            </p>
            <ul className="list-none pl-0 space-y-2">
              <li>Email: <a href="mailto:hello@sownmark.com" className="text-blue-600 hover:underline">hello@sownmark.com</a></li>
              <li>Website: <a href="https://sownmark.com" className="text-blue-600 hover:underline">https://sownmark.com</a></li>
            </ul>
            <p className="mt-4">
              We’re here to ensure a transparent and smooth experience for all our clients and students.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CancellationRefundPolicy;