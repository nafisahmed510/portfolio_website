import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Mail, Linkedin, Github } from 'lucide-react';
import { Monogram } from './Monogram';

export function Footer() {
  // Hooks for navigation and location
  const navigate = useNavigate();
  const location = useLocation();

  // Handle navigation with smooth scrolling for contact section
  const handleNavigation = (to: string) => {
    // Special handling for contact section
    if (to === '/#contact') {
      navigate('/', { state: { scrollToContact: true } });
      return;
    }

    // Regular navigation with scroll to top
    navigate(to);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'instant'
      });
    }, 0);
  };

  return (
    <footer className="mt-32 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="py-8">
          {/* Footer grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and Description Section */}
            <div className="space-y-4">
              <button
                onClick={() => handleNavigation('/')}
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="Home"
              >
                <Monogram className="h-8 w-8" />
              </button>
              <p className="text-gray-400 text-sm">
                A Proud Bengali 🐯
              </p>
            </div>

            {/* Quick Links Section */}
            <div className="space-y-4">
              <h3 className="text-silver font-semibold">Quick Links</h3>
              <div className="flex flex-col space-y-2">
                {/* Navigation buttons with hover effects */}
                <button
                  onClick={() => handleNavigation('/')}
                  className="text-left text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Home
                </button>
                <button
                  onClick={() => handleNavigation('/work')}
                  className="text-left text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Work
                </button>
                <button
                  onClick={() => handleNavigation('/about')}
                  className="text-left text-gray-400 hover:text-white transition-colors text-sm"
                >
                  About
                </button>
                <button
                  onClick={() => handleNavigation('/#contact')}
                  className="text-left text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Social Links Section */}
            <div className="space-y-4">
              <h3 className="text-silver font-semibold">Connect</h3>
              <div className="flex space-x-4">
                {/* Social media links with icons */}
                <a
                  href="https://github.com/nafisahmed510"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/nafisahmed510"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:nafisahmed510@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Nafis Ahmed. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}