import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// The glyph settles on the H that the hero opens with. Cycling Bengali and
// Latin characters keeps the nod to the old Matrix loader without the cliché,
// and the loader occupies exactly the position the real headline will.
const GLYPHS = [
  'অ','আ','ক','খ','গ','ঘ','চ','ছ','জ','ঝ','ট','ঠ','ড','ণ','ত','থ','দ','ধ','ন',
  'প','ফ','ব','ভ','ম','য','র','ল','শ','ষ','স','হ',
  'A','B','D','E','F','K','M','N','R','S','T','X','Z','0','1','7','9',
];

const CYCLE_MS = 55;    // glyph swap rate
const RUN_MS = 1100;    // cycling phase
const SETTLE_MS = 380;  // the H holds before the site appears
const EXIT_MS = 320;
const HARD_TIMEOUT_MS = RUN_MS + SETTLE_MS + 700;

interface LetterLoaderProps {
  onLoadingComplete: () => void;
}

export function LetterLoader({ onLoadingComplete }: LetterLoaderProps) {
  const [glyph, setGlyph] = useState('অ');
  const [isComplete, setIsComplete] = useState(false);

  const onCompleteRef = useRef(onLoadingComplete);
  onCompleteRef.current = onLoadingComplete;

  const finishedRef = useRef(false);
  const finish = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    setGlyph('H');
    setIsComplete(true);
    window.setTimeout(() => onCompleteRef.current(), EXIT_MS);
  }, []);

  // Skip on any interaction.
  useEffect(() => {
    const skip = () => finish();
    window.addEventListener('pointerdown', skip);
    window.addEventListener('keydown', skip);
    return () => {
      window.removeEventListener('pointerdown', skip);
      window.removeEventListener('keydown', skip);
    };
  }, [finish]);

  // Safety net, independent of any animation frame.
  useEffect(() => {
    const t = window.setTimeout(finish, HARD_TIMEOUT_MS);
    return () => window.clearTimeout(t);
  }, [finish]);

  useEffect(() => {
    const reducedMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion || document.hidden) {
      finish();
      return;
    }

    // setInterval, not requestAnimationFrame: this is a discrete swap on a
    // wall clock, and rAF stalls in background tabs.
    const cycle = window.setInterval(() => {
      setGlyph(GLYPHS[Math.floor(Math.random() * GLYPHS.length)]);
    }, CYCLE_MS);

    const settle = window.setTimeout(() => {
      window.clearInterval(cycle);
      setGlyph('H');
      window.setTimeout(finish, SETTLE_MS);
    }, RUN_MS);

    return () => {
      window.clearInterval(cycle);
      window.clearTimeout(settle);
    };
  }, [finish]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: EXIT_MS / 1000 }}
          className="fixed inset-0 z-50 bg-ink"
          role="status"
          aria-label="Loading"
        >
          {/* Same container, padding and type scale as the hero, so the glyph
              stands exactly where the headline's H will land. */}
          <div className="pt-32 md:pt-40 px-6">
            <div className="container mx-auto max-w-6xl">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
                <div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-500 mb-2 flex items-center">
                    <span className="tabular-nums">{glyph}</span>
                    <span
                      aria-hidden="true"
                      className="animate-blink ml-1 inline-block w-[0.07em] self-stretch bg-gray-500"
                      style={{ minHeight: '1em' }}
                    />
                  </div>
                </div>
                <div />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
