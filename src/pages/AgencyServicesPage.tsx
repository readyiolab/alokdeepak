import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, LineChart, MessageCircle, Mail, BarChart, Shield, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet';

const AgencyServicesPage: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    viewport: { once: true },
  };

  const services = [
    {
      id: 'seo',
      icon: <Search className="w-10 h-10 text-white" />,
      title: 'Search Engine Optimization (SEO)',
      description: 'Boost organic rankings and drive qualified traffic with our comprehensive SEO expertise and proven methodologies.',
      benefits: ['Technical SEO Audit', 'Content Strategy', 'Link Building', 'Local SEO Optimization'],
    },
    {
      id: 'ppc',
      icon: <LineChart className="w-10 h-10 text-white" />,
      title: 'Pay-Per-Click (PPC) Advertising',
      description: 'Maximize your ad spend ROI with targeted campaigns across Google, Bing, and social media platforms.',
      benefits: ['Campaign Strategy', 'Creative Ad Design', 'Bid Management', 'Performance Analytics'],
    },
    {
      id: 'social',
      icon: <MessageCircle className="w-10 h-10 text-white" />,
      title: 'Social Media Marketing',
      description: 'Build meaningful connections and drive conversions across all major social media channels.',
      benefits: ['Content Creation', 'Community Management', 'Social Media Ads', 'Influencer Partnerships'],
    },
    {
      id: 'email',
      icon: <Mail className="w-10 h-10 text-white" />,
      title: 'Email Marketing',
      description: 'Nurture leads and build customer loyalty with personalized, high-converting email campaigns.',
      benefits: ['Campaign Strategy', 'Email Design', 'Marketing Automation', 'List Segmentation'],
    },
    {
      id: 'analytics',
      icon: <BarChart className="w-10 h-10 text-white" />,
      title: 'Analytics & Reporting',
      description: 'Gain actionable insights to continuously optimize your website and campaign performance.',
      benefits: ['Data Analysis', 'Custom Dashboards', 'KPI Tracking', 'Strategic Recommendations'],
    },
    {
      id: 'reputation',
      icon: <Shield className="w-10 h-10 text-white" />,
      title: 'Online Reputation Management',
      description: 'Protect and enhance your brand’s digital reputation across all online channels and platforms.',
      benefits: ['Review Management', 'Brand Monitoring', 'Crisis Management', 'Reputation Building'],
    },
  ];

  const processSteps = [
    {
      id: 'discovery',
      step: '01',
      title: 'Discovery & Strategy',
      description: 'We conduct comprehensive analysis of your goals, audience, and competitive landscape to craft a winning strategy.',
    },
    {
      id: 'execution',
      step: '02',
      title: 'Campaign Execution',
      description: 'Precise implementation across all chosen digital channels with meticulous attention to detail and best practices.',
    },
    {
      id: 'optimization',
      step: '03',
      title: 'Monitoring & Optimization',
      description: 'Continuous performance tracking and data-driven optimization to maximize ROI and campaign effectiveness.',
    },
    {
      id: 'reporting',
      step: '04',
      title: 'Reporting & Collaboration',
      description: 'Transparent, detailed reporting and regular collaboration sessions to keep you informed and aligned.',
    },
  ];

  const results = [
    {
      id: 'roi',
      metric: '250%',
      title: 'Average ROI',
      description: 'Return on ad spend achieved across all PPC campaigns and digital marketing initiatives.',
    },
    {
      id: 'traffic',
      metric: '180%',
      title: 'Traffic Growth',
      description: 'Average organic traffic increase delivered through our comprehensive SEO strategies.',
    },
    {
      id: 'engagement',
      metric: '12x',
      title: 'Social Engagement',
      description: 'Multiplication of social media engagement rates across all managed platforms.',
    },
  ];

  return (
    <>
      <Helmet>
    <title>Sownmark: Digital Marketing Agency</title>
    <meta name="description" content="Grow your business with Sownmark, a full-service digital marketing agency offering SEO, PPC, branding, and social media management" />
    <meta name="keywords" content="digital marketing agency USA, SEO services for business, PPC management agency, content marketing agency, branding and marketing agency" />
  </Helmet>

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a2957 0%, #2563eb 50%, #3b82f6 100%)' }}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_#60a5fa_0%,_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_#93c5fd_0%,_transparent_50%)]" />
        </div>

        <div className="container relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-3 rounded-full mb-8 mt-20 border border-white/20 shadow-lg"
            >
              <Shield className="w-5 h-5 text-yellow-300 fill-current" />
              <span className="text-sm font-medium tracking-wide">Trusted Digital Partner</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              Elevate Your Brand with
              <span className="block bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent mt-2">
                Sownmark
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Drive visibility, engagement, and conversions with our tailored digital marketing solutions designed for modern businesses.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex group"
            >
              <Link
                to="/contact#contact-form"
                className="bg-white text-gray-900 px-8 py-4 sm:px-10 sm:py-5 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-100 hover:shadow-2xl transition-all duration-300 flex items-center gap-3 min-w-[220px] justify-center shadow-xl"
                aria-label="Get Started with Sownmark"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 translate-x-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Strategic Digital
              <span
                className="block text-transparent bg-clip-text mt-2"
                style={{ backgroundImage: 'linear-gradient(135deg, #1a2957, #3b82f6, #60a5fa)' }}
              >
                Solutions
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              At Sownmark, we craft data-driven strategies that deliver measurable results, elevating your brand’s online presence across all digital touchpoints.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-neutral-50 to-gray-100/50">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Comprehensive Digital
              <span
                className="block text-transparent bg-clip-text mt-2"
                style={{ backgroundImage: 'linear-gradient(135deg, #1a2957, #3b82f6, #60a5fa)' }}
              >
                Marketing Services
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              End-to-end solutions designed to help your business thrive in today’s competitive digital landscape.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {services.map((service) => (
              <motion.div key={service.id} variants={fadeInUp} className="group relative h-full">
                <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-blue-200 h-full flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 flex-1 flex flex-col">
                    <div
                      className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                      style={{ background: 'linear-gradient(135deg, #1a2957, #3b82f6, #60a5fa)' }}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 leading-tight">{service.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed flex-1">{service.description}</p>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={`${service.id}-benefit-${benefitIndex}`} className="flex items-center gap-3 text-gray-700 text-sm sm:text-base">
                          <div className="w-2.5 h-2.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 lg:py-24" style={{ background: 'linear-gradient(135deg, #1a2957 0%, #2563eb 100%)' }}>
        <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Our Proven
              <span className="block bg-gradient-to-r from-blue-100 via-white to-blue-200 bg-clip-text text-transparent mt-2">
                Marketing Process
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              A systematic, data-driven approach designed to deliver measurable results that accelerate your business growth.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {processSteps.map((step) => (
              <motion.div key={step.id} variants={fadeInUp} className="relative group h-full">
                <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-white/10">
                  <span className="absolute top-4 right-4 text-2xl sm:text-3xl font-bold text-blue-100/60 group-hover:text-blue-200 transition-colors">
                    {step.step}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 leading-tight pr-12">{step.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50/30">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Real Results for
              <span
                className="block text-transparent bg-clip-text mt-2"
                style={{ backgroundImage: 'linear-gradient(135deg, #1a2957, #3b82f6, #60a5fa)' }}
              >
                Real Businesses
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Proven outcomes and measurable success from our comprehensive digital marketing strategies.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {results.map((result) => (
              <motion.div key={result.id} variants={fadeInUp} className="group relative">
                <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-blue-200 text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div
                      className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent"
                      style={{ backgroundImage: 'linear-gradient(135deg, #1a2957, #3b82f6)' }}
                    >
                      {result.metric}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">{result.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{result.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 sm:py-20 lg:py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a2957 0%, #2563eb 50%, #3b82f6 100%)' }}
      >
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_#60a5fa_0%,_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_#93c5fd_0%,_transparent_50%)]" />
        </div>

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              Ready to Transform Your
              <span className="block bg-gradient-to-r from-blue-100 via-white to-blue-200 bg-clip-text text-transparent mt-2">
                Digital Presence?
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
              Partner with Sownmark to achieve your marketing goals and drive sustainable growth. Schedule your free consultation today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group">
                <Link
                  to="/contact#contact-form"
                  className="bg-white text-gray-900 px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 min-w-[250px] justify-center shadow-2xl w-full sm:w-auto"
                  aria-label="Schedule a Free Consultation with Sownmark"
                >
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 translate-x-0 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group">
                <Link
                  to="/about"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 min-w-[250px] flex items-center justify-center w-full sm:w-auto"
                  aria-label="Learn More About Sownmark"
                >
                  Learn More About Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AgencyServicesPage;