module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'airbnb',
    'plugin:storybook/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: false,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', 'import', '@typescript-eslint', 'jest', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.tsx', '.jsx'] }],
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'arrow-body-style': ['warn', 'as-needed'],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: true,
      },
    ],
    'import/extensions': ['error', 'never', { json: 'always' }],
    'react/jsx-props-no-spreading': ['error', { custom: 'ignore' }],
    'max-len': ['error', { code: 128 }],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        // use <root>/path/to/folder/tsconfig.json
        project: 'tsconfig.json',
      },
    },
  },
  ignorePatterns: ['src/stories/*.tsx'],
};
