import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BengaliMatrixLoader } from './components/BengaliMatrixLoader';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';

function App() {
  // State to manage loading screen visibility
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Initial loading screen with Bengali Matrix effect */}
      {isLoading && <BengaliMatrixLoader onLoadingComplete={() => setIsLoading(false)} />}
      
      <AnimatePresence>
        {/* Main content rendered after loading */}
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-black relative"
          >
            {/* Background glow effect */}
            <div className="fixed inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(128,128,128,0.3)_0%,_rgba(0,0,0,0)_70%)]" />
            </div>

            {/* Navigation component */}
            <Navigation />
            
            {/* Route configuration */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>

            {/* Footer component */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;