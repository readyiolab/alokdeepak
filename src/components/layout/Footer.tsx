import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-800 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - Logo & About */}
          <div>
            <img src="./logo.png" alt="Sownmark Logo" className="h-12 mb-6" />
            <p className="text-gray-600 text-sm leading-relaxed">
              Empowering your digital journey with innovative marketing and talent solutions.
            </p>
            <div className="flex space-x-4 mt-6">
              {[
                { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/company/sownmark', label: 'LinkedIn' },
                { icon: <Instagram size={20} />, href: 'https://www.instagram.com/sownmark_', label: 'Instagram' },
                { icon: <svg size={20} viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>, href: 'https://x.com/Sownmark143641', label: 'Twitter' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-500 hover:text-gray-800 transition-colors duration-300"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {[
                { to: '/', label: 'Home' },
                { to: '/digital-marketing-agency', label: 'Marketing Agency' },
                { to: '/hiring-solutions', label: 'Hiring Solutions' },
                { to: '/influencer-marketing', label: 'Influencer Marketing' },
                { to: '/website-development', label: 'Website Development' },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-gray-600 hover:text-gray-800 transition-colors duration-300 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - More Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">More</h3>
            <ul className="space-y-3 text-sm">
              {[
                { to: '/blog', label: 'Blog' },
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact Us' },
                { to: '/privacy-policy', label: 'Privacy Policy' },
                { to: '/terms-conditions', label: 'Terms & Conditions' },

              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-gray-600 hover:text-gray-800 transition-colors duration-300 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center">
                <Mail size={18} className="text-gray-600 mr-3" />
                <a
                  href="mailto:hello@sownmark.com"
                  className="text-gray-600 hover:text-gray-800 transition-colors duration-300 hover:underline"
                >
                  hello@sownmark.com
                </a>
              </li>
              <li className="text-gray-600">
                <span className="font-medium">Hours:</span> 24 Hrs
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-12 border-gray-200" />

        {/* Copyright */}
        <div className="text-center text-sm text-gray-600">
          <p>© {currentYear} Sownmark. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;