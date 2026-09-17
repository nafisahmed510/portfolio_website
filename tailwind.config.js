/** @type {import('tailwindcss').Config} */
export default {
  // Configure files to scan for utility classes
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Custom font family configuration
      fontFamily: {
        sans: ['Space Mono', 'monospace'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
      // Custom color definitions
      colors: {
        silver: '#C0C0C0',
      }
    },
  },
  plugins: [],
};