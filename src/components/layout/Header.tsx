import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Contact2, Menu, UserRound, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  };

  const itemVariants = {
    closed: {
      x: 50,
      opacity: 0
    },
    open: {
      x: 0,
      opacity: 1
    }
  };

  const containerVariants = {
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? 'shadow-md' : 'shadow-sm'
      } py-4`}
    >
      <div className="container mx-auto px-4 max-w-7xl flex justify-between items-center">
        <Link to="/" onClick={closeMenu}>
          <img
            src="./logo.webp"
            alt="site_logo"
            className="h-8 sm:h-10 lg:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-[#90abff] ${
                isActive ? 'text-[#90abff] font-semibold' : 'text-[#1a2957]'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/digital-marketing-mastery"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-[#90abff] ${
                isActive ? 'text-[#90abff] font-semibold' : 'text-[#1a2957]'
              }`
            }
          >
            Digital Marketing
          </NavLink>
          <NavLink
            to="/hiring-solutions"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-[#90abff] ${
                isActive ? 'text-[#90abff] font-semibold' : 'text-[#1a2957]'
              }`
            }
          >
            Hiring Solutions
          </NavLink>
          <NavLink
            to="/digital-marketing-agency"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-[#90abff] ${
                isActive ? 'text-[#90abff] font-semibold' : 'text-[#1a2957]'
              }`
            }
          >
            Agency
          </NavLink>
          <NavLink
            to="/website-development"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-[#90abff] ${
                isActive ? 'text-[#90abff] font-semibold' : 'text-[#1a2957]'
              }`
            }
          >
            Web Development
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-[#90abff] ${
                isActive ? 'text-[#90abff] font-semibold' : 'text-[#1a2957]'
              }`
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-[#90abff] ${
                isActive ? 'text-[#90abff] font-semibold' : 'text-[#1a2957]'
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="text-sm flex justify-center items-center gap-2 font-medium bg-[#1a2957] text-white rounded-full hover:bg-[#142145] shadow-sm transition-colors duration-300 px-4 py-2"
          >
            Contact <UserRound className='w-4 h-4' />
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <motion.div
          className="lg:hidden p-2 cursor-pointer rounded-md hover:bg-gray-100 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? (
              <X size={24} className="text-[#1a2957]" />
            ) : (
              <Menu size={24} className="text-[#1a2957]" />
            )}
          </motion.div>
        </motion.div>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={closeMenu}
              />
              
              {/* Mobile Menu */}
              <motion.div
                className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden"
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <img
                    src="./logo.webp"
                    alt="site_logo"
                    className="h-8 w-auto object-contain"
                  />
                  <motion.button
                    onClick={closeMenu}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    whileTap={{ scale: 0.95 }}
                  >
                    <X size={20} className="text-[#1a2957]" />
                  </motion.button>
                </div>

                {/* Navigation Menu */}
                <div className="flex flex-col h-full">
                  <motion.nav
                    className="flex-1 px-6 py-4"
                    variants={containerVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <div className="space-y-2">
                      {[
                        { to: '/', label: 'Home' },
                        { to: '/digital-marketing-mastery', label: 'Digital Marketing' },
                        { to: '/hiring-solutions', label: 'Hiring Solutions' },
                        { to: '/digital-marketing-agency', label: 'Agency' },
                        { to: '/website-development', label: 'Web Development' },
                        { to: '/blog', label: 'Blog' },
                        { to: '/about', label: 'About' }
                      ].map((item, index) => (
                        <motion.div
                          key={item.to}
                          variants={itemVariants}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <NavLink
                            to={item.to}
                            className={({ isActive }) =>
                              `block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                                isActive
                                  ? 'text-[#90abff] bg-[#90abff]/10 font-semibold border-l-4 border-[#90abff]'
                                  : 'text-[#1a2957] hover:bg-gray-50 hover:text-[#90abff]'
                              }`
                            }
                            onClick={closeMenu}
                          >
                            {item.label}
                          </NavLink>
                        </motion.div>
                      ))}
                    </div>
                  </motion.nav>

                  {/* Contact Button at Bottom */}
                  <motion.div
                    className="p-6 border-t border-gray-100 bg-gray-50/50"
                    variants={itemVariants}
                    transition={{ duration: 0.3, delay: 0.8 }}
                  >
                    <NavLink
                      to="/contact"
                      className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-[#1a2957] to-[#2a3967] text-white px-6 py-4 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                      onClick={closeMenu}
                    >
                      <Contact2 className="w-5 h-5" />
                      Contact Us
                    </NavLink>
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