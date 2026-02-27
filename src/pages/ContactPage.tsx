import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Clock, Star, CheckCircle, ChevronDown } from 'lucide-react';
import { Helmet } from 'react-helmet';
import ContactForm from '../components/ui/ContactForm';
import { useLocation } from 'react-router-dom';

const ContactPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const location = useLocation();

  const faqs = [
    {
      question: "What services does Sownmark Digital offer?",
      answer: "We offer SEO, PPC (Google & Meta Ads), website development, influencer marketing, and hiring solutions for businesses.",
    },
    {
      question: "How long does it take to build a website?",
      answer: "A standard business website usually takes 2–4 weeks, while complex e-commerce platforms may take 6–8 weeks.",
    },
    {
      question: "Do you offer localized SEO services?",
      answer: "Yes, we specialize in Local SEO to help businesses rank in specific geographic areas like India, USA, and Australia.",
    },
    {
      question: "How do I get a quote for my project?",
      answer: "You can fill out the contact form above or email us at hello@sownmark.com, and we’ll get back to you with a custom proposal.",
    },
  ];

  // Split FAQs into two groups
  const midPoint = Math.ceil(faqs.length / 2);
  const leftFaqs = faqs.slice(0, midPoint);
  const rightFaqs = faqs.slice(midPoint);

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

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (location.hash === '#contact-form') {
      const scrollToForm = () => {
        const element = document.getElementById('contact-form');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
      const timer = setTimeout(scrollToForm, 500);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Contact Us – Sownmark Digital Development Team</title>
        <meta
          name="description"
          content="Have a project in mind? Contact Sownmark Digital for SEO, website development, and influencer marketing services. Let's grow your brand together."
        />
        <meta
          name="keywords"
          content="contact digital marketing agency, Sownmark contact number, digital marketing services inquiry, website development company contact"
        />
        <link rel="canonical" href="https://sownmark.com/contact" />
        <meta property="og:type" content="website" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact Sownmark",
              "description": "Get in touch with Sownmark for digital marketing, web development, and hiring solutions.",
              "url": "https://sownmark.com/contact",
              "mainEntity": {
                "@type": "Organization",
                "name": "Sownmark",
                "email": "hello@sownmark.com"
              }
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": ${JSON.stringify(faqs.map(f => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": f.answer
            }
          })))}
            }
          `}
        </script>
      </Helmet>

      {/* Hero Section - Dark Theme */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
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
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full mb-6 border border-white/20"
            >
              <Star className="w-3 h-3 text-yellow-400 fill-current" />
              <span className="text-xs font-medium">We're Here to Help</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Get in Touch
              <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                with Sownmark
              </span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Reach out to our team for personalized support, questions, or to explore how Sownmark can
              help you achieve your digital marketing goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information and Form Section - Light Theme */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4 sm:px-6 md:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Connect with
              <span
                className="block text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #1a2957, #90abff)' }}
              >
                Our Team
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Whether you have questions about our services or need help with your digital strategy, our
              team is ready to assist you every step of the way.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <motion.div id="contact-form" {...fadeInUp}>
                <ContactForm />
              </motion.div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-5">
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-lg p-8 h-full border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">Reach Us Directly</h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: <Mail className="w-6 h-6 text-white" />,
                      title: 'Email',
                      content: (
                        <a
                          href="mailto:hello@sownmark.com"
                          className="text-primary-600 hover:text-primary-700 hover:underline transition-colors"
                        >
                          hello@sownmark.com
                        </a>
                      ),
                    },
                  ].map((item, index) => (
                    <motion.div key={index} variants={fadeInUp} className="flex items-start">
                      <div
                        className="mt-1 mr-4 flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center"
                        style={{ background: 'linear-gradient(135deg, #1a2957, #90abff)' }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1 text-gray-900">{item.title}</h4>
                        {item.content}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section - Dark Theme */}
      <section
        className="py-16 sm:py-20"
        style={{ background: 'linear-gradient(135deg, #1a2957 0%, #2d4a8f 100%)' }}
      >
        <div className="container px-4 sm:px-6 md:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Frequently Asked
              <span
                className="block text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #ffffff, #90abff)' }}
              >
                Questions
              </span>
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Find answers to common questions about our services and more.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
          >
            {/* Left Column FAQs */}
            <div>
              {leftFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl mb-4 border border-white/20 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none transition-colors duration-200 hover:bg-white/20"
                  >
                    <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                    <ChevronDown
                      className={`w-5 h-5 text-blue-200 transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-4"
                      >
                        <p className="text-blue-100">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Right Column FAQs */}
            <div>
              {rightFaqs.map((faq, index) => (
                <motion.div
                  key={index + midPoint}
                  variants={fadeInUp}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl mb-4 border border-white/20 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index + midPoint)}
                    className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none transition-colors duration-200 hover:bg-white/20"
                  >
                    <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                    <ChevronDown
                      className={`w-5 h-5 text-blue-200 transform transition-transform duration-200 ${openIndex === index + midPoint ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence>
                    {openIndex === index + midPoint && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-4"
                      >
                        <p className="text-blue-100">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Light Theme */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container relative z-10 px-4 sm:px-6 md:px-8">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Ready to Start
              <span
                className="block text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #1a2957, #90abff)' }}
              >
                Your Journey?
              </span>
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Contact us today to learn how Sownmark can help you achieve your digital marketing goals
              with our expert-led services and personalized support.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#1a2957] to-[#90abff] text-white px-8 py-4 rounded-full font-bold text-base hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 min-w-[220px] justify-center shadow-2xl"
              >
                Send a Message
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-[#1a2957] text-[#1a2957] px-8 py-4 rounded-full font-bold text-base hover:bg-[#1a2957] hover:text-white transition-all duration-300 flex items-center gap-2 min-w-[220px] justify-center"
              >
                Get Free Consultation
              </motion.button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span className="text-sm">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span className="text-sm">Fast Response</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span className="text-sm">Personalized Assistance</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;