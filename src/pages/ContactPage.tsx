import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Clock, MapPin, Star, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet';
import ContactForm from '../components/ui/ContactForm';
import { useLocation } from 'react-router-dom';

const ContactPage: React.FC = () => {
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


  useEffect(() => {
  if (location.hash === '#contact-form') {
    const scrollToForm = () => {
      const element = document.getElementById('contact-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
    // Delay scrolling to ensure animations are complete
    const timer = setTimeout(scrollToForm, 500); // Adjust delay as needed
    return () => clearTimeout(timer); // Cleanup
  }
}, [location]);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Sownmark: Contact Us</title>
        <meta name="description" content="Have questions or want to get started? Contact Sownmark today for expert support, inquiries, or project discussions. We’re here to help!" />
        <meta name="keywords" content="contact digital marketing agency, get in touch with us, digital marketing consultation, web design inquiries, marketing support contact" />
      </Helmet>
      {/* Hero Section - Dark Theme */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a2957 0%, #2d4a8f 100%)' }}
      >
        {/* Background Pattern */}
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
            <Helmet>
              <title>Contact Us | Sownmark</title>
              <meta
                name="description"
                content="Get in touch with Sownmark. We're here to answer your questions and help you achieve your digital goals."
              />
            </Helmet>

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
              Whether you have questions about our courses or need help with your digital strategy, our
              team is ready to assist you every step of the way.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <motion.div
              id="contact-form"
                {...fadeInUp}

              >

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

                    {
                      icon: <Clock className="w-6 h-6 text-white" />,
                      title: 'Operating Hours',
                      content: <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>,
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
              with our expert-led courses and personalized support.
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