import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define Bengali characters to be used in the Matrix effect
const bengaliChars = 'অ আ ই ঈ উ ঊ ঋ এ ঐ ও ঔ ক খ গ ঘ ঙ চ ছ জ ঝ ঞ ট ঠ ড ঢ ণ ত থ দ ধ ন প ফ ব ভ ম য র ল শ ষ স হ ড় ঢ় য়';

// Define props interface for the loader component
interface BengaliMatrixLoaderProps {
  onLoadingComplete: () => void;
}

export function BengaliMatrixLoader({ onLoadingComplete }: BengaliMatrixLoaderProps) {
  // Create refs and state for managing the canvas and animation
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Get canvas and context
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Function to handle canvas resizing
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Matrix rain configuration
    const fontSize = 20; // Size of each character
    const columns = Math.floor(canvas.width / fontSize); // Calculate number of columns
    const drops: number[] = new Array(columns).fill(1); // Initialize drop positions
    const chars: string[] = new Array(columns).fill(''); // Initialize characters
    
    // Define different shades of grey for visual variety
    const greys = [
      '#CCCCCC', // light grey
      '#999999', // medium grey
      '#666666', // darker grey
      '#808080'  // neutral grey
    ];

    // Animation timing configuration
    let frame = 0;
    const totalFrames = 45; // 0.75 seconds at 60fps

    // Set font for Bengali characters
    ctx.font = `${fontSize}px "Noto Sans Bengali"`;

    // Main animation drawing function
    const draw = () => {
      // Create fade effect with semi-transparent background
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw each column of characters
      for (let i = 0; i < drops.length; i++) {
        // Select random Bengali character
        const charArray = bengaliChars.split(' ');
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        
        // Select random grey color
        const grey = greys[Math.floor(Math.random() * greys.length)];
        ctx.fillStyle = grey;
        
        // Draw the character at its position
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        // Create bright white leading character for emphasis
        if (Math.random() > 0.975) {
          ctx.fillStyle = '#FFFFFF';
          ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        }

        // Reset drop position when it reaches bottom
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      frame++;

      // Handle fade out effect
      if (frame > totalFrames) {
        // Gradually increase opacity of black overlay
        ctx.fillStyle = `rgba(0, 0, 0, ${(frame - totalFrames) / 45})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Complete the animation after fade out
        if (frame > totalFrames + 45) {
          setIsComplete(true);
          setTimeout(onLoadingComplete, 375);
          return;
        }
      }

      // Continue animation loop
      requestAnimationFrame(draw);
    };

    // Start the animation
    const animationFrame = requestAnimationFrame(draw);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrame);
    };
  }, [onLoadingComplete]);

  // Render the loader component
  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black"
        >
          <canvas
            ref={canvasRef}
            className="w-full h-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}