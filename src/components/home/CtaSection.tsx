import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react'; // Assuming you use lucide-react for icons

// Define fadeInUp animation to match the first CTA
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const CtaSection: React.FC = () => {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a2957 0%, #2563eb 50%, #3b82f6 100%)',
      }}
    >
      {/* Decorative Radial Gradients */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_#60a5fa_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_#93c5fd_0%,_transparent_50%)]"></div>
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            Ready to Build Your
            <span className="block bg-gradient-to-r from-blue-100 via-white to-blue-200 bg-clip-text text-transparent mt-2">
              Digital Masterpiece?
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Partner with Sownmark to create a website that drives results and captivates your audience. Schedule your free consultation today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group h-full"
            >
              <Link
                to="/contact#contact-form"
                className="bg-white text-gray-900 px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 min-w-[250px] justify-center w-full sm:w-auto shadow-2xl"
                aria-label="Schedule a Free Website Consultation with Sownmark"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 translate-x-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group h-full"
            >
              <Link
                to="/about"
                className="bg-transparent border-2 text-white px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-base sm:text-lg border-white hover:bg-white hover:text-gray-600 transition-all duration-300 min-w-[250px] flex items-center w-full sm:w-auto justify-center"
                aria-label="Learn More About Sownmark's Web Development Services"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;