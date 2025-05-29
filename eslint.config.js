import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'], plugins: { js }, extends: ['js/recommended'],
    rules: {
      "@stylistic/no-multiple-empty-lines": ["error", { max: 1 }],
      "@stylistic/eol-last": ["error", "always"],
      "@stylistic/keyword-spacing": ["error", { after: true }],
      "@stylistic/space-before-blocks": "error",
      "@stylistic/arrow-parens": ["error", "as-needed"],
      "@stylistic/no-trailing-spaces": "error",
      "@stylistic/indent": ["error", 2],
      "@stylistic/semi": ["error", "never"],
      "@stylistic/comma-dangle": ["error", "always-multiline"],
    },
  },
  { files: ['**/*.{js,mjs,cjs}'], languageOptions: { globals: globals.browser } },
])
