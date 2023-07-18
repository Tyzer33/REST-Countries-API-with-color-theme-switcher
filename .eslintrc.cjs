module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:react/jsx-runtime',
    'prettier',
    'plugin:styled-components-a11y/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module', project: ['./tsconfig.json'] },
  plugins: ['react-refresh', 'styled-components-a11y'],
  rules: {
    'react-refresh/only-export-components': 'warn',
  },
}
