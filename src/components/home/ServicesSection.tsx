import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap as Graduation, Users, LineChart, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Graduation size={32} className="text-white" />,
    title: 'Digital Marketing Expertise',
    description: 'Master cutting-edge strategies with our comprehensive courses led by industry veterans.',
    link: '/digital-marketing-mastery',
    linkText: 'Learn More',
    delay: 0.1,
  },
  {
    icon: <Users size={32} className="text-white" />,
    title: 'Top Digital Talent',
    description: 'Connect with skilled digital marketing and IT professionals to build high-performing teams.',
    link: '/hiring-solutions',
    linkText: 'Hire Now',
    delay: 0.2,
  },
  {
    icon: <LineChart size={32} className="text-white" />,
    title: 'Marketing Success',
    description: 'Boost your brand with expert SEO, SEM, social media, and content strategies.',
    link: '/digital-marketing-agency',
    linkText: 'Explore Services',
    delay: 0.3,
  },
  {
    icon: <Globe size={32} className="text-white" />,
    title: 'Stunning Websites',
    description: 'Get responsive, user-friendly websites that engage and convert your audience.',
    link: '/website-development',
    linkText: 'View Web Services',
    delay: 0.4,
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#1a2957]">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <div className="w-16 h-1 bg-white mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-[#223466] border border-[#2f437a] rounded-xl shadow-md hover:shadow-xl hover:bg-[#263a6d] transition-all duration-300 h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: service.delay }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
              <p className="text-sm text-white/80 leading-relaxed flex-grow mb-4">{service.description}</p>
              <Link
                to={service.link}
                className="inline-flex items-center text-sm font-medium text-white transition-colors duration-300"
              >
                {service.linkText}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;