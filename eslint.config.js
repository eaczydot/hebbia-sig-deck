import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'
import designSystem from './eslint-rules/design-system.js'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    plugins: {
      'design-system': designSystem,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '(^[A-Z_]|^motion$)',
          argsIgnorePattern: '^[A-Z_]',
        },
      ],
    },
  },
  {
    files: ['src/components/templates/**/*.{js,jsx}'],
    rules: {
      'design-system/no-raw-colors': 'error',
      'design-system/no-px-values': 'error',
    },
  },
  {
    files: ['src/slides/**/*.jsx'],
    rules: {
      'design-system/no-absolute-positioning': 'error',
    },
  },
])
