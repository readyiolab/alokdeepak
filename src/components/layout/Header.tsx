import React, { useState, useEffect, useCallback } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Instagram, Linkedin, ChevronRight } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  // Handle mobile nav link click: close first, then navigate
  const handleMobileNavClick = useCallback((path: string) => {
    setIsMenuOpen(false);
    // Small delay to let the menu close visually before navigation
    setTimeout(() => {
      navigate(path);
    }, 150);
  }, [navigate]);

  // Body scroll lock
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Close menu on route change (safety net)
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

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
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}>
        <nav className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex items-center justify-between">
            <Link to="/" className="relative z-[70] py-6" onClick={closeMenu}>
              <img
                src="/logo.webp"
                alt="Sownmark"
                width={180}
                height={40}
                fetchPriority="high"
                loading="eager"
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

            {/* Mobile Menu Button — z-[70] so it's always above backdrop */}
            <button
              onClick={isMenuOpen ? closeMenu : openMenu}
              className={`relative z-[70] p-2 lg:hidden transition-colors duration-200 ${
                isMenuOpen ? 'text-[#1a2957]' : textColor
              }`}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>
      </header>

      {/* ===== MOBILE MENU — Rendered outside header for proper z-index stacking ===== */}

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[55] bg-black/40 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Slide-in Panel */}
      <div
        className={`fixed inset-y-0 right-0 z-[60] w-full sm:w-80 bg-white shadow-2xl lg:hidden flex flex-col transition-transform duration-300 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-6 pt-8 border-b border-gray-100">
          <span className="text-sm font-black uppercase tracking-widest text-[#1a2957]">Menu</span>
          <button
            onClick={closeMenu}
            className="p-2 rounded-full bg-gray-50 text-gray-500 hover:text-[#1a2957] hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto py-6 px-6">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <button
                key={link.path}
                onClick={() => handleMobileNavClick(link.path)}
                className={`group w-full flex items-center justify-between py-3.5 text-[17px] font-semibold transition-colors border-b border-gray-50 ${
                  isActive
                    ? 'text-blue-600'
                    : 'text-[#1a2957] hover:text-blue-600'
                }`}
              >
                <span className="flex items-center gap-3">
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                  )}
                  {link.name}
                </span>
                <ChevronRight
                  size={16}
                  className="text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all"
                />
              </button>
            );
          })}
        </div>

        {/* Bottom: Social + CTA */}
        <div className="p-6 bg-gray-50 space-y-5 border-t border-gray-100">
          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2.5 rounded-xl bg-white text-[#1a2957] shadow-sm hover:shadow-md hover:scale-105 transition-all"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <button
            onClick={() => handleMobileNavClick('/contact')}
            className="block w-full text-center py-4 rounded-2xl bg-[#1a2957] text-white font-bold shadow-lg hover:shadow-xl hover:bg-[#0f1d42] transition-all active:scale-[0.98]"
          >
            Start a Project
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;