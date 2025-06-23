import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-accent-600 via-accent-700 to-accent-800 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 tracking-tight">Ready to Transform Your Digital Presence?</h2>
          <p className="text-lg mb-8 text-neutral-100">
            Contact us today for a free consultation and let's discuss your goals.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-accent-700 hover:bg-neutral-100 hover:text-accent-800 shadow-lg text-lg font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Get Started Today
          </Link>
        </motion.div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-400 rounded-full opacity-20 transform translate-y-1/2 -translate-x-1/4"></div>
      <div className="absolute top-0 right-0 w-24 h-24 bg-accent-400 rounded-full opacity-20 transform -translate-y-1/4 translate-x-1/4"></div>
    </section>
  );
};

export default CtaSection;