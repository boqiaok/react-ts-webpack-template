### 

```
extends: [
  'airbnb',
  'plugin:@typescript-eslint/recommended',
  // "plugin:import/typescript",   -----> 出错 
  'prettier/@typescript-eslint',  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
  'plugin:prettier/recommended',  
  "prettier/react",
],
```
Parse errors in imported module './router': Cannot find module 'typescript-eslint-parser' (undefined:undefined)eslint(import/no-named-as-default)

等待 发版之后 解决 'typescript-eslint-parser'  已经弃用了。

配置了 settings的配置之后  
```
'import/extensions': allExtensions,
'import/parsers': {
  '@typescript-eslint/parser': tsExtensions
},
'import/resolver': {
  'node': {
    'extensions': allExtensions
  }
}
```

https://github.com/benmosher/eslint-plugin-import/commit/bdc05aa1d029b70125ae415e5ca5dca22250858b

https://github.com/benmosher/eslint-plugin-import/issues/1285 解决方案 在发最新版之前的解决方案