import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    // Configure React plugin with automatic JSX runtime
    react({
      jsxRuntime: 'automatic',
      // Configure Babel plugins
      babel: {
        plugins: [
          '@babel/plugin-transform-react-jsx'
        ]
      }
    })
  ],
  // Dependency optimization configuration
  optimizeDeps: {
    // Include React dependencies for pre-bundling
    include: ['react', 'react-dom'],
    // Exclude Lucide React to prevent pre-bundling issues
    exclude: ['lucide-react']
  }
});