import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, ArrowRight, MessageSquare, ShieldCheck } from 'lucide-react';
// @ts-ignore
import FloatingLines from '../FloatingLines';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#1a2957] min-h-[95vh] flex items-center justify-center pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        {/* @ts-ignore */}
        <FloatingLines
          linesGradient={2}
          mouseInteraction={true}
          lineCount={[12, 10]}
          lineDistance={[5, 12]}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] max-w-4xl mx-auto"
            >
              We Build, Market, and Scale Your Business.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-medium"
            >
              From high-converting websites to viral influencer campaigns, we provide the technical and creative fuel your brand needs to dominate.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
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

          {/* Trust Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-20 flex flex-col items-center gap-10 w-full"
          >
            <div className="flex flex-col items-center gap-4">
              <span className="text-white/40 text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase">
                Trusted by Global Innovators
              </span>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>

            <div className="flex flex-wrap gap-8 sm:gap-12 items-center justify-center opacity-40 brightness-0 invert transition-all duration-500 hover:opacity-100 px-4">
              <img src="/partners/adyogi.webp" alt="Adyogi" className="h-5 sm:h-7 w-auto transition-transform hover:scale-110" />
              <img src="/partners/nykaa.webp" alt="Nykaa" className="h-5 sm:h-7 w-auto transition-transform hover:scale-110" />
              <img src="/partners/oyo.webp" alt="OYO" className="h-5 sm:h-7 w-auto transition-transform hover:scale-110" />
              <img src="/partners/sleepyowl.webp" alt="Sleepy Owl" className="h-5 sm:h-7 w-auto transition-transform hover:scale-110" />
              <img src="/partners/google.webp" alt="Google" className="h-5 sm:h-7 w-auto transition-transform hover:scale-110" />
            </div>

            <div className="flex items-center gap-3 px-5 py-2 rounded-full bg-white/[0.03] border border-white/10 shadow-2xl backdrop-blur-md group hover:bg-white/[0.07] transition-all cursor-default text-[#1a2957]">
              <div className="relative flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-green-400" />
                <div className="absolute inset-0 bg-green-400/30 blur-md rounded-full animate-pulse" />
              </div>
              <span className="text-white/80 font-bold text-[10px] sm:text-xs tracking-widest uppercase flex items-center gap-2">
                Guaranteed SEO Rankings
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Gradient Overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
    </section>
  );
};

export default HeroSection;