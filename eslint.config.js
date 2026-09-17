import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  // Ignore distribution files
  { ignores: ['dist'] },
  {
    // Extend recommended configurations
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    // Apply to TypeScript and TSX files
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      // Set ECMAScript version
      ecmaVersion: 2020,
      // Include browser globals
      globals: globals.browser,
    },
    // Configure plugins
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    // Configure rules
    rules: {
      // Include recommended React Hooks rules
      ...reactHooks.configs.recommended.rules,
      // Configure React Refresh rules
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  }
);