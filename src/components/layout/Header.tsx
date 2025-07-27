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
                  <NavLink
                    to="/digital-marketing-mastery"
                    className={({ isActive }) =>
                      `text-base font-medium py-2 ${isActive ? 'text-[#90abff] font-semibold' : 'text-[#1a2957]'}`
                    }
                    onClick={closeMenu}
                  >
                    Digital Marketing
                  </NavLink>
                  <NavLink
                    to="/hiring-solutions"
                    className={({ isActive }) =>
                      `text-base font-medium py-2 ${isActive ? 'text-[#90abff] font-semibold' : 'text-[#1a2957]'}`
                    }
                    onClick={closeMenu}
                  >
                    Hiring Solutions
                  </NavLink>
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