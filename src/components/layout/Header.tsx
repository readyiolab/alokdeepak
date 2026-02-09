import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, UserRound, X, Contact2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { to: '/digital-marketing-agency', label: 'Digital Marketing' },
    { to: '/hiring-solutions', label: 'Hiring Solutions' },
    { to: '/website-development', label: 'Web Development' },
    { to: '/influencer-marketing', label: 'Influencer Marketing' },
    { to: '/blog', label: 'Blog' },
    { to: '/about', label: 'About' },
    { to: '/case-studies', label: 'Case Studies' },
  ];

  const headerBg = isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5';
  const textColor = isScrolled ? 'text-[#1a2957]' : 'text-white';
  const logoInvert = !isScrolled ? 'brightness-100 invert' : '';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}>
      <div className="container mx-auto px-4 max-w-7xl flex justify-between items-center">
        <Link to="/" onClick={closeMenu}>
          <img
            src="./logo.png"
            alt="site_logo"
            className={`h-6 sm:h-8 lg:h-10 w-auto object-contain transition-all duration-500 ${logoInvert}`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-all duration-300 hover:opacity-70 ${isActive ? 'underline underline-offset-4' : ''
                } ${textColor}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className={`text-sm flex justify-center items-center gap-2 font-medium rounded-full shadow-sm transition-all duration-300 px-6 py-2.5 ${isScrolled
              ? 'bg-[#1a2957] text-white hover:bg-[#142145]'
              : 'bg-white text-[#1a2957] hover:bg-gray-100'
              }`}
          >
            Contact <UserRound className="w-4 h-4" />
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-2 transition-colors duration-300 ${textColor}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-[#1a2957]/20 backdrop-blur-md z-40 lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeMenu}
              />

              {/* Menu Content */}
              <motion.div
                className="fixed top-0 right-0 bottom-0 w-full md:w-96 bg-white/95 backdrop-blur-2xl shadow-[-20px_0_50px_rgba(0,0,0,0.1)] z-50 lg:hidden flex flex-col"
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '100%', opacity: 0 }}
                transition={{ type: 'spring', damping: 30, stiffness: 200 }}
              >
                {/* Header within menu */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <img src="./logo.png" alt="logo" className="h-8 w-auto" />
                  <button
                    onClick={closeMenu}
                    className="p-2 bg-gray-50 text-[#1a2957] rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Staggered Navigation Links */}
                <nav className="flex-1 overflow-y-auto py-8 px-8 flex flex-col gap-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.to}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <NavLink
                        to={link.to}
                        className={({ isActive }) =>
                          `text-2xl font-bold py-3 flex items-center justify-between group transition-all ${isActive ? 'text-[#1a2957]' : 'text-[#1a2957]/60 hover:text-[#1a2957] hover:translate-x-2'
                          }`
                        }
                        onClick={closeMenu}
                      >
                        {link.label}
                        <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </NavLink>
                    </motion.div>
                  ))}
                </nav>

                {/* Footer within menu */}
                <div className="p-8 border-t border-gray-100 bg-gray-50/50">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-6"
                  >
                    <NavLink
                      to="/contact"
                      className="flex items-center justify-center gap-3 bg-[#1a2957] text-white px-6 py-4 rounded-2xl font-bold shadow-xl shadow-[#1a2957]/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                      onClick={closeMenu}
                    >
                      <Contact2 size={22} />
                      Start a Project
                    </NavLink>

                    <div className="flex flex-col gap-4">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1a2957]/40 text-center">
                        Connect with us
                      </p>
                      <div className="flex items-center justify-center gap-6">
                        {['Instagram', 'Linkedin', 'Twitter'].map((social) => (
                          <a
                            key={social}
                            href="#"
                            className="text-[#1a2957]/60 hover:text-[#1a2957] font-bold text-sm transition-colors"
                          >
                            {social}
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;