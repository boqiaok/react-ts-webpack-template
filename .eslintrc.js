module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    "plugin:import/typescript",
    'prettier/@typescript-eslint',  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended',  
    "prettier/react",
  ],
  plugins: ['@typescript-eslint', 'react-hooks'],
  "parserOptions": {
      ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
      "sourceType": "module",
      ecmaFeatures: {
        impliedStrict: true,
      },
      // "project": "./tsconfig.json",
      // "tsconfigRootDir": "."
  },
  rules: {
    // 'prettier/prettier': 'warn',
    // indent: ['error', 'tab'],
    // 'linebreak-style': ['error', 'unix'],
    // quotes: ['error', 'single'],
    // semi: ['error', 'never'],
    // 'react/prop-types': 0,
    // 'react/prefer-stateless-function': [0],
    // "no-unused-vars": [0],
    // 'import/no-mutable-exports': [0], // 动态更新权限
    // 'import/prefer-default-export': 0,
    // 'max-len': [2, 150],
    // 'import/no-extraneous-dependencies': [0],
    // 'import/extensions': [0],
    // 'react/jsx-indent': [2, 2],
    // 'jsx-a11y/click-events-have-key-events': [0],
    // 'jsx-a11y/href-no-hash': [0],
    // 'jsx-a11y/no-static-element-interactions': [0],
    // 'jsx-a11y/anchor-is-valid': [0],
    // 'comma-dangle': [
    //   2,
    //   {
    //     arrays: 'always-multiline',
    //     objects: 'always-multiline',
    //     imports: 'always-multiline',
    //     exports: 'always-multiline',
    //     functions: 'ignore',
    //   },
    // ],
    // camelcase: [0],
    // "import/resolver": {
    //   "node": {
    //     "paths": ["src"]
    //   }
    // },
    // "@typescript-eslint/explicit-function-return-type": [
    //   "error",
    //   {
    //     "allowCurrying": true
    //   }
    // ],
    // "@typescript-eslint/indent": [2, 2],
    // 'no-useless-escape': [0],
    // 'import/no-unresolved': [0],
    // 'react/forbid-prop-types': [0],
    // 'react/no-array-index-key': [0],
    // '@typescript-eslint/explicit-function-return-type': [0],
    // '@typescript-eslint/no-unused-vars': [0],
    // "react/prefer-stateless-function": [0],
    // "@typescript-eslint/explicit-member-accessibility": [0],
    // "import/no-extraneous-dependencies": [0],
    // '@typescript-eslint/no-useless-constructor': [0],
    // "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", "ts", "tsx"] }]
  },
  globals: {
    document: false,
    window: false,
    require: false,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.ts', '.tsx'],
      },
    },
  },
}
