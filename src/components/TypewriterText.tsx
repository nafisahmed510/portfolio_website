import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Props interface for the TypewriterText component
interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function TypewriterText({ text, className = '', delay = 0 }: TypewriterTextProps) {
  // State for managing displayed text and cursor visibility
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    // Function to start the typewriter animation
    const startAnimation = () => {
      // Start with first character
      setDisplayText('H');
      
      setTimeout(() => {
        // Hide cursor after initial character
        setShowCursor(false);
        
        let currentIndex = 1;
        // Function to type next character
        const typeNextLetter = () => {
          if (currentIndex <= text.length) {
            setDisplayText(text.slice(0, currentIndex));
            currentIndex++;
            timeoutId = setTimeout(typeNextLetter, 50);
          }
        };
        
        timeoutId = setTimeout(typeNextLetter, 50);
      }, 200);
    };

    // Start animation after specified delay
    timeoutId = setTimeout(startAnimation, delay);

    // Cleanup function
    return () => clearTimeout(timeoutId);
  }, [text, delay]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={className}
    >
      <span className="font-mono">
        {displayText}
        {/* Blinking cursor animation */}
        {showCursor && <span className="animate-blink text-silver">|</span>}
      </span>
    </motion.div>
  );
}