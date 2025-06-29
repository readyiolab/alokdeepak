import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 sm:pt-28 sm:pb-20 bg-[#f9fafb] min-h-screen">
      <div className="container relative z-10 mx-auto px-4 max-w-7xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-[#1a2957]">
              Unlock Your <span className="">Digital Potential</span> with Sownmark
            </h1>
            <p className="text-base sm:text-lg text-[#1a2957]/80 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Master digital marketing, hire top talent, and drive online success with our expert solutions.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link
                to="/digital-marketing-mastery#courses"
                className="inline-block px-6 py-3 text-sm sm:text-base font-medium bg-[#1a2957] text-white rounded-md hover:bg-[#142145] shadow-sm transition-colors duration-300"
              >
                Explore Courses
              </Link>
              <Link
                to="/hiring-solutions#hire-top-talent"
                className="inline-block px-6 py-3 text-sm sm:text-base font-medium bg-white border-2 border-[#1a2957] text-[#1a2957] rounded-md hover:bg-[#1a2957] hover:text-white shadow-sm transition-colors duration-300"
              >
                Hire Top Talent
              </Link>
              <Link
                to="/contact#contact-form"
                className="inline-block px-6 py-3 text-sm sm:text-base font-medium bg-[#1a2957] text-white rounded-md hover:bg-[#142145] shadow-sm transition-colors duration-300"
              >
                Get a Free Consultation
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 lg:mt-0 relative"
          >
            <img
              src="./digitall.webp"
              alt="Digital Marketing Team Working Together"
              className="rounded-xl shadow-md object-cover w-full h-auto max-h-[400px] sm:max-h-[500px] mx-auto border border-gray-100 max-w-full"
            />
          </motion.div>
        </div>
      </div>

      {/* Gradient Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#90abff]/20 to-[#1a2957]/20"></div>
    </section>
  );
};

export default HeroSection;