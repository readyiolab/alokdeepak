import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
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

          {/* Digital Marketing Dropdown */}
          <div className="relative group">
            <div
              className="flex items-center text-sm font-medium text-[#1a2957] hover:text-[#90abff] cursor-pointer transition-colors"
              onClick={() => toggleDropdown('marketing')}
            >
              Digital Marketing
              <ChevronDown size={16} className="ml-1 text-[#1a2957] group-hover:text-[#90abff]" />
            </div>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <NavLink
                to="/digital-marketing-mastery"
                className="block px-4 py-2 text-sm text-[#1a2957] hover:bg-[#f9fafb] hover:text-[#90abff] rounded-lg"
                onClick={closeMenu}
              >
                Overview
              </NavLink>
              <NavLink
                to="/digital-marketing-mastery#courses"
                className="block px-4 py-2 text-sm text-[#1a2957] hover:bg-[#f9fafb] hover:text-[#90abff] rounded-lg"
                onClick={closeMenu}
              >
                Courses
              </NavLink>
            </div>
          </div>

          {/* Hiring Solutions Dropdown */}
          <div className="relative group">
            <div
              className="flex items-center text-sm font-medium text-[#1a2957] hover:text-[#90abff] cursor-pointer transition-colors"
              onClick={() => toggleDropdown('hiring')}
            >
              Hiring Solutions
              <ChevronDown size={16} className="ml-1 text-[#1a2957] group-hover:text-[#90abff]" />
            </div>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <NavLink
                to="/hiring-solutions"
                className="block px-4 py-2 text-sm text-[#1a2957] hover:bg-[#f9fafb] hover:text-[#90abff] rounded-lg"
                onClick={closeMenu}
              >
                Overview
              </NavLink>
              <NavLink
                to="/hiring-solutions#for-companies"
                className="block px-4 py-2 text-sm text-[#1a2957] hover:bg-[#f9fafb] hover:text-[#90abff] rounded-lg"
                onClick={closeMenu}
              >
                For Companies
              </NavLink>
            </div>
          </div>

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
            className="text-sm font-medium bg-[#1a2957] text-white rounded-md hover:bg-[#142145] shadow-sm transition-colors duration-300 px-4 py-2"
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <div
          className="lg:hidden p-2 cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={20} className="text-[#1a2957]" /> : <Menu size={20} className="text-[#1a2957]" />}
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-white z-40 lg:hidden"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto px-4 pt-16 pb-8 h-full overflow-y-auto">
                <nav className="flex flex-col gap-4">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `text-base font-medium py-2 ${isActive ? 'text-[#90abff] font-semibold' : 'text-[#1a2957]'}`
                    }
                    onClick={closeMenu}
                  >
                    Home
                  </NavLink>

                  {/* Mobile Dropdown - Digital Marketing */}
                  <div>
                    <div
                      className="flex items-center justify-between text-base font-medium py-2 text-[#1a2957] hover:text-[#90abff]"
                      onClick={() => toggleDropdown('marketing')}
                    >
                      Digital Marketing
                      <ChevronDown
                        size={16}
                        className={`transition-transform text-[#1a2957] hover:text-[#90abff] ${
                          activeDropdown === 'marketing' ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                    <AnimatePresence>
                      {activeDropdown === 'marketing' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden pl-4"
                        >
                          <NavLink
                            to="/digital-marketing-mastery"
                            className="block text-sm py-1.5 text-[#1a2957] hover:text-[#90abff]"
                            onClick={closeMenu}
                          >
                            Overview
                          </NavLink>
                          <NavLink
                            to="/digital-marketing-mastery#courses"
                            className="block text-sm py-1.5 text-[#1a2957] hover:text-[#90abff]"
                            onClick={closeMenu}
                          >
                            Courses
                          </NavLink>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Mobile Dropdown - Hiring Solutions */}
                  <div>
                    <div
                      className="flex items-center justify-between text-base font-medium py-2 text-[#1a2957] hover:text-[#90abff]"
                      onClick={() => toggleDropdown('hiring')}
                    >
                      Hiring Solutions
                      <ChevronDown
                        size={16}
                        className={`transition-transform text-[#1a2957] hover:text-[#90abff] ${
                          activeDropdown === 'hiring' ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                    <AnimatePresence>
                      {activeDropdown === 'hiring' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden pl-4"
                        >
                          <NavLink
                            to="/hiring-solutions"
                            className="block text-sm py-1.5 text-[#1a2957] hover:text-[#90abff]"
                            onClick={closeMenu}
                          >
                            Overview
                          </NavLink>
                          <NavLink
                            to="/hiring-solutions#for-companies"
                            className="block text-sm py-1.5 text-[#1a2957] hover:text-[#90abff]"
                            onClick={closeMenu}
                          >
                            For Companies
                          </NavLink>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <NavLink
                    to="/digital-marketing-agency"
                    className={({ isActive }) =>
                      `text-base font-medium py-2 ${isActive ? 'text-[#90abff] font-semibold' : 'text-[#1a2957]'}`
                    }
                    onClick={closeMenu}
                  >
                    Agency
                  </NavLink>
                  <NavLink
                    to="/website-development"
                    className={({ isActive }) =>
                      `text-base font-medium py-2 ${isActive ? 'text-[#90abff] font-semibold' : 'text-[#1a2957]'}`
                    }
                    onClick={closeMenu}
                  >
                    Web Development
                  </NavLink>
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      `text-base font-medium py-2 ${isActive ? 'text-[#90abff] font-semibold' : 'text-[#1a2957]'}`
                    }
                    onClick={closeMenu}
                  >
                    Blog
                  </NavLink>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `text-base font-medium py-2 ${isActive ? 'text-[#90abff] font-semibold' : 'text-[#1a2957]'}`
                    }
                    onClick={closeMenu}
                  >
                    About
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className="text-base font-medium bg-[#90abff] text-white px-4 py-2 rounded-md mt-2 text-center hover:bg-[#7a9cff] transition-colors"
                    onClick={closeMenu}
                  >
                    Contact
                  </NavLink>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;