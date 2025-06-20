import React from 'react';
import { Check, Award, Zap, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Award size={32} className="text-[#1a2957]" />,
    title: 'Expertise',
    description: 'Industry-leading knowledge and practical experience across all our services.',
    delay: 0.1,
  },
  {
    icon: <Check size={32} className="text-[#1a2957]" />,
    title: 'Results-Driven',
    description: 'Delivering measurable outcomes for your skills, talent, or online performance.',
    delay: 0.2,
  },
  {
    icon: <Zap size={32} className="text-[#1a2957]" />,
    title: 'Holistic Approach',
    description: 'Integrated solutions connecting every aspect of your digital strategy.',
    delay: 0.3,
  },
  {
    icon: <Users size={32} className="text-[#1a2957]" />,
    title: 'Client-Centric',
    description: 'Tailored services prioritizing your unique goals and needs.',
    delay: 0.4,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-slate-200">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2957] mb-4">
            Why Choose Sownmark
          </h2>
          <div className="w-16 h-1 bg-[#1a2957] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white border border-gray-100 rounded-xl shadow-lg hover:shadow-lg transition-shadow duration-300 h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: feature.delay }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-[#1a2957] mb-2">{feature.title}</h3>
              <p className="text-sm text-[#1a2957]/80 leading-relaxed flex-grow">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;