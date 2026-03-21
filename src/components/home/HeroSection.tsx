import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Sparkles, TrendingUp, Zap, ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const isMobile = React.useRef(
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  ).current;

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0a0f1e] pt-32 pb-20 lg:pt-28 lg:pb-20">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-20 top-0 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute -right-20 bottom-0 h-[700px] w-[700px] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-600/5 blur-[100px]" />
      </div>

      {/* Modern Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-8">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-10 text-center lg:text-left"
          >
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
            >
              <div className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-100">Your Growth Partner</span>
            </motion.div>

            {/* Premium Headline */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl font-black leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl"
              >
                We Build, Market, <br />

                and Scale

                <br /> Your Business.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="max-w-xl mx-auto lg:mx-0 text-lg font-medium leading-relaxed text-white/60 md:text-xl"
              >
                From high-converting websites to viral influencer campaigns, we provide the technical and creative fuel your brand needs to dominate.
              </motion.p>
            </div>

            {/* Desktop Stats (Responsive) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-6 pt-4 border-t border-white/5 max-w-lg mx-auto lg:mx-0"
            >
              <div className="space-y-1 text-center lg:text-left">
                <div className="text-2xl font-black text-white md:text-3xl">150+</div>
                <div className="text-[10px] uppercase tracking-wider font-bold text-white/40">Projects Delivered</div>
              </div>
              <div className="space-y-1 text-center lg:text-left border-x border-white/5">
                <div className="text-2xl font-black text-white md:text-3xl">98%</div>
                <div className="text-[10px] uppercase tracking-wider font-bold text-white/40">Client Satisfaction</div>
              </div>
              <div className="space-y-1 text-center lg:text-left">
                <div className="text-2xl font-black text-white md:text-3xl">5X</div>
                <div className="text-[10px] uppercase tracking-wider font-bold text-white/40">Avg ROI Growth</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col items-center justify-center gap-5 pt-8 sm:flex-row lg:justify-start"
            >
              <Link
                to="/contact#contact-form"
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-base font-bold text-white transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] sm:w-auto"
              >
                <span>Get a Free Strategy Audit</span>
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/hiring-solutions"
                className="group flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20 sm:w-auto"
              >
                <Users className="h-5 w-5 text-cyan-400" />
                <span>Hire Top Talent</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Visual - Custom Image Implementation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative group">
              {/* Main Visual Container */}
              <div className="relative z-10 overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-4 backdrop-blur-sm">
                <img
                  src="/hero.webp"
                  alt="Sownmark Growth Visualization"
                  width={1200}
                  height={800}
                  fetchPriority="high"
                  loading="eager"
                  className="w-full h-auto rounded-[2rem] shadow-2xl transition-transform duration-700 group-hover:scale-105"
                />


              </div>

              {/* Back Glow */}
              <div className="absolute -inset-4 z-0 rounded-full bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl opacity-50 transition-opacity duration-500 group-hover:opacity-80" />
            </div>

            {/* Orbiting Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset -10 pointer-events-none"
            >
              <div className="absolute left-[10%] top-[10%] h-3 w-3 rounded-full bg-blue-500/40 blur-sm" />
              <div className="absolute right-[15%] bottom-[15%] h-4 w-4 rounded-full bg-purple-500/40 blur-sm" />
              <div className="absolute right-[5%] top-[40%] h-2 w-2 rounded-full bg-cyan-500/40 blur-sm" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Modern Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-[#0a0f1e] to-transparent pointer-events-none z-20" />
    </section>
  );
};

export default HeroSection;