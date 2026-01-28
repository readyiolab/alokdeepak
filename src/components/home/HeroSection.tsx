import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, MessageSquare, Users, ShieldCheck } from 'lucide-react';


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
              We Build, Market, and Scale Your Business.
            </h1>
            <p className="text-base sm:text-lg text-[#1a2957]/80 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              From high-converting websites to viral influencer campaigns, we provide the technical and creative fuel your brand needs to dominate.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link
                to="/contact#contact-form"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm sm:text-base font-medium bg-[#1a2957] text-white rounded-full hover:bg-[#142145] shadow-sm transition-colors duration-300 transform hover:scale-105"
              >
                <MessageSquare size={18} />
                Get a Free Strategy Audit
              </Link>

              <Link
                to="/hiring-solutions#hire-top-talent"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm sm:text-base font-medium bg-white border-2 border-[#1a2957] text-[#1a2957] rounded-full hover:bg-[#1a2957] hover:text-white shadow-sm transition-colors duration-300"
              >
                <Users size={18} />
                Hire Top Talent
              </Link>

              <Link
                to="/digital-marketing-mastery#courses"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm sm:text-base font-medium bg-gray-100 text-[#1a2957] rounded-full hover:bg-gray-200 shadow-sm transition-colors duration-300"
              >
                <GraduationCap size={18} />
                Explore Courses
              </Link>
            </div>

            {/* Trust Bar */}
            <div className="mt-10 pt-6 border-t border-gray-200/60">
              <div className="flex flex-col sm:flex-row items-center gap-6 lg:justify-start justify-center text-center lg:text-left">
                <div className="flex items-center gap-2  px-3 py-1.5 rounded-full border border-green-100 shadow-sm whitespace-nowrap">

                  <span className="font-semibold  text-xs sm:text-sm">Guaranteed SEO Rankings</span>
                </div>
                <div className="flex flex-wrap gap-5 items-center justify-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                  <img src="/partners/adyogi.webp" alt="Adyogi" className="h-6 sm:h-7 w-auto object-contain" />
                  <img src="/partners/nykaa.webp" alt="Nykaa" className="h-6 sm:h-7 w-auto object-contain" />
                  <img src="/partners/oyo.webp" alt="OYO" className="h-6 sm:h-7 w-auto object-contain" />
                  <img src="/partners/sleepyowl.webp" alt="Sleepy Owl" className="h-6 sm:h-7 w-auto object-contain" />
                  <img src="/partners/google.webp" alt="Google" className="h-6 sm:h-7 w-auto object-contain" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 lg:mt-0 relative hidden lg:block"
          >
            <img
              src="./digitall.webp"
              alt="Digital Marketing Team Working Together"
              className="rounded-2xl shadow-xl object-cover w-full h-auto max-h-[500px] mx-auto border border-gray-100 transform hover:scale-[1.02] transition-transform duration-500"
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