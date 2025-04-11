import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
      '@typescript-eslint/restrict-template-expressions': 'off',
      'react/prop-types': 'off',
      'comma-spacing': 'error',
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'max-len': [
        'warn',
        {
          code: 100,
          ignoreUrls: true,
          ignoreTemplateLiterals: true,
          ignoreStrings: true,
          ignoreTrailingComments: true,
          ignoreComments: true,
          ignoreRegExpLiterals: true,
        },
      ],
    },
  },
];

export default eslintConfig;
