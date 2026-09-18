import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LetterLoader } from './components/LetterLoader';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { WorkPage } from './pages/WorkPage';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  // State to manage loading screen visibility
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Initial loading screen: a single glyph settling into the hero's H */}
      {isLoading && <LetterLoader onLoadingComplete={() => setIsLoading(false)} />}
      
      <AnimatePresence>
        {/* Main content rendered after loading */}
        {!isLoading && (
          <motion.div
            className="min-h-screen bg-ink relative"
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
              <Route path="/work" element={<WorkPage />} />
              <Route path="/about" element={<AboutPage />} />
              {/* Catch-all: Netlify serves index.html for every path, so without
                  this an unknown URL rendered nav + footer around an empty void. */}
              <Route path="*" element={<NotFoundPage />} />
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