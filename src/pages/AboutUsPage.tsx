import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Lightbulb, Award, Shield, Star, ArrowRight, Play, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const AboutUsPage = () => {
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

  const values = [
    {
      name: 'Excellence',
      description: 'Committed to delivering the highest quality in all our services.',
      icon: <Award className="w-7 h-7" />,
    },
    {
      name: 'Innovation',
      description: 'Continuously evolving to stay ahead of digital trends.',
      icon: <Lightbulb className="w-7 h-7" />,
    },
    {
      name: 'Integrity',
      description: 'Operating with transparency, honesty, and ethical practices.',
      icon: <Shield className="w-7 h-7" />,
    },
    {
      name: 'Client Success',
      description: 'Our ultimate success is measured by the success of our clients.',
      icon: <Target className="w-7 h-7" />,
    },
    {
      name: 'Empowerment',
      description: 'Providing tools and knowledge that foster growth and independence.',
      icon: <Users className="w-7 h-7" />,
    },
  ];

  const milestones = [
    { year: '2023', event: 'Sownmark Founded' },
    { year: '2024', event: 'Launched First Masterclass' },
    { year: '2025', event: 'Partnered with 50+ Companies for Hiring' },
  ];

  return (
    <div className="min-h-screen bg-white">

        <Helmet>
    <title> About Sownmark | Digital Growth Experts</title>
    <meta name="description" content="Learn more about Sownmark’s mission, team, and vision. Discover why businesses and students trust us to deliver results and growth" />
    <meta name="keywords" content="about digital marketing agency, Sownmark company profile, our mission and vision, meet our team, who we are" />
  </Helmet>
      {/* Hero Section - Dark Theme */}
      <section
        className="relative min-h-[100vh] flex items-center justify-center overflow-hidden py-6"
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
              <span className="text-xs font-medium">Your Digital Success Partner</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
              About Sownmark
              <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Empowering Your Digital Journey
              </span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Your trusted partner in digital marketing education, talent acquisition, agency services, and web development.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold text-base hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 min-w-[180px] justify-center"
              >
                Connect With Us
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { number: '50+', label: 'Industry Partners' },
                { number: '1K+', label: 'Professionals Trained' },
                { number: '3+', label: 'Years of Impact' },
                { number: '100+', label: 'Projects Delivered' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-blue-200 text-xs sm:text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section - Light Theme */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4 sm:px-6 md:px-8">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Vision for
              <span
                className="block text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #1a2957, #90abff)' }}
              >
                Digital Success
              </span>
            </h2>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              Sownmark was founded with a clear vision: to bridge the gap between digital marketing knowledge, talent needs,
              and effective online execution. We recognized the growing demand for skilled digital professionals and the
              challenges businesses face in both finding them and executing their digital strategies.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              From humble beginnings, we've grown into a multi-faceted company dedicated to empowering individuals and
              businesses through comprehensive digital solutions. We believe that with the right knowledge, the right team,
              and the right strategy, anyone can achieve remarkable digital growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values Section - Dark Theme */}
      <section className="py-16 sm:py-20" style={{ background: 'linear-gradient(135deg, #1a2957 0%, #2d4a8f 100%)' }}>
        <div className="container px-4 sm:px-6 md:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Guiding
              <span className="block bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                Principles
              </span>
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Empowering individuals and businesses with the knowledge, talent, and strategies needed to thrive in the
              dynamic digital landscape.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={fadeInUp} className="group relative">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-blue-200 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                      style={{ background: 'linear-gradient(135deg, #1a2957, #90abff)' }}
                    >
                      <div className="text-white">{value.icon}</div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{value.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Milestones Section - Light Theme */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4 sm:px-6 md:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Key
              <span
                className="block text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #1a2957, #90abff)' }}
              >
                Milestones
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A glimpse into our journey of growth and impact in the digital space.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} relative`}
              >
                <div className="w-1/2 px-4">
                  <div className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-blue-200">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <h3 className="text-lg font-semibold text-gray-900">{milestone.year}</h3>
                      <p className="text-gray-600 text-sm">{milestone.event}</p>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
                <div className="w-1/2"></div>
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
              Let's Connect
              <span className="block bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                and Grow Together
              </span>
            </h2>

            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              We're passionate about what we do, and we'd love to learn about your goals.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Link
                
                
                className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-base hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 min-w-[220px] justify-center shadow-2xl"
                to='/contact'
              >
                Contact Sownmark
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
              
                 to='/contact'
                
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center gap-2 min-w-[220px] justify-center"
              >
                Get Free Consultation
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-blue-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span className="text-sm">Tailored Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span className="text-sm">Expert Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span className="text-sm">Proven Results</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;