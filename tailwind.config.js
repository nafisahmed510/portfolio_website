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
        // Monochrome by choice: black, grey, white. Hierarchy comes from
        // weight, size and spacing rather than colour.
        ink: '#0A0A0A',
      }
    },
  },
  plugins: [],
};