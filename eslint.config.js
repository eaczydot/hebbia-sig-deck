import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
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
      // NOTE: Our codebase uses Framer Motion's `motion` in JSX member expressions (e.g. `<motion.div />`).
      // ESLint's core `no-unused-vars` can mis-detect those as unused in some setups, so we ignore `motion`.
      'no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^[A-Z_]|^motion$',
          argsIgnorePattern: '^[A-Z_]',
        },
      ],
      // This codebase intentionally uses dynamic route-driven component selection and `React.lazy()`.
      // The `static-components` rule is too strict for this pattern.
      'react-hooks/static-components': 'off',
    },
  },
])
