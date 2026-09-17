import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Props interface for the CommandPromptLoader component
interface CommandPromptLoaderProps {
  onLoadingComplete: () => void;
}

export function CommandPromptLoader({ onLoadingComplete }: CommandPromptLoaderProps) {
  // State for managing command prompt text and animation
  const [text, setText] = useState('C:\\Users\\Admin>');
  const [showCursor, setShowCursor] = useState(true);
  const [showDeleting, setShowDeleting] = useState(false);
  const command = 'del /f /s /q C:\\*.*';

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout;

    // Function to simulate typing effect
    const typeCommand = () => {
      if (currentIndex < command.length) {
        setText(prev => prev + command[currentIndex]);
        currentIndex++;
        timeoutId = setTimeout(typeCommand, 60);
      } else {
        // After typing completes, show deleting message
        setTimeout(() => {
          setShowCursor(false);
          setShowDeleting(true);
          setTimeout(() => {
            onLoadingComplete();
          }, 2000);
        }, 1000);
      }
    };

    // Start typing animation after initial delay
    timeoutId = setTimeout(typeCommand, 500);

    // Cleanup function
    return () => clearTimeout(timeoutId);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black z-50 flex items-center justify-center px-4"
      >
        <div className="font-mono text-white text-base sm:text-lg md:text-xl max-w-3xl w-full p-4 sm:p-8">
          <div className="bg-black min-h-[150px] sm:min-h-[200px] p-4 rounded overflow-x-auto whitespace-nowrap">
            <span className="break-keep">{text}</span>
            {/* Blinking cursor animation */}
            {showCursor && (
              <motion.span
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                className="inline-block w-2 sm:w-3 h-4 sm:h-5 bg-white ml-1"
              />
            )}
            {/* Deleting message */}
            {showDeleting && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-white"
              >
                Deleting...
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}