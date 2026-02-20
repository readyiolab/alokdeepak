import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, ArrowRight, MessageSquare, ShieldCheck } from 'lucide-react';
// @ts-ignore
import FloatingLines from '../FloatingLines';

const HeroSection: React.FC = () => {
  const isMobile = React.useRef(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)).current;

  return (
    <section className="relative overflow-hidden bg-[#1a2957] min-h-screen flex items-center justify-center pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        {/* @ts-ignore */}
        <FloatingLines
          linesGradient={2}
          mouseInteraction={!isMobile}
          lineCount={isMobile ? [4, 3] : [12, 10]}
          lineDistance={isMobile ? [10, 20] : [5, 12]}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-5xl text-center">
        <motion.div
          initial={isMobile ? { opacity: 0 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.4 : 0.8 }}
          className="space-y-10"
        >
          <div className="space-y-6">
            <motion.h1
              initial={isMobile ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0.3 : 0.6, delay: isMobile ? 0.1 : 0.2 }}
              className="text-4xl md:text-6xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] max-w-4xl mx-auto"
            >
              We Build, Market, and Scale Your Business.
            </motion.h1>

            <motion.p
              initial={isMobile ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0.3 : 0.6, delay: isMobile ? 0.2 : 0.4 }}
              className="text-base md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-medium"
            >
              From high-converting websites to viral influencer campaigns, we provide the technical and creative fuel your brand needs to dominate.
            </motion.p>
          </div>

          <motion.div
            initial={isMobile ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.3 : 0.6, delay: isMobile ? 0.3 : 0.6 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-4"
          >
            <Link
              to="/contact#contact-form"
              className="w-full sm:w-auto px-8 py-3.5 border-2 border-white/30 text-white rounded-full font-bold text-base md:text-lg hover:bg-transparent hover:text-white transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >

              Get a Free Strategy Audit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/hiring-solutions"
              className="w-full sm:w-auto px-8 py-3.5 border-2 border-white/30 text-white rounded-full font-bold text-base md:text-lg hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <Users className="w-5 h-5" />
              Hire Top Talent
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Background Edge */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5 z-10" />
    </section>
  );
};

export default HeroSection;