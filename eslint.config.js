// eslint.config.js
import js from '@eslint/js';
import globals from 'globals'; 

export default [
  js.configs.recommended, 
  {
    languageOptions: {
      globals: {
        ...globals.node, 
        ...globals.jest,
      },
    },
    rules: {
      'no-console': 'off', 
    },
  },
];