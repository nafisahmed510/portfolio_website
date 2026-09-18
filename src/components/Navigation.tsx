import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

export function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  // State for managing navigation visibility
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { scrollY } = useScroll();
  
  // Transform values for scroll-based animations
  const opacity = useTransform(
    scrollY,
    [0, 100],
    [1, isVisible ? 1 : 0]
  );

  const translateY = useTransform(
    scrollY,
    [0, 100],
    [0, isVisible ? 0 : -100]
  );

  // Handle scroll events for showing/hiding navigation
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Show nav when scrolling up or at top
        setIsVisible(true);
      } else if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        // Hide nav when scrolling down past threshold
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);


  return (
    <motion.nav
      style={{
        opacity,
        y: translateY,
        backgroundColor: useTransform(scrollY, [0, 100], ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.8)']),
      }}
      className="fixed w-full top-0 backdrop-blur-sm z-50 transition-all duration-300 border-b border-gray-800/50"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="logo-text text-xl tracking-wider"
          >
            <Link to="/">Nofishy</Link>
          </motion.div>
          
          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <motion.div
              whileHover={{ y: -2 }}
              className={`nav-link ${location.pathname === '/' ? 'text-white' : ''}`}
            >
              <Link to="/">Home</Link>
            </motion.div>
            <motion.div
              whileHover={{ y: -2 }}
              className={`nav-link ${location.pathname === '/about' ? 'text-white' : ''}`}
            >
              <Link to="/about">About</Link>
            </motion.div>
            <motion.a
              whileHover={{ y: -2 }}
              href="/NafisAhmedResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link border border-gray-700 rounded px-3 py-1 hover:border-gray-500 transition-colors"
            >
              Resume
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}