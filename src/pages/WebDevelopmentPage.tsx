import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code, Layout, Smartphone, Settings, Zap, Shield, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet';

const WebDevelopmentPage: React.FC = () => {
  const isMobile = React.useRef(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)).current;

  const fadeInUp = {
    initial: isMobile ? { opacity: 0 } : { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: isMobile ? 0.1 : 0.2 },
    transition: { duration: isMobile ? 0.4 : 0.6 },
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

  const features = [
    {
      id: 'custom-design',
      icon: <Layout className="w-8 h-8 text-white" />,
      title: 'Custom Design',
      description: 'Unique, branded designs that reflect your business identity and engage your audience.',
    },
    {
      id: 'mobile-first',
      icon: <Smartphone className="w-8 h-8 text-white" />,
      title: 'Mobile-First',
      description: 'Responsive websites that provide an optimal experience across all devices.',
    },
    {
      id: 'performance',
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Performance',
      description: 'Lightning-fast loading speeds and smooth user experience.',
    },
  ];

  const services = [
    {
      id: 'custom-web',
      icon: <Code className="w-12 h-12 text-white" />,
      title: 'Custom Website Development',
      description: 'Tailored website solutions built from the ground up, designed to perfectly match your brand and functional requirements.',
      benefits: ['Unique design', 'Custom functionality', 'Scalable architecture', 'SEO optimization'],
    },
    {
      id: 'ecommerce',
      icon: <Layout className="w-12 h-12 text-white" />,
      title: 'E-commerce Development',
      description: 'Powerful online stores that provide seamless shopping experiences and drive sales.',
      benefits: ['Product management', 'Secure checkout', 'Inventory tracking', 'Payment integration'],
    },
    {
      id: 'responsive',
      icon: <Smartphone className="w-12 h-12 text-white" />,
      title: 'Responsive Web Design',
      description: 'Ensuring your website looks and functions perfectly on all devices – desktops, tablets, and mobile.',
      benefits: ['Mobile optimization', 'Cross-browser compatibility', 'Fluid layouts', 'Touch-friendly interface'],
    },
    {
      id: 'maintenance',
      icon: <Settings className="w-12 h-12 text-white" />,
      title: 'Website Maintenance',
      description: 'Ongoing technical support, security updates, and content management to keep your site running smoothly.',
      benefits: ['Regular updates', 'Security monitoring', 'Performance optimization', 'Content updates'],
    },
    {
      id: 'security',
      icon: <Shield className="w-12 h-12 text-white" />,
      title: 'Security & Performance',
      description: 'Implementing robust security measures and optimizing website performance for the best user experience.',
      benefits: ['SSL certificates', 'Security audits', 'Speed optimization', 'Backup solutions'],
    },
    {
      id: 'optimization',
      icon: <Zap className="w-12 h-12 text-white" />,
      title: 'Website Optimization',
      description: 'Enhancing your websites performance, speed, and search engine visibility.',
      benefits: ['SEO optimization', 'Load time improvement', 'Code optimization', 'User experience enhancement'],
    },
  ];

  const roadmapSteps = [
    {
      id: 'discovery',
      step: '01',
      title: 'Discovery & Planning',
      description: 'Understanding your vision, goals, and technical requirements to create a comprehensive project plan.',
    },
    {
      id: 'design',
      step: '02',
      title: 'Design & Prototyping',
      description: 'Creating wireframes and interactive prototypes to visualize the user experience.',
    },
    {
      id: 'development',
      step: '03',
      title: 'Development',
      description: 'Building your website with clean, efficient code and modern technologies.',
    },
    {
      id: 'testing',
      step: '04',
      title: 'Testing',
      description: 'Rigorous testing across devices and browsers to ensure flawless performance.',
    },
    {
      id: 'launch',
      step: '05',
      title: 'Launch',
      description: 'Carefully planned deployment to ensure a smooth transition to your new website.',
    },
    {
      id: 'support',
      step: '06',
      title: 'Support',
      description: 'Ongoing maintenance and support to keep your website running optimally.',
    },
  ];

  const technologies = [
    // Frontend
    { id: 'html', name: 'HTML', icon: 'https://cdn.worldvectorlogo.com/logos/html-1.svg', color: '#E34F26', category: 'Frontend' },
    { id: 'css', name: 'CSS', icon: 'https://cdn.worldvectorlogo.com/logos/css-3.svg', color: '#1572B6', category: 'Frontend' },
    { id: 'react', name: 'React', icon: 'https://cdn.worldvectorlogo.com/logos/react-2.svg', color: '#61DAFB', category: 'Frontend' },
    { id: 'react-native', name: 'React Native', icon: 'https://cdn.worldvectorlogo.com/logos/react-2.svg', color: '#61DAFB', category: 'Frontend' },
    // Backend
    { id: 'nodejs', name: 'Node.js', icon: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg', color: '#339933', category: 'Backend' },
    { id: 'python', name: 'Python', icon: 'https://cdn.worldvectorlogo.com/logos/python-5.svg', color: '#3776AB', category: 'Backend' },
    { id: 'mongodb', name: 'MongoDB', icon: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg', color: '#47A248', category: 'Backend' },

    { id: 'mysql', name: 'MySQL', icon: 'https://www.svgrepo.com/show/303251/mysql-logo.svg', color: '#4479A1', category: 'Backend' },
    { id: 'redis', name: 'Redis', icon: 'https://cdn.worldvectorlogo.com/logos/redis.svg', color: '#DC382D', category: 'Backend' },
    // DevOps
    { id: 'aws', name: 'AWS', icon: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg', color: '#FF9900', category: 'DevOps' },
    { id: 'digitalocean', name: 'DigitalOcean', icon: 'https://cdn.worldvectorlogo.com/logos/digitalocean.svg', color: '#0080FF', category: 'DevOps' },
    { id: 'git', name: 'Git', icon: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg', color: '#F05032', category: 'DevOps' },
    { id: 'github', name: 'GitHub', icon: 'https://cdn.worldvectorlogo.com/logos/github-icon.svg', color: '#181717', category: 'DevOps' },
    { id: 'jenkins', name: 'Jenkins', icon: 'https://cdn.worldvectorlogo.com/logos/jenkins-1.svg', color: '#D24939', category: 'DevOps' },
    { id: 'linux', name: 'Linux', icon: 'https://cdn.worldvectorlogo.com/logos/linux-tux.svg', color: '#FCC624', category: 'DevOps' },
    { id: 'nginx', name: 'Nginx', icon: 'https://cdn.worldvectorlogo.com/logos/nginx.svg', color: '#009639', category: 'DevOps' },
    { id: 'pm2', name: 'PM2', icon: 'https://cdn.worldvectorlogo.com/logos/pm2.svg', color: '#2F2E8B', category: 'DevOps' },
    { id: 'ubuntu', name: 'Ubuntu', icon: 'https://cdn.worldvectorlogo.com/logos/ubuntu-2.svg', color: '#E95420', category: 'DevOps' }
  ];
  return (
    <>
      <Helmet>
        <title>Website Development Services in India – SEO-Friendly Sites</title>
        <meta
          name="description"
          content="Get professional website development services in India. We design SEO-optimized, fast, and mobile-friendly websites that convert visitors into customers."
        />
        <meta
          name="keywords"
          content="website development India, custom web design services, ecommerce website development, business website development, responsive web design"
        />
        <link rel="canonical" href="https://www.sownmark.com/website-development" />
        <meta property="og:type" content="website" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Web Development",
              "provider": {
                "@type": "Organization",
                "name": "Sownmark",
                "url": "https://sownmark.com"
              },
              "areaServed": "Worldwide",
              "description": "Professional web development services including custom websites, e-commerce, and maintenance.",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Web Development Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Custom Website Development"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "E-commerce Solutions"
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
        className="relative min-h-screen flex items-center justify-center overflow-hidden py-10 sm:py-20 lg:py-24"
        style={{ background: 'linear-gradient(135deg, #1a2957 0%, #2563eb 50%, #3b82f6 100%)' }}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_#60a5fa_0%,_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_#93c5fd_0%,_transparent_50%)]" />
        </div>

        <div className="container relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={isMobile ? { opacity: 0 } : { opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.5 : 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-3 rounded-full mb-8 border border-white/20 shadow-lg"
            >
              <Shield className="w-5 h-5 text-yellow-300 fill-current" />
              <span className="text-sm font-medium tracking-wide">Trusted Web Solutions</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              Crafting Exceptional Websites with
              <span className="block bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent mt-2">
                Sownmark
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              From engaging portfolios to robust e-commerce platforms, we build digital experiences that drive results.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex group"
            >
              <Link
                to="/contact#contact-form"
                className="bg-white text-gray-900 px-8 py-4 sm:px-10 sm:py-5 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-100 hover:shadow-2xl transition-all duration-300 flex items-center gap-3 min-w-[220px] justify-center shadow-xl"
                aria-label="Get Started with Sownmark Web Development"
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
              More Than Just a Website
              <span
                className="block text-transparent bg-clip-text mt-2"
                style={{ backgroundImage: 'linear-gradient(135deg, #1a2957, #3b82f6, #60a5fa)' }}
              >
                A Business Asset
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Your website is your digital storefront and most powerful marketing tool. At Sownmark, we create responsive, secure, and high-performing platforms that align with your brand and achieve your business objectives.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                variants={fadeInUp}
                className="group relative h-full"
              >
                <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-blue-200 h-full flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 flex-1 flex flex-col">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                      style={{ background: 'linear-gradient(135deg, #1a2957, #3b82f6, #60a5fa)' }}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 leading-tight">{feature.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-1">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 lg:py-24 ">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Comprehensive Web
              <span
                className="block text-transparent bg-clip-text mt-2"
                style={{ backgroundImage: 'linear-gradient(135deg, #1a2957, #3b82f6, #60a5fa)' }}
              >
                Development Services
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Tailored solutions to build modern, scalable, and high-performing websites.
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
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
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

      {/* Roadmap Section */}
      <section className="py-16 sm:py-20 lg:py-24" style={{ background: 'linear-gradient(135deg, #1a2957 0%, #2563eb 100%)' }}>
        <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Our Development
              <span className="block bg-gradient-to-r from-blue-100 via-white to-blue-200 bg-clip-text text-transparent mt-2">
                Connection Roadmap
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              A collaborative journey to bring your website vision to life, connected by key milestones.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="relative max-w-3xl mx-auto"
          >
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 to-white/20" />
            {roadmapSteps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={fadeInUp}
                className={`relative mb-12 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center justify-between`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm sm:text-base text-blue-100">{step.description}</p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white flex items-center justify-center text-2xl font-bold text-gray-900 shadow-lg z-10">
                  {step.step}
                </div>
                <div className="w-5/12" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-100/50">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Technologies We Master
              <span
                className="block text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #1a2957, #3b82f6)' }}
              >
                to Build Modern Websites
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              We harness cutting-edge tools to create scalable, high-performance digital solutions.
            </p>
          </motion.div>

          {['Frontend', 'Backend', 'DevOps'].map((category) => (
            <div key={category} className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">{category}</h3>
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
              >
                {technologies
                  .filter((tech) => tech.category === category)
                  .map((tech) => (
                    <motion.div
                      key={tech.id}
                      variants={fadeInUp}
                      className="group relative flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        width={48}
                        height={48}
                        className="mb-2"
                        loading="lazy"
                        style={{ filter: `drop-shadow(0 0 4px ${tech.color}50)` }}
                      />
                      <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                      <div className="absolute -top-8 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2">
                        {tech.name}
                      </div>
                    </motion.div>
                  ))}
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 sm:py-20 lg:py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a2957 0%, #2563eb 50%, #3b82f6 100%)' }}
      >
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_#60a5fa_0%,_transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_#93c5fd_0%,_transparent_50%)]"></div>
        </div>

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              Ready to Build Your
              <span className="block bg-gradient-to-r from-blue-100 via-white to-blue-200 bg-clip-text text-transparent mt-2">
                Digital Masterpiece?
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
              Partner with Sownmark to create a website that drives results and captivates your audience. Schedule your free consultation today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group h-full">
                <Link
                  to="/contact#contact-form"
                  className="bg-white text-gray-900 px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 min-w-[250px] justify-center w-full sm:w-auto shadow-2xl"
                  aria-label="Schedule a Free Website Consultation with Sownmark"
                >
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 translate-x-0 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group h-full">
                <Link
                  to="/about"
                  className="bg-transparent border-2 text-white px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-base sm:text-lg border-white hover:bg-white hover:text-gray-600 transition-all duration-300 min-w-[250px] flex items-center w-full sm:w-auto justify-center"
                  aria-label="Learn More About Sownmark's Web Development Services"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default WebDevelopmentPage;