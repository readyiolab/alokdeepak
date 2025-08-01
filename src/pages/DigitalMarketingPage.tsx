import { motion } from 'framer-motion';
import { Book, Users, Award, BarChart, Star, CheckCircle, ArrowRight, Play, Globe, Target, Search, Layout, Code } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ProjectsSection from './ProjectsSection';
import DigitalMarketingToolsSection from './DigitalMarketingToolsSection';
import axios from 'axios';
import useScrollToHashTargets from '../customhooks/useScrollToHashTargets';


const DigitalMarketingPage = () => {


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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    referralCode: '',
  })
  const scrollToForm = () => {
    const element = document.getElementById('contact-form-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '#contact-form-section');
    }
  };
  useScrollToHashTargets(['courses', 'contact-form-section'], 500);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return; // Prevent duplicate submissions

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/marketing/apply`,
        formData,
        {
          timeout: 10000, // Set a reasonable timeout (10 seconds)
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      

      // Backend success message
      const message = response.data.message;
      const referralCode = response.data.referralCode;

      setSuccess(`${message} Your referral code is: ${referralCode}`);
      setFormData({ name: '', email: '', phone: '', referralCode: '' });
    } catch (err) {
      

      // Handle specific error cases
      let errorMessage = 'Failed to submit application. Please try again.';
      if (err.response) {
        // Backend returned an error response (e.g., 409 for duplicate email)
        errorMessage = err.response.data?.error || errorMessage;
      } else if (err.request) {
        // No response received (e.g., network error)
        errorMessage = 'Network error. Please check your connection and try again.';
      } else {
        // Other errors (e.g., request setup error)
        errorMessage = 'An unexpected error occurred. Please try again.';
      }
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Job Guaranteed Digital Marketing Course | Up to 9 LPA | Sownmark</title>
        <meta
          name="description"
          content="Sownmark offers a Job Guaranteed Digital Marketing Program with EMI options. Learn SEO, SEM, Performance Marketing & more. Partner with top companies like Google & Nykaa. Enroll now!"
        />
        <meta
          name="keywords"
          content="digital marketing course job guarantee, job guaranteed digital marketing program, digital marketing certification with placement, digital marketing career, online marketing jobs, digital marketing training, digital marketing EMI, digital marketing salary, Sownmark digital marketing"
        />
        <link rel="canonical" href="https://sownmark.com/digital-marketing-mastery" />
        <meta property="og:title" content="Job Guaranteed Digital Marketing Course | Up to 9 LPA | Sownmark" />
        <meta
          property="og:description"
          content="Sownmark offers a Job Guaranteed Digital Marketing Program with EMI options. Learn SEO, SEM, Performance Marketing & more. Partner with top companies like Google & Nykaa. Enroll now!"
        />
        <meta property="og:url" content="https://sownmark.com/digital-marketing-mastery" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "EducationalCourse",
              "name": "Job Guaranteed Digital Marketing Course",
              "description": "Sownmark's Job Guaranteed Digital Marketing Program with EMI options, covering SEO, SEM, Performance Marketing, and more.",
              "provider": {
                "@type": "Organization",
                "name": "Sownmark",
                "url": "https://sownmark.com"
              },
              "hasCredential": {
                "@type": "EducationalOccupationalCredential",
                "name": "Digital Marketing Certification with Job Guarantee"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "JobPosting",
              "title": "Digital Marketing Roles",
              "description": "Secure a position with top companies like Google, Nykaa, and more upon completing Sownmark's Job Guaranteed Digital Marketing Course, with potential salaries up to 9 LPA.",
              "hiringOrganization": {
                "@type": "Organization",
                "name": "Sownmark Placement Partners",
                "url": "https://sownmark.com"
              },
              "baseSalary": {
                "@type": "MonetaryAmount",
                "currency": "INR",
                "value": {
                  "@type": "QuantitativeValue",
                  "maxValue": 900000,
                  "unitText": "YEAR"
                }
              }
            }
          `}
        </script>
      </Helmet>

      {/* Hero Section - Dark Theme */}
      <section
        className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a2957 0%, #2d4a8f 100%)' }}
      >
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #90abff 0%, transparent 50%), 
                               radial-gradient(circle at 75% 75%, #90abff 0%, transparent 50%)`,
              backgroundSize: '100px 100px',
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
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full mb-6 mt-20 border border-white/20"
            >
              <Star className="w-3 h-3 text-yellow-400 fill-current" />
              <span className="text-xs font-medium">Job Guaranteed Digital Marketing Program</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Launch Your Digital Marketing Career
              <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                with Sownmark
              </span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Transform your career with our Job Guaranteed Program, offering comprehensive training and placement support with top companies like Google and Nykaa.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToForm}
                className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-base hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 min-w-[220px] justify-center shadow-2xl"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToForm}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center gap-2 min-w-[220px] justify-center"
              >
                Get Free Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Unlock Your Future Section - Light Theme */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4 sm:px-6 md:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Unlock Your Future in Digital Marketing
              <span
                className="block text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #1a2957, #90abff)' }}
              >
                with Sownmark
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Ready to build a thriving career in the dynamic world of digital marketing? Sownmark's comprehensive Digital Marketing Course now comes with a Job Guarantee, ensuring your investment translates into a successful career. We bridge the gap between learning and employment, providing you with the skills and the placement support you need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Job Guarantee Section - Dark Theme */}
      <section
        className="py-16 sm:py-20"
        style={{ background: 'linear-gradient(135deg, #1a2957 0%, #2d4a8f 100%)' }}
      >
        <div className="container px-4 sm:px-6 md:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Your Path to a Guaranteed
              <span className="block bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                Digital Marketing Job
              </span>
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Our program is designed to equip you with in-demand skills and secure your future with top-tier companies.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div variants={fadeInUp} className="group">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-blue-200 h-full">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Job Guarantee: Your Success, Our Commitment</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We are so confident in our curriculum and training that we offer a Job Guaranteed Program. Upon successful completion, secure a position with a leading company, with potential salaries up to 9 LPA. Your career growth is our priority.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="group">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-blue-200 h-full">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Flexible Learning, Accessible Investment</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Invest in your future without financial strain. Our Digital Marketing Course offers convenient EMI options, making quality education and a guaranteed job more affordable and accessible for everyone.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="group">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-blue-200 h-full">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Holistic Digital Marketing Curriculum</h3>
                <ul className="text-gray-600 text-sm leading-relaxed list-disc list-inside">
                  <li>SEO & SEM (Search Engine Optimization & Paid Ads)</li>
                  <li>Performance Marketing (Meta Ads, Google Ads)</li>
                  <li>Custom Website Development (WordPress, Shopify)</li>
                  <li>Data-Driven Strategy using GA4, GSC, Tag Manager</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Placement Partners Section - Light Theme */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Connect with Industry Leaders
              <span
                className="block text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #1a2957, #90abff)' }}
              >
                Our Placement Network
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Our commitment to your career extends through our strong network of placement partners, connecting you with top-tier companies across various industries.
            </p>
          </motion.div>

          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 20,
                  ease: 'linear',
                },
              }}
              style={{ display: 'inline-flex', whiteSpace: 'nowrap' }}
            >
              {[
                'adyogi.webp',
                'google.webp',
                'groupm.webp',
                'mensa.webp',
                'nykaa.webp',
                'oyo.webp',
                'publics.webp',
                'sleepyowl.webp',
              ].map((file, idx) => (
                <img
                  key={`first-${idx}`}
                  src={`/partners/${file}`}
                  alt={file.split('.')[0]}
                  className="h-16 w-auto mx-4 object-contain flex-shrink-0"
                />
              ))}
              {[
                'adyogi.webp',
                'google.webp',
                'groupm.webp',
                'mensa.webp',
                'nykaa.webp',
                'oyo.webp',
                'publics.webp',
                'sleepyowl.webp',
              ].map((file, idx) => (
                <img
                  key={`second-${idx}`}
                  src={`/partners/${file}`}
                  alt={file.split('.')[0]}
                  className="h-16 w-auto mx-4 object-contain flex-shrink-0"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria Section - Dark Theme */}
      <section
        className="py-16 sm:py-20"
        style={{ background: 'linear-gradient(135deg, #1a2957 0%, #2d4a8f 100%)' }}
      >
        <div className="container px-4 sm:px-6 md:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Who Can Join Our
              <span className="block bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                Digital Marketing Program?
              </span>
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Our program is designed for anyone passionate about building a career in digital marketing, regardless of background.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div variants={fadeInUp} className="group">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-blue-200 h-full">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Education</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We encourage students from all educational fields to apply. No prior marketing degree or specific academic background is required.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="group">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-blue-200 h-full">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Experience</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Both freshers eager to kickstart their careers and working professionals looking to upskill or transition into digital marketing are welcome.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="group">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-blue-200 h-full">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Intent</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A deep interest and genuine intent in building a successful and impactful marketing career is the most crucial criterion.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Admission Process Section - Light Theme */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4 sm:px-6 md:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Your Journey Starts Here
              <span
                className="block text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #1a2957, #90abff)' }}
              >
                Easy Admission Process
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Begin your transformative journey with Sownmark through our streamlined admission process.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {[
              {
                step: 'Apply on Website',
                description: 'Visit our course application page to submit your initial application.',
              },
              {
                step: 'Take the Screening Test',
                description: 'Complete a short online assessment to gauge your aptitude and interest in digital marketing.',
              },
              {
                step: 'Talk to a Counselor',
                description: 'Our counselors will discuss program details, answer questions, and understand your career aspirations.',
              },
              {
                step: 'Enroll & Start Your Journey',
                description: 'Complete enrollment formalities, including EMI setup if chosen, and begin your learning experience.',
              },
            ].map((step, index) => (
              <motion.div key={index} variants={fadeInUp} className="group">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-blue-200 h-full">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-400 flex items-center justify-center mb-4 text-white font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.step}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      <section
        className="py-16 sm:py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a2957 0%, #2d4a8f 100%)' }}
      >
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 80%, #90abff 0%, transparent 50%), 
                         radial-gradient(circle at 80% 20%, #90abff 0%, transparent 50%)`,
            }}
          ></div>
        </div>

        <div className="container relative z-10 px-4 sm:px-6 md:px-8">
          <motion.div {...fadeInUp} className="text-center lg:text-left mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Launch Your Career in Digital Marketing
              <span className="block bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                with Job Guarantee
              </span>
            </h2>
            <h3 className="text-xl sm:text-2xl font-medium text-blue-100 mb-4 text-center">
              #1 Digital Marketing Mastery Program with Real-World Projects & 100% Placement Support
            </h3>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side: Content */}
            <div>


              {/* Key Benefits */}
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="mb-12"
              >
                <ul className="text-blue-100 text-base space-y-3 max-w-2xl mx-auto lg:mx-0">
                  {[
                    '96% Placement Success | 500+ Students Trained',
                    'Guaranteed Job',
                    'Live Projects on Meta Ads, Google Ads, SEO and More',
                    'Master Skills with Real Campaigns, Real Results, Real Recruiters',
                    'Learn from Experts. Build Your Portfolio. Crack Top Interviews.',
                  ].map((benefit, index) => (
                    <motion.li
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 animate-float" />
                      <span>{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Companies Hiring */}
              <motion.div {...fadeInUp} className="text-center lg:text-left mb-12">
                <h3 className="text-lg font-semibold text-white mb-6">
                  Companies Hiring from Us
                </h3>
                <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                  {[
                    { name: 'Google', logo: '/partners/google.webp' },
                    { name: 'Nykaa', logo: '/partners/nykaa.webp' },
                    { name: 'Publicis', logo: '/partners/publics.webp' },
                    { name: 'AdYogi', logo: '/partners/adyogi.webp' },
                    { name: 'Mensa Brands', logo: '/partners/mensa.webp' },

                  ].map((company, index) => (
                    <motion.img
                      key={index}
                      src={company.logo}
                      alt={company.name}
                      className="h-12 w-auto object-contain"
                      variants={fadeInUp}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Confidence Boosters */}
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto lg:mx-0"
              >
                {[
                  { icon: Star, text: 'Rated 4.9/5 by 100+ students' },
                  { icon: Target, text: '100% practical training with daily tasks' },
                  { icon: Users, text: 'Mentorship from marketing industry leaders' },
                  { icon: Award, text: 'Resume building + Interview cracking masterclasses' },
                ].map((booster, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-md"
                  >
                    <booster.icon className="w-6 h-6 text-blue-600 flex-shrink-0 animate-float" />
                    <span className="text-sm text-gray-700">{booster.text}</span>
                  </motion.div>
                ))}
              </motion.div>


            </div>

            {/* Right Side: CTA Form */}
            <motion.div
              {...fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-lg max-w-lg mx-auto lg:mx-0"
              id='contact-form-section'
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Apply for the Digital Marketing Mastery Program
              </h3>
              {success && <p className="text-green-500 text-center mb-4">{success}</p>}
              {error && <p className="text-red-500 text-center mb-4">{error}</p>}
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name *"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="referralCode"
                    placeholder="Referral Code (Optional)"
                    value={formData.referralCode}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full bg-[#1a2957] text-white py-3 rounded-lg font-semibold hover:bg-[#1a2958] transition-all duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {loading ? 'Submitting...' : 'Apply Now'}
                </motion.button>
              </form>
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Doubt?{' '}
                  <a
                    href="https://wa.me/919792166702?text=Hi%20I%20would%20like%20to%20speak%20to%20a%20counsellor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Speak to Our Counsellor Now
                  </a>

                </p>
                <p className="text-sm text-gray-600">
                  <a href="mailto:hello@sownmark.com" className="text-blue-600 hover:underline">
                    hello@sownmark.com
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
          <motion.div {...fadeInUp} className="flex justify-center items-center mt-20">
            <p className="text-lg font-semibold text-white">
              Next Batch Starts Soon –{' '}
              <span
                className="inline-block ml-2 px-4 py-2 bg-white text-[#1a2957] rounded-full font-bold cursor-pointer hover:bg-gray-200 transition duration-300 shadow-md"
                onClick={() => navigate('/contact#contact-form')}
              >
                Apply Now!
              </span>
            </p>
          </motion.div>

        </div>
      </section>

      {/* Philosophy Section - Light Theme */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4 sm:px-6 md:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Learn from Industry
              <span
                className="block text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #1a2957, #90abff)' }}
              >
                Experts
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Our curriculum is crafted by seasoned professionals with years of real-world experience,
              ensuring you gain practical, actionable skills that drive results.
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
                icon: '/gifs/practical curiculm-min.gif',
                title: 'Practical Curriculum',
                description:
                  'Real-world scenarios and actionable strategies you can implement immediately in your campaigns.',
              },
              {
                icon: '/gifs/expert instru-min.gif',
                title: 'Expert Instructors',
                description: 'Learn from professionals with proven track records and years of industry success.',
              },
              {
                icon: '/gifs/Industry Certification-min.gif',
                title: 'Industry Certification',
                description: 'Earn recognized certifications that validate your expertise to potential employers.',
              },
              {
                icon: '/gifs/Career Advancement-min.gif',
                title: 'Career Advancement',
                description: 'Comprehensive career support to help you land your dream digital marketing role.',
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp} className="group relative">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-blue-200 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 overflow-hidden"
                      style={{ background: 'linear-gradient(135deg, #1a2957, #90abff)' }}
                    >
                      <img src={feature.icon} alt={feature.title} className="w-10 h-10 rounded-md" />
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

      {/* Courses Section - Dark Theme */}
      <section id="courses" className="py-16 sm:py-20" style={{ background: 'linear-gradient(135deg, #1a2957 0%, #2d4a8f 100%)' }}>
        <div className="container px-4 sm:px-6 md:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Choose Your Path to
              <span className="block pb-5 bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                Digital Mastery
              </span>
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Comprehensive courses designed to take you from beginner to expert, with hands-on projects
              and real-world applications.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          >
            {[
              {
                title: 'Certified Digital Marketing Professional',
                description:
                  'Master every aspect of digital marketing with our flagship comprehensive program covering SEO, SEM, Social Media, Content Marketing, Email Marketing, Analytics, and advanced strategies.',
                duration: '12 weeks',
                level: 'Beginner to Advanced',
                features: ['Live Sessions', '1-on-1 Mentoring', 'Job Placement Support', 'Lifetime Access'],
                popular: true,
                image:
                  'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Advanced SEO & Content Marketing',
                description:
                  'Deep dive into SEO strategies and content creation techniques that drive organic traffic, improve rankings, and build lasting audience engagement.',
                duration: '4 weeks',
                level: 'Intermediate',
                features: ['SEO Tools Access', 'Content Templates', 'Performance Tracking', 'Expert Reviews'],
                popular: false,
                image:
                  'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Social Media Marketing Specialist',
                description:
                  'Create and execute winning social media strategies across all major platforms with advanced analytics, automation, and community management.',
                duration: '4 weeks',
                level: 'All Levels',
                features: [
                  'Platform Certification',
                  'Campaign Templates',
                  'Analytics Dashboard',
                  'Community Access',
                ],
                popular: false,
                image:
                  'https://images.pexels.com/photos/533446/pexels-photo-533446.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
            ].map((course, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`relative group ${course.popular ? 'lg:scale-105' : ''}`}
              >
                {course.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-yellow-400 text-gray-900 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-2 h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-3 right-3">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-2 py-1 rounded-full text-xs font-semibold">
                        {course.level}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
                    <p className="text-gray-600 text-sm mb-5 leading-relaxed">{course.description}</p>

                    <div className="space-y-2 mb-5">
                      {course.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mb-5">
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        Duration: {course.duration}
                      </span>
                    </div>

                    <button
                      className="w-full py-3 rounded-xl font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      style={{
                        background: 'linear-gradient(135deg, #1a2957, #90abff)',
                        color: 'white',
                      }}
                      onClick={scrollToForm}
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Digital Marketing Tools & Projects Section - Light Theme */}
      <DigitalMarketingToolsSection />
      <ProjectsSection />

      {/* Testimonials Section - Light Theme */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container px-4 sm:px-6 md:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Success Stories from
              <span
                className="block text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #1a2957, #90abff)' }}
              >
                Our Learners
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Join thousands of professionals who have transformed their careers through our
              comprehensive digital marketing education.
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
                name: 'Ishika Patel',
                role: 'Digital Marketing Manager',
                company: 'Tech Innovators',
                image: './stud.webp',
                testimonial:
                  'The comprehensive curriculum and hands-on projects helped me secure my dream role as a Digital Marketing Manager. The practical approach made all the difference in my career transition.',
                rating: 5,
                achievement: '300% salary increase',
              },
              {
                name: 'Dhruv Mehta',
                role: 'SEO Specialist',
                company: 'Growth Digital',
                image: './stud2.webp',
                testimonial:
                  'The SEO module was incredibly detailed and practical. I now lead SEO strategy for multiple high-profile clients and have seen consistent 200%+ traffic growth.',
                rating: 5,
                achievement: 'Lead SEO Strategist in 6 months',
              },
              {
                name: 'Akash Verma',
                role: 'Social Media Strategist',
                company: 'Creative Agency',
                image: './stud3.webp',
                testimonial:
                  "Thanks to Sownmark's course, I've doubled my clients' social media engagement and grown their following significantly. The real-world projects were invaluable.",
                rating: 5,
                achievement: 'Started own agency',
              },
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp} className="group">
                <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-gray-100 group-hover:border-blue-200 h-full">
                  <div className="flex items-center mb-5">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover mr-3 ring-3 ring-blue-100"
                    />
                    <div>
                      <h4 className="text-base font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      <p className="text-xs text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-700 text-sm mb-4 leading-relaxed italic">"{testimonial.testimonial}"</p>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-3 py-2 rounded-xl">
                    <p className="text-xs font-semibold" style={{ color: '#1a2957' }}>
                      Achievement: {testimonial.achievement}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Dark Theme */}
      <section
        className="py-16 sm:py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a2957 0%, #2d4a8f 100%)' }}
      >
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 80%, #90abff 0%, transparent 50%), 
                               radial-gradient(circle at 80% 20%, #90abff 0%, transparent 50%)`,
            }}
          ></div>
        </div>

        <div className="container relative z-10 px-4 sm:px-6 md:px-8">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Transform
              <span className="block bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                Your Career?
              </span>
            </h2>

            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Join thousands of successful digital marketers who started their journey with Sownmark.
              Take the first step towards becoming an industry expert today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToForm}
                className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-base hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 min-w-[220px] justify-center shadow-2xl"
              >
                Apply Now & Secure Your Future
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToForm}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center gap-2 min-w-[220px] justify-center"
              >
                Get Free Consultation
              </motion.button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-blue-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span className="text-sm">No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span className="text-sm">30-Day Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span className="text-sm">Lifetime Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingPage;