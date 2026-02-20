import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ArrowRight, Instagram, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Body scroll lock on mobile menu open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [

    { name: 'Marketing Agency', path: '/digital-marketing-agency' },
    { name: 'Hiring Solutions', path: '/hiring-solutions' },
    { name: 'Influencer Marketing', path: '/influencer-marketing' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Web Dev', path: '/website-development' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/sownmark_', label: 'Instagram' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/company/sownmark', label: 'LinkedIn' },
    { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>, href: 'https://x.com/Sownmark143641', label: 'Twitter' },
  ];

  const headerBg = isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-3';
  const textColor = isScrolled ? 'text-[#1a2957]' : 'text-white';
  const logoInvert = !isScrolled ? 'brightness-100 invert' : '';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}>
      <nav className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          <Link to="/" className="relative z-50 py-2" onClick={closeMenu}>
            <img
              src="/logo.png"
              alt="Sownmark"
              className={`h-7 sm:h-8 w-auto transition-all duration-300 ${logoInvert}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-bold tracking-wide transition-all duration-300 hover:opacity-70 ${textColor} ${isActive ? 'opacity-100 border-b-2 border-current' : 'opacity-70'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${isScrolled
                ? 'bg-[#1a2957] text-white hover:bg-[#1a2957]/90'
                : 'bg-white text-[#1a2957] hover:bg-white/90'
                }`}
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`relative z-50 p-2 lg:hidden transition-colors ${isMenuOpen ? 'text-white' : textColor
              }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#1a2957]/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col h-full container mx-auto px-6 py-24">
              <div className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={closeMenu}
                      className="text-3xl sm:text-4xl font-bold text-white hover:text-blue-400 transition-colors flex items-center justify-between group"
                    >
                      {link.name}
                      <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto pt-12 border-t border-white/10">
                <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-6">Connect With Us</p>
                <div className="flex items-center gap-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + (index * 0.1) }}
                      className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[#1a2957] transition-all"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;