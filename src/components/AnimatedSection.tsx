import React, { ReactNode, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}

// Entrance animation must never be what decides whether content is readable.
// This component previously held everything at opacity 0 until an
// IntersectionObserver callback arrived — and those are not delivered in a
// background tab, so a visitor who opened the site in a background tab (the
// normal way a recruiter opens a link) got a blank page for as long as they
// left it there. Same failure the loader had: an animation treated as a gate.
function revealWithoutAnimating() {
  if (typeof window === 'undefined') return true;
  const reducedMotion =
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  return reducedMotion || document.hidden;
}

export function AnimatedSection({ children, className = '' }: AnimatedSectionProps) {
  // Decided once at mount: if the tab is hidden now, the observer may never
  // report, so show the content outright. If the tab is visible, animate.
  const skipAnimation = useMemo(revealWithoutAnimating, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '50px',
    skip: skipAnimation,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const show = skipAnimation || inView;

  return (
    <motion.div
      ref={ref}
      initial={skipAnimation ? 'visible' : 'hidden'}
      animate={show ? 'visible' : 'hidden'}
      variants={variants}
      transition={skipAnimation ? { duration: 0 } : { duration: 0.6, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
