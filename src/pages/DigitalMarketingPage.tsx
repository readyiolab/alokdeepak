import { motion } from 'framer-motion';
import { Book, Users, Award, BarChart, Star, CheckCircle, ArrowRight, Play, Globe, Target, Search, Layout, Code } from 'lucide-react';
import { useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ProjectsSection from './ProjectsSection';
const DigitalMarketingPage = () => {
  useEffect(() => {
    if (location.hash === '#courses') {
      const scrollToForm = () => {
        const element = document.getElementById('courses');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
      const timer = setTimeout(scrollToForm, 500);
      return () => clearTimeout(timer);
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
        <title>Sownmark: Digital Marketing Courses</title>
        <meta
          name="description"
          content="Learn digital marketing with live projects, expert mentorship, and job-ready skills. Start your career with Sownmark's best-rated course"
        />
        <meta
          name="keywords"
          content="best digital marketing course, digital marketing course with certificate, online digital marketing training, digital marketing course for beginners, SEO course online"
        />
        <link rel="canonical" href="https://www.sownmark.com/digital-marketing-mastery" />
       
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
              <span className="text-xs font-medium">Industry-Leading Digital Marketing Education</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Master Digital Marketing
              <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                with Sownmark
              </span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Transform your career with comprehensive courses designed by industry experts. From
              foundational concepts to advanced strategies.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
              <Link
                to="/contact#contact-form"
                className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold text-base hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 min-w-[180px] justify-center"
              >
                Start Learning
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
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
                icon: <Book className="w-7 h-7" />,
                title: 'Practical Curriculum',
                description:
                  'Real-world scenarios and actionable strategies you can implement immediately in your campaigns.',
              },
              {
                icon: <Users className="w-7 h-7" />,
                title: 'Expert Instructors',
                description: 'Learn from professionals with proven track records and years of industry success.',
              },
              {
                icon: <Award className="w-7 h-7" />,
                title: 'Industry Certification',
                description: 'Earn recognized certifications that validate your expertise to potential employers.',
              },
              {
                icon: <BarChart className="w-7 h-7" />,
                title: 'Career Advancement',
                description: 'Comprehensive career support to help you land your dream digital marketing role.',
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp} className="group relative">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-blue-200 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                      style={{ background: 'linear-gradient(135deg, #1a2957, #90abff)' }}
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

      {/* Courses Section - Dark Theme */}
      <section id='courses' className="py-16 sm:py-20" style={{ background: 'linear-gradient(135deg, #1a2957 0%, #2d4a8f 100%)' }}>
        <div className="container px-4 sm:px-6 md:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Choose Your Path to
              <span className="block bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
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
                duration: '8 weeks',
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
                features: ['SEO Tools Access', 'Content Templates', 'Performance Tracking', 'Expert Reviews fabulous'],
                popular: false,
                image:
                  'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Social Media Marketing Specialist',
                description:
                  'Create and execute winning social media strategies across all major platforms with advanced analytics, automation, and community management.',
                duration: '4 weeks coming soon',
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
                       Diet {course.duration}
                      </span>
                    </div>

                    <button
                      className="w-full py-3 rounded-xl font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      style={{
                        background: 'linear-gradient(135deg, #1a2957, #90abff)',
                        color: 'white',
                      }}
                      onClick={() => navigate('/contact#contact-form')}
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
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4 sm:px-6 md:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Master Industry-Leading
              <span
                className="block text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #1a2957, #90abff)' }}
              >
                Digital Marketing Tools
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Gain hands-on experience with top tools trusted by marketing professionals worldwide. Our focus is on teaching core strategies and mindsets that drive results, ensuring you’re ready for any tool evolution.
            </p>
          </motion.div>

          {/* Tools List */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16"
          >
            {[
              { name: 'Google Keyword Planner', icon: <Search className="w-6 h-6" /> },
              { name: 'Google Search Console', icon: <Globe className="w-6 h-6" /> },
              { name: 'Google Ads', icon: <Target className="w-6 h-6" /> },
              { name: 'Performance Max', icon: <BarChart className="w-6 h-6" /> },
              { name: 'Open AI', icon: <Code className="w-6 h-6" /> },
              { name: 'Google Trends', icon: <BarChart className="w-6 h-6" /> },
              { name: 'Amazon Ads', icon: <Target className="w-6 h-6" /> },
              { name: 'Semrush', icon: <Search className="w-6 h-6" /> },
              { name: 'Moz', icon: <Globe className="w-6 h-6" /> },
              { name: 'Ubersuggest', icon: <Search className="w-6 h-6" /> },
              { name: 'Ahrefs', icon: <Globe className="w-6 h-6" /> },
              { name: 'Canva', icon: <Layout className="w-6 h-6" /> },
              { name: 'Screaming Frog', icon: <Search className="w-6 h-6" /> },
              { name: 'Meta Ads Manager', icon: <Target className="w-6 h-6" /> },
              { name: 'Google Shopping', icon: <Target className="w-6 h-6" /> },
              { name: 'YouTube Advertising', icon: <Play className="w-6 h-6" /> },
              { name: 'ChatGPT', icon: <Code className="w-6 h-6" /> },
            ].map((tool, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group flex items-center gap-3 bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ background: 'linear-gradient(135deg, #1a2957, #90abff)' }}
                >
                  <div className="text-white">{tool.icon}</div>
                </div>
                <span className="text-sm font-medium text-gray-900">{tool.name}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Projects Section */}
          {/* <motion.div {...fadeInUp} className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Real-World Projects
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Apply your skills in hands-on projects designed to simulate real marketing challenges, guided by industry experts.
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
                title: 'Meta Ads Campaign',
                duration: '15 Hours (Over 6 Days)',
                description:
                  'Create and execute a live Facebook and Instagram campaign for Sownmark. Define business objectives, identify target audiences, build media plans, design ads, and optimize performance.',
                tools: ['Meta Ads Manager', 'Meta Business Suite', 'Facebook Pixel', 'Canva', 'Google Sheets'],
                features: [
                  'Project Briefing',
                  'Meeting with Industry Experts',
                  'Campaign Setup & Launch with Budget',
                  'Media Strategy Submission & Live Optimization',
                  'Presentations and Mock Interviews',
                ],
                icon: <Target className="w-7 h-7" />,
              },
              {
                title: 'Google Ads Campaign',
                duration: '15 Hours (Over 6 Days)',
                description:
                  'Plan and run a Google Search campaign for Sownmark. Define goals, select keywords, craft ad copies, and build an efficient bidding strategy, with active campaign optimization.',
                tools: [
                  'Google Ads',
                  'Google Ads Keyword Planner',
                  'Google Analytics',
                  'Google Tag Manager',
                  'Google Ads Transparency Center',
                  'OpenAI',
                ],
                features: [
                  'Project Briefing',
                  'Meeting with Industry Experts',
                 'real-time Campaign Setup & Launch with Budget',
                  'Media Strategy Submission & Campaign Optimization',
                  'Presentations and Mock Interviews',
                ],
                icon: <Search className="w-7 h-7" />,
              },
              {
                title: 'SEO Strategy Project',
                duration: '12 Hours (Over 6 Days)',
                description:
                  'Build an SEO strategy for Sownmark’s website. Conduct on-page and technical SEO audits, evaluate backlinks, craft a content strategy, and publish SEO-optimized blogs using WordPress.',
                tools: ['Google Search Console', 'Google Analytics', 'Ahrefs/Semrush', 'WordPress', 'Screaming Frog', 'Canva'],
                features: [
                  'Project Briefing',
                  'SEO Audit + Content Strategy Creation',
                  'Blog Publishing Using WordPress',
                  'Performance Tracking',
                  'Presentations and Mock Interviews',
                ],
                icon: <Globe className="w-7 h-7" />,
              },
            ].map((project, index) => (
              <motion.div key={index} variants={fadeInUp} className="group">
                <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-gray-100 group-hover:border-blue-200 h-full">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: 'linear-gradient(135deg, #1a2957, #90abff)' }}
                  >
                    <div className="text-white">{project.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="mb-4">
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {project.duration}
                    </span>
                  </div>
                  <div className="space-y-2 mb-5">
                    <h4 className="text-sm font-semibold text-gray-900">Tools Used:</h4>
                    {project.tools.map((tool, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{tool}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2 mb-5">
                    <h4 className="text-sm font-semibold text-gray-900">What You’ll Do:</h4>
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    className="w-full py-3 rounded-xl font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, #1a2957, #90abff)',
                      color: 'white',
                    }}
                    onClick={() => navigate('/contact#contact-form')}
                  >
                    Join Project
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div> */}
          <ProjectsSection />
        </div>
      </section>

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
                onClick={() => navigate('/contact#contact-form')}
                className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-base hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 min-w-[220px] justify-center shadow-2xl"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact#contact-form')}
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