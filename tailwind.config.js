/** @type {import('tailwindcss').Config} */
export default {
  // Configure files to scan for utility classes
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Custom font family configuration
      fontFamily: {
        // Inter carries everything readable; monospace is reserved for labels,
        // tags and the diagram, where the technical texture actually means
        // something. Body copy set in mono is the main amateur tell.
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Space Mono', 'ui-monospace', 'monospace'],
      },
      // Custom color definitions
      colors: {
        silver: '#C0C0C0',
        // Single accent, used sparingly: the name, primary buttons, links.
        accent: {
          DEFAULT: '#7C7CF9',
          hover: '#6B6BF0',
          soft: '#A5A5FB',
        },
        ink: '#0B0B10',
      }
    },
  },
  plugins: [],
};