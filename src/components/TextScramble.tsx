import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Props interface for the TextScramble component
interface TextScrambleProps {
  text: string;
  delay?: number;
}

// Characters used for scramble effect, including Japanese katakana and special characters
const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ><[]{}!@#$%^&*';

export function TextScramble({ text, delay = 0 }: TextScrambleProps) {
  // State for managing displayed text and animation status
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(true);
  const frameRef = useRef<number>();
  
  useEffect(() => {
    let currentLength = 0;
    let iterations = 0;
    const maxIterations = 2; // Number of scramble cycles
    const frameRate = 1000 / 60; // 60 FPS for smooth animation
    let lastFrameTime = 0;
    
    // Calculate start time including initial delay
    const startTime = Date.now() + delay;
    
    // Main animation function
    const animate = (timestamp: number) => {
      const now = Date.now();
      
      // Wait for delay before starting animation
      if (now < startTime) {
        frameRef.current = requestAnimationFrame(animate);
        return;
      }

      // Control animation frame rate
      if (timestamp - lastFrameTime < frameRate) {
        frameRef.current = requestAnimationFrame(animate);
        return;
      }
      
      lastFrameTime = timestamp;
      let newText = '';
      const progress = currentLength / text.length;
      
      // Generate scrambled text
      for (let i = 0; i < text.length; i++) {
        if (i < currentLength) {
          if (iterations >= maxIterations) {
            newText += text[i]; // Show final character
          } else {
            // Randomly show either actual or scrambled character
            newText += Math.random() > 0.7 ? text[i] : chars[Math.floor(Math.random() * chars.length)];
          }
        } else {
          // Show scrambled character for unrevealed positions
          newText += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      
      setDisplayText(newText);
      
      // Handle animation completion
      if (currentLength >= text.length) {
        iterations++;
        if (iterations >= maxIterations) {
          setDisplayText(text);
          setIsAnimating(false);
          return;
        }
      } else if (progress > 0.1) {
        currentLength += 2; // Increment by 2 for faster progression
      }
      
      frameRef.current = requestAnimationFrame(animate);
    };
    
    // Initialize animation
    setDisplayText('');
    frameRef.current = requestAnimationFrame(animate);
    
    // Fallback timeout to ensure animation completes
    const timeout = setTimeout(() => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      setDisplayText(text);
      setIsAnimating(false);
    }, 1500);
    
    // Cleanup function
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      clearTimeout(timeout);
    };
  }, [text, delay]);
  
  return (
    <span className={`inline-block ${isAnimating ? 'scramble-text' : ''}`}>
      {displayText || text}
    </span>
  );
}

// Wrapper component for animated titles
export function AnimatedTitle({ children, className = '', delay = 0 }: { children: string, className?: string, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className={className}
    >
      <TextScramble text={children} delay={delay} />
    </motion.div>
  );
}