import React from 'react';
import { Link } from 'react-router-dom';
import { Users, ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0a0f1e] pt-32 pb-20 lg:pt-28 lg:pb-20">
      {/* Premium Background Effects - simplified for perf */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-20 top-0 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute -right-20 bottom-0 h-[700px] w-[700px] rounded-full bg-purple-600/10 blur-[120px]" />
      </div>

      {/* Modern Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-8">
          {/* Left Content - CSS animations instead of framer-motion for FCP */}
          <div
            className="space-y-10 text-center lg:text-left animate-fade-slide-in"
          >
            {/* Animated Badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md animate-fade-up"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-100">Your Growth Partner</span>
            </div>

            {/* Premium Headline */}
            <div className="space-y-6">
              <h1
                className="text-5xl font-black leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl animate-fade-up"
                style={{ animationDelay: '0.2s' }}
              >
                We Build, Market, <br />
                and Scale
                <br />Your Business.
              </h1>

              <p
                className="max-w-xl mx-auto lg:mx-0 text-lg font-medium leading-relaxed text-white/60 md:text-xl animate-fade-up"
                style={{ animationDelay: '0.35s' }}
              >
                From high-converting websites to viral influencer campaigns, we provide the technical and creative fuel your brand needs to dominate.
              </p>
            </div>

            {/* Desktop Stats */}
            <div
              className="grid grid-cols-3 gap-6 pt-4 border-t border-white/5 max-w-lg mx-auto lg:mx-0 animate-fade-up"
              style={{ animationDelay: '0.45s' }}
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
            </div>

            {/* CTA Buttons - Enhanced for better click-through */}
            <div
              className="flex flex-col items-center justify-center gap-5 pt-8 sm:flex-row lg:justify-start animate-fade-up"
              style={{ animationDelay: '0.55s' }}
            >
              <Link
                to="/contact#contact-form"
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-base font-bold text-white transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] sm:w-auto"
                aria-label="Get a free digital strategy audit from Sownmark"
              >
                <span>Get a Free Strategy Audit</span>
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500"></span>
                </span>
              </Link>

              <Link
                to="/hiring-solutions"
                className="group flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20 sm:w-auto"
                aria-label="Hire top digital marketing and IT talent with Sownmark"
              >
                <Users className="h-5 w-5 text-cyan-400" />
                <span>Hire Top Talent</span>
              </Link>
            </div>

            {/* Trust badge for better click conversion */}
            <div className="flex items-center justify-center lg:justify-start gap-4 text-white/30 text-xs animate-fade-up" style={{ animationDelay: '0.65s' }}>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                No Contracts
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                Free Consultation
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                Results in 30 Days
              </span>
            </div>
          </div>

          {/* Right Visual */}
          <div
            className="relative hidden lg:block animate-fade-scale-in"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="relative group">
              {/* Main Visual Container */}
              <div className="relative z-10 overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-4 backdrop-blur-sm">
                <img
                  src="/hero.webp"
                  alt="Sownmark Digital Marketing and Website Development Services"
                  width={1200}
                  height={800}
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                  className="w-full h-auto rounded-[2rem] shadow-2xl transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Back Glow */}
              <div className="absolute -inset-4 z-0 rounded-full bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl opacity-50 transition-opacity duration-500 group-hover:opacity-80" />
            </div>
          </div>
        </div>
      </div>

      {/* Modern Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-[#0a0f1e] to-transparent pointer-events-none z-20" />
    </section>
  );
};

export default HeroSection;