
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Search, CheckCircle, Clock, Award, Briefcase, ArrowRight, MessageCircle, LocateIcon, MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import axios from 'axios';

const HiringSolutionsPage = () => {
  const isMobile = React.useRef(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)).current;
  const [showJobs, setShowJobs] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to section if hash is present
  useEffect(() => {
    if (location.hash === '#hire-top-talent') {
      const element = document.getElementById('hire-top-talent');
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 500);
      }
    }
  }, [location]);

  // Fetch jobs when job list is toggled
  useEffect(() => {
    if (showJobs) {
      const getJobs = async () => {
        setLoading(true);
        try {
          const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/jobs/`, {
            params: { page: 1, limit: 10 },
          });
          setJobs(response.data.jobs);
          setLoading(false);
        } catch (err: any) {
          setError(err.response?.data?.error || 'Failed to load jobs. Please try again.');
          setLoading(false);
        }
      };
      getJobs();
    }
  }, [showJobs]);

  const fadeInUp = {
    initial: isMobile ? { opacity: 0 } : { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: isMobile ? 0.1 : 0.2 },
    transition: { duration: isMobile ? 0.4 : 0.6 },
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
  };

  const handleApplyClick = () => {
    setShowJobs(!showJobs);
  };

  const handleJobClick = (jobId: string | number) => {
    navigate(`/jobs/${jobId}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Hiring Solutions in India – Find the Best Digital Talent</title>
        <meta
          name="description"
          content="Offering professional hiring solutions in India for digital marketing, IT, BPO, and Sales roles. Get high-quality talent for your business."
        />
        <meta
          name="keywords"
          content="hiring solutions India, recruitment services for businesses, digital marketing talent, IT recruitment agency, staff augmentation services"
        />
        <link rel="canonical" href="https://www.sownmark.com/hiring-solutions" />
        <meta property="og:type" content="website" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Recruitment and Hiring",
              "provider": {
                "@type": "Organization",
                "name": "Sownmark",
                "url": "https://sownmark.com"
              },
              "areaServed": "India",
              "description": "Expert recruitment services connecting businesses with top-tier tech and digital talent across India.",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Hiring Solutions",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "BPO Hiring"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "IT & Tech Recruitment"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Sales & Marketing Hiring"
                    }
                  }
                ]
              }
            }
          `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #2a4365 0%, #4c7bb8 100%)' }}
      >
        <div className="absolute inset-0 opacity-15 bg-[#1a2957]"></div>
        <div className="container relative z-10 text-center text-white px-4 sm:px-6 md:px-8">
          <motion.div
            initial={isMobile ? { opacity: 0 } : { opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.5 : 0.8 }}
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
              Connect with top-tier digital and tech talent through our expert recruitment services.
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

      {/* Our Approach Section */}
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
              Our process ensures candidates excel in skills and align with your culture.
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
                icon: '/gifs/expert talent c-min.gif',
                title: 'Expert Talent Sourcing',
                description: 'Access our network of pre-vetted, high-caliber candidates.',
              },
              {
                icon: '/gifs/Rigorous Screening-min.gif',
                title: 'Rigorous Screening',
                description: 'Multi-step evaluation ensures top candidates.',
              },
              {
                icon: '/gifs/Time Efficiency-min.gif',
                title: 'Time Efficiency',
                description: 'Streamlined process reduces time-to-hire.',
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp} className="group relative">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-blue-200 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 overflow-hidden"
                      style={{ background: 'linear-gradient(135deg, #2a4365, #a3bff5)' }}
                    >
                      <img src={feature.icon} alt={feature.title} className="w-12 h-12 rounded-md" loading="lazy" />
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

      <section id="hire-top-talent" className="py-16 sm:py-20" style={{ background: 'linear-gradient(135deg, #2a4365 0%, #4c7bb8 100%)' }}>
        <div className="container px-4 sm:px-6 md:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Specialized Talent Across
              <span className="block bg-gradient-to-r from-blue-100 to-white bg-clip-text text-transparent">
                Key Domains
              </span>
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Build high-performing teams with our expertise in BPO, sales, digital marketing, and tech.
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
                title: 'BPO Hiring',
                roles: ['Voice Process', 'Non-Voice Process', 'Healthcare BPO', 'Tech Support'],
                image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                icon: <Briefcase className="w-10 h-10 text-white" />,
                title: 'Sales Hiring',
                roles: ['Field Sales', 'Inside Sales', 'Telesales', 'Retail Sales'],
                image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                icon: <Award className="w-10 h-10 text-white" />,
                title: 'Digital Marketing',
                roles: ['SEO Specialists', 'SEM Managers', 'Social Media Managers', 'Content Writers', 'Digital Strategists', 'Performance Marketers'],
                image: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                icon: <Briefcase className="w-10 h-10 text-white" />,
                title: 'IT & Tech',
                roles: ['Web Developers', 'Mobile App Developers', 'UI/UX Designers', 'QA Engineers', 'Data Analysts', 'Project Managers'],
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
                      <div className="mr-3 p-2 rounded-full" style={{ background: 'linear-gradient(135deg, #2a4365, #a3bff5)' }}>
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

          {/* Apply Button and Job List */}
          <div className="flex justify-center items-center mt-20">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleApplyClick}
              className="px-9 py-3 bg-white text-gray-900 rounded-full font-semibold text-base hover:bg-gray-100 transition-all duration-300"
            >
              {showJobs ? 'Hide Jobs' : 'Apply For a Job'}
            </motion.button>
          </div>

          {showJobs && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.5 }}
              className="mt-8"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Available Job Openings</h3>
                {loading && <p className="text-gray-600 text-center">Loading jobs...</p>}
                {error && <p className="text-red-500 text-center">{error}</p>}
                {!loading && !error && jobs.length === 0 && (
                  <p className="text-gray-600 text-center">No jobs available at the moment.</p>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {jobs.map((job) => (
                    <motion.div
                      key={job.id}
                      variants={fadeInUp}
                      className="group relative cursor-pointer"
                      onClick={() => handleJobClick(job.id)}
                    >
                      <div className="bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-blue-200 h-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10 space-y-4">
                          <h4 className="text-lg font-bold text-gray-900 mb-2">{job.title}</h4>
                          <p className="text-gray-600 text-sm mb-2 flex gap-2"><MapPin /> {job.location}</p>
                          <button
                            type="button"
                            className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#1a2957] py-3 rounded-lg transition duration-200"
                          >
                            <span>Apply</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container px-4 sm:px-6 md:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Proven
              <span
                className="block text-transparent bg-clip-text pb-3"
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
                description: 'We dive deep into your requirements and culture.',
              },
              {
                step: '02',
                title: 'Talent Sourcing',
                description: 'We identify and screen top candidates.',
              },
              {
                step: '03',
                title: 'Candidate Presentation',
                description: 'You receive a curated shortlist of candidates.',
              },
              {
                step: '04',
                title: 'Interview Support',
                description: 'We coordinate interviews and support selection.',
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

      {/* Why Choose Us Section */}
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
              Tailored recruitment with unmatched expertise and dedication.
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
                description: 'Deep knowledge ensures precise candidate matching.',
              },
              {
                title: 'Quality Focus',
                description: 'Rigorous screening delivers top-tier candidates.',
              },
              {
                title: 'Long-term Partnership',
                description: 'We support your ongoing growth.',
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

      {/* CTA Section */}
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
              Partner with Sownmark to find top talent and drive your business forward.
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