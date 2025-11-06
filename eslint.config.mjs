import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettierConfig from 'eslint-config-prettier/flat';
import prettierPlugin from 'eslint-plugin-prettier/recommended';

const eslintConfig = defineConfig([
  // base from Next.js
  ...nextVitals,
  ...nextTs,

  // rules overrides
  {
    rules: {
      'react/display-name': 'off',
      'prettier/prettier': 'error',
      'react/no-array-index-key': 'error',
      curly: ['warn', 'all'],
      'arrow-body-style': ['warn', 'as-needed'],
      'no-unused-vars': 'error',
    },
  },

  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),

  // prettier integration
  prettierConfig,
  prettierPlugin,
]);

export default eslintConfig;
