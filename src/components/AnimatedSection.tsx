import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Props interface for the AnimatedSection component
interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedSection({ children, className = '' }: AnimatedSectionProps) {
  // Set up intersection observer for animation trigger
  const [ref, inView] = useInView({
    triggerOnce: true,    // Only trigger animation once
    threshold: 0.1,       // Trigger when 10% of element is visible
    rootMargin: '50px',   // Start animation slightly before element enters viewport
  });

  // Animation variants for fade-in effect
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}