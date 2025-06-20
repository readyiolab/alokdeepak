import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

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
    <footer
      className="relative pt-16 pb-8 text-white overflow-hidden"
      style={{ background: 'linear-gradient(315deg, #1a2957 0%, #2d4a8f 100%)' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, #90abff 0%, transparent 50%), 
                             radial-gradient(circle at 80% 20%, #90abff 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* Column 1 - Logo & About */}
          <motion.div variants={fadeInUp}>
            <div className="mb-6">
              <img src="./logo.webp" alt="" />
            </div>
            <p className="text-blue-100 mb-6 text-sm leading-relaxed">
              Your partner in digital growth. Master digital marketing, find top talent, and drive online success.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Linkedin size={24} />, href: '#', label: 'LinkedIn', color: '#0077B5' },
                { icon: <Facebook size={24} />, href: '#', label: 'Facebook', color: '#1877F2' },
                {
                  icon: <Instagram size={24} />,
                  href: '#',
                  label: 'Instagram',
                  
                },
                { icon: <Twitter size={24} />, href: '#', label: 'Twitter', color: '#1DA1F2' },
                { icon: <Youtube size={24} />, href: '#', label: 'YouTube', color: '#FF0000' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`p-2 rounded-full hover:opacity-90 transition-opacity ${social.color}`}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/digital-marketing-mastery', label: 'Digital Marketing Mastery' },
                { to: '/hiring-solutions', label: 'Hiring Solutions' },
                { to: '/digital-marketing-agency', label: 'Digital Marketing Agency' },
                { to: '/website-development', label: 'Website Development' },
              ].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                  <Link
                    to={link.to}
                    className="text-blue-100 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - More Links */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-bold mb-4 text-white">More</h3>
            <ul className="space-y-3">
              {[
                { to: '/blog', label: 'Blog' },
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact Us' },
                { to: '/privacy-policy', label: 'Privacy Policy' },
                { to: '/terms-conditions', label: 'Terms & Conditions' },
              ].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                  <Link
                    to={link.to}
                    className="text-blue-100 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 - Contact */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              {[
                {
                  icon: <Mail size={20} className="text-white" />,
                  content: (
                    <a
                      href="mailto:hello@sownmark.com"
                      className="text-blue-100 hover:text-white transition-colors text-sm"
                    >
                      hello@sownmark.com
                    </a>
                  ),
                },
              
                {
                  icon: null,
                  content: (
                    <div>
                      <h4 className="text-sm font-medium mb-2 text-white">Operating Hours:</h4>
                      <p className="text-blue-100 text-sm">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    </div>
                  ),
                },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start"
                >
                  {item.icon && (
                    <div
                      className="mt-1 mr-3 flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, #1a2957, #90abff)' }}
                    >
                      {item.icon}
                    </div>
                  )}
                  <div>{item.content}</div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          {...fadeInUp}
          className="pt-8 border-t border-blue-200/20 text-center text-sm text-blue-100"
        >
          <p>© {currentYear} Sownmark. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;