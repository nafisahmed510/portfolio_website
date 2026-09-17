import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Bengali characters used in the Matrix rain effect
const bengaliChars =
  'অ আ ই ঈ উ ঊ ঋ এ ঐ ও ঔ ক খ গ ঘ ঙ চ ছ জ ঝ ঞ ট ঠ ড ঢ ণ ত থ দ ধ ন প ফ ব ভ ম য র ল শ ষ স হ ড় ঢ় য়'.split(' ');

// Timing is wall-clock based, never frame-count based: a throttled or
// low-FPS tab must not change how long the visitor waits.
const RAIN_MS = 900; // rain phase
const FADE_MS = 600; // fade-to-black phase
const EXIT_MS = 350; // framer-motion exit
// Absolute ceiling. If rAF is throttled (background tab), paused, or the
// canvas fails outright, this fires and the site renders anyway.
const HARD_TIMEOUT_MS = RAIN_MS + FADE_MS + 700;

interface BengaliMatrixLoaderProps {
  onLoadingComplete: () => void;
}

export function BengaliMatrixLoader({ onLoadingComplete }: BengaliMatrixLoaderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isComplete, setIsComplete] = useState(false);

  // Keep the latest callback in a ref so the animation effect never re-runs
  // just because the parent handed us a new inline function.
  const onCompleteRef = useRef(onLoadingComplete);
  onCompleteRef.current = onLoadingComplete;

  // Guarantees the site is revealed exactly once, whichever path gets there
  // first: natural end, hard timeout, user skip, or an unsupported canvas.
  const finishedRef = useRef(false);
  const finish = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    setIsComplete(true);
    window.setTimeout(() => onCompleteRef.current(), EXIT_MS);
  }, []);

  // Skip on any click, tap or key press.
  useEffect(() => {
    const skip = () => finish();
    window.addEventListener('pointerdown', skip);
    window.addEventListener('keydown', skip);
    return () => {
      window.removeEventListener('pointerdown', skip);
      window.removeEventListener('keydown', skip);
    };
  }, [finish]);

  // Safety net — independent of rAF and of the canvas working at all.
  useEffect(() => {
    const t = window.setTimeout(finish, HARD_TIMEOUT_MS);
    return () => window.clearTimeout(t);
  }, [finish]);

  useEffect(() => {
    // Visitors who prefer reduced motion, and tabs that open in the
    // background, get no animation at all — just the site.
    const prefersReducedMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || document.hidden) {
      finish();
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) {
      finish();
      return;
    }

    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const fontSize = 20;
    let columns = 0;
    let drops: number[] = [];

    const resize = () => {
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.font = `${fontSize}px "Noto Sans Bengali", "Hind Siliguri", sans-serif`;
      const next = Math.floor(window.innerWidth / fontSize);
      if (next !== columns) {
        columns = next;
        drops = new Array(columns).fill(1);
      }
    };
    resize();
    window.addEventListener('resize', resize);

    const greys = ['#CCCCCC', '#999999', '#666666', '#808080'];
    const start = performance.now();

    const draw = (now: number) => {
      const elapsed = now - start;
      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < drops.length; i++) {
        const char = bengaliChars[Math.floor(Math.random() * bengaliChars.length)];
        ctx.fillStyle = greys[Math.floor(Math.random() * greys.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        // Bright leading character
        if (Math.random() > 0.975) {
          ctx.fillStyle = '#FFFFFF';
          ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        }

        if (drops[i] * fontSize > height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }

      // Fade out by elapsed time, so a slow device fades just as quickly.
      if (elapsed > RAIN_MS) {
        const progress = Math.min((elapsed - RAIN_MS) / FADE_MS, 1);
        ctx.fillStyle = `rgba(0, 0, 0, ${progress})`;
        ctx.fillRect(0, 0, width, height);
        if (progress >= 1) {
          finish();
          return;
        }
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(raf);
    };
  }, [finish]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: EXIT_MS / 1000 }}
          className="fixed inset-0 z-50 bg-black"
          role="status"
          aria-label="Loading"
        >
          <canvas ref={canvasRef} className="w-full h-full" aria-hidden="true" />
          <button
            type="button"
            onClick={finish}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-widest text-gray-500 hover:text-gray-300 transition-colors"
          >
            SKIP
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
