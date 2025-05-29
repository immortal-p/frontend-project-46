import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'


export default defineConfig([
  { files: ['**/*.{js,mjs,cjs}'], plugins: { js }, extends: ['js/recommended'], rules: { 'semi': ['error', 'never'], 'quotes': ['error', 'single'], 'indent': ['error', 2], 'comma-dangle': ['error', 'always-multiline'] } },
  { files: ['**/*.{js,mjs,cjs}'], languageOptions: { globals: globals.browser } },
])