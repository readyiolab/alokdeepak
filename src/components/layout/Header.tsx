import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Instagram, Linkedin, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Marketing Agency', path: '/digital-marketing-agency' },
    { name: 'Hiring Solutions', path: '/hiring-solutions' },
    { name: 'Influencer Marketing', path: '/influencer-marketing' },
    { name: 'Web Dev', path: '/website-development' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/sownmark_', label: 'Instagram' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/company/sownmark', label: 'LinkedIn' },
    { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>, href: 'https://x.com/Sownmark143641', label: 'Twitter' },
  ];

  const headerBg = isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-1.5' : 'bg-transparent py-2.5';
  const textColor = isScrolled ? 'text-[#1a2957]' : 'text-white';
  const logoInvert = !isScrolled ? 'brightness-100 invert' : '';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}>
      <nav className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          <Link to="/" className="relative z-50 py-6" onClick={closeMenu}>
            <img
              src="/logo.png"
              alt="Sownmark"
              width={180}
              height={40}
              className={`h-6 sm:h-7 w-auto transition-all duration-300 ${logoInvert}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-[13px] font-bold tracking-wide transition-all duration-300 hover:opacity-70 ${textColor} ${isActive ? 'opacity-100 border-b-2 border-current' : 'opacity-70'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className={`px-4 py-1.5 rounded-full text-[13px] font-bold transition-all duration-300 ${isScrolled
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
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-[60] w-full sm:w-80 bg-white shadow-2xl lg:hidden flex flex-col"
          >
            {/* Header in Menu */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <span className="text-sm font-black uppercase tracking-widest text-[#1a2957]">Menu</span>
              <button
                onClick={closeMenu}
                className="p-2 rounded-full bg-gray-50 text-gray-400 hover:text-[#1a2957] transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 overflow-y-auto py-8 px-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={closeMenu}
                    className="group flex items-center justify-between py-3 text-lg font-bold text-[#1a2957] hover:text-blue-600 transition-colors"
                  >
                    <span>{link.name}</span>
                    <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Social & Contact */}
            <div className="p-8 bg-gray-50 space-y-6">
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white text-[#1a2957] shadow-sm hover:scale-110 transition-transform"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="block w-full text-center py-4 rounded-2xl bg-[#1a2957] text-white font-bold shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop for Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
            className="fixed inset-0 z-50 bg-[#0a0f1e]/40 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;