import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Search, CheckCircle, Clock, Award, Briefcase, ArrowRight, MessageCircle } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';

const HiringSolutionsPage = () => {

  useEffect(() => {
    if (location.hash === '#hire-top-talent') {
      const scrollToForm = () => {
        const element = document.getElementById('hire-top-talent');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
      // Delay scrolling to ensure animations are complete
      const timer = setTimeout(scrollToForm, 500); // Adjust delay as needed
      return () => clearTimeout(timer); // Cleanup
    }
  }, [location]);

  const navigate = useNavigate();
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
       <title>Hiring Top Talent in India | Sownmark Solutions</title>
        <meta
          name="description"
          content="Build your dream team with Sownmark. We connect businesses with top-tier tech and digital talent across India."
        />
        <meta
          name="keywords"
          content="hiring solutions for companies, recruitment services India, job placement agency, best hiring agency, talent acquisition"
        />
          <link rel="canonical" href="https://sownmark.com/hiring-solutions" />
        <meta property="og:title" content="Hire Top Talent in India | Sownmark Solutions" />
        <meta property="og:url" content="https://sownmark.com/hiring-solutions" />
        <meta property="og:type" content="website" />
      </Helmet>


      {/* Hero Section - Vibrant Theme */}
      <section
        className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #2a4365 0%, #4c7bb8 100%)' }}
      >
        <div className="absolute inset-0 opacity-15">
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: '#1a2957',
            }}
          ></div>
        </div>


        <div className="container relative z-10 text-center text-white px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full mb-6 mt-20 border border-white/30"
            >
              <Award className="w-4 h-4 text-yellow-300 fill-current" />
              <span className="text-sm font-medium">Trusted Recruitment Partner</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Build Your Dream Team
              <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                with Sownmark
              </span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Connect with top-tier digital and tech talent through our expert recruitment services, tailored to your business needs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact#contact-form')}
                className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold text-base hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 min-w-[200px] justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact#contact-form')}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-base hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center gap-2 min-w-[200px] justify-center"
              >
                <MessageCircle className="w-5 h-5" />
                Schedule Consultation
              </motion.button>
            </div>


          </motion.div>
        </div>
      </section>

      {/* Our Approach Section - Light Theme */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4 sm:px-6 md:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Seamless Recruitment
              <span
                className="block text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #2a4365, #a3bff5)' }}
              >
                Solutions
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Our meticulous process ensures you find candidates who excel in skills and align with your company culture.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: <Search className="w-8 h-8" />,
                title: 'Expert Talent Sourcing',
                description: 'Access our vast network of pre-vetted, high-caliber candidates across digital and tech domains.',
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: 'Rigorous Screening',
                description: 'Multi-step evaluation ensures only the best candidates reach your hiring pipeline.',
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: 'Time Efficiency',
                description: 'Streamlined process reduces your time-to-hire without compromising quality.',
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp} className="group relative">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-blue-200 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                      style={{ background: 'linear-gradient(135deg, #2a4365, #a3bff5)' }}
                    >
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Domains Section - Dark Theme */}
      <section id='hire-top-talent' className="py-16 sm:py-20" style={{ background: 'linear-gradient(135deg, #2a4365 0%, #4c7bb8 100%)' }}>
        <div className="container px-4 sm:px-6 md:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Specialized Talent Across
              <span className="block bg-gradient-to-r from-blue-100 to-white bg-clip-text text-transparent">
                Key Domains
              </span>
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Build high-performing teams with our expertise in digital marketing and tech recruitment.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              {
                icon: <Award className="w-10 h-10 text-white" />,
                title: 'Digital Marketing',
                roles: [
                  'SEO Specialists',
                  'SEM Managers',
                  'Social Media Managers',
                  'Content Writers',
                  'Digital Strategists',
                  'Performance Marketers',
                ],
                image: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                icon: <Briefcase className="w-10 h-10 text-white" />,
                title: 'IT & Tech',
                roles: [
                  'Web Developers',
                  'Mobile App Developers',
                  'UI/UX Designers',
                  'QA Engineers',
                  'Data Analysts',
                  'Project Managers',
                ],
                image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
            ].map((domain, index) => (
              <motion.div key={index} variants={fadeInUp} className="group relative">
                <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-2 h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={domain.image}
                      alt={domain.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="mr-3" style={{ background: 'linear-gradient(135deg, #2a4365, #a3bff5)' }}>
                        {domain.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{domain.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {domain.roles.map((role, roleIndex) => (
                        <li key={roleIndex} className="flex items-center gap-2 text-gray-700 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {role}
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

      {/* Process Section - Light Theme */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container px-4 sm:px-6 md:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Proven
              <span
                className="block text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #2a4365, #a3bff5)' }}
              >
                Hiring Process
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A systematic approach to deliver the perfect candidates for your team.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                step: '01',
                title: 'Understand Your Needs',
                description: 'We dive deep into your requirements, culture, and role-specific skills.',
              },
              {
                step: '02',
                title: 'Talent Sourcing',
                description: 'We tap into our network to identify and screen top candidates.',
              },
              {
                step: '03',
                title: 'Candidate Presentation',
                description: 'You receive a curated shortlist of highly qualified candidates.',
              },
              {
                step: '04',
                title: 'Interview Support',
                description: 'We coordinate interviews and support your selection process.',
              },
            ].map((step, index) => (
              <motion.div key={index} variants={fadeInUp} className="relative group">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-blue-200 h-full">
                  <span className="absolute top-4 right-4 text-4xl font-bold text-blue-100 opacity-50">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section - Dark Theme */}
      <section className="py-16 sm:py-20" style={{ background: 'linear-gradient(135deg, #2a4365 0%, #4c7bb8 100%)' }}>
        <div className="container px-4 sm:px-6 md:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Partner with
              <span className="block bg-gradient-to-r from-blue-100 to-white bg-clip-text text-transparent">
                Sownmark?
              </span>
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Experience recruitment tailored to your industry with unmatched expertise and dedication.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                title: 'Industry Expertise',
                description: 'Deep knowledge of digital and tech roles ensures precise candidate matching.',
              },
              {
                title: 'Quality Focus',
                description: 'Rigorous screening delivers only top-tier candidates to your shortlist.',
              },
              {
                title: 'Long-term Partnership',
                description: 'We build lasting relationships to support your ongoing growth.',
              },
            ].map((benefit, index) => (
              <motion.div key={index} variants={fadeInUp} className="group relative">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Vibrant Theme */}
      <section
        className="py-16 sm:py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #2a4365 0%, #4c7bb8 100%)' }}
      >
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 30% 70%, #a3bff5 0%, transparent 50%), 
                               radial-gradient(circle at 70% 30%, #a3bff5 0%, transparent 50%)`,
            }}
          ></div>
        </div>

        <div className="container relative z-10 px-4 sm:px-6 md:px-8">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Build
              <span className="block bg-gradient-to-r from-blue-100 to-white bg-clip-text text-transparent">
                Your Dream Team?
              </span>
            </h2>

            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Partner with Sownmark to find top talent and drive your business forward. Schedule a consultation today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Link
                to="/contact#contact-form"
                className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-base hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 min-w-[220px] justify-center shadow-2xl"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                to="/contact#contact-form"

                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center gap-2 min-w-[220px] justify-center"
              >
                Learn More
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-blue-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span className="text-sm">Transparent Process</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span className="text-sm">Dedicated Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span className="text-sm">Guaranteed Fit</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HiringSolutionsPage;