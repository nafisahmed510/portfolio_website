import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

// Props interface for the ThemeToggle component
interface ThemeToggleProps {
  darkMode: boolean;
  onToggle: () => void;
}

export function ThemeToggle({ darkMode, onToggle }: ThemeToggleProps) {
  return (
    // Button container with hover and tap animations
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onToggle}
      className="p-2 rounded-full hover:bg-white/10 transition-colors"
    >
      {/* Animated icon container */}
      <motion.div
        initial={false}
        animate={{ rotate: darkMode ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {/* Render appropriate icon based on theme */}
        {darkMode ? <Moon size={20} /> : <Sun size={20} />}
      </motion.div>
    </motion.button>
  );
}