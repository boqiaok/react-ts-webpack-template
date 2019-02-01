const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const precss = require('precss')
const autoprefixer = require('autoprefixer')

const config = require('../index')
const { resolve } = require('../utils')
// const theme = require('./../../theme')

const cssModulesLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    sourceMap: config.extractCsstrue,
    localIdentName: '[local]__[hash:base64:5]',
    minimize: true,
  },
}

const sassLoader = {
  loader: 'sass-loader',
  options: {
    includePaths: [require('bourbon').includePaths, resolve('src/styles')],
  },
}

const lessLoader = {
  loader: 'less-loader',
  options: {
    javascriptEnabled: true,
    // modifyVars: theme
  },
}

const typingsForCssModulesLoader = {
  loader: 'typings-for-css-modules-loader',
  options: {
    modules: true,
    namedExport: true,
    camelCase: true,
    sass: true,
  },
}

const cacheLoader = {
  loader: 'cache-loader',
  options: {
    // provide a cache directory where cache items should be stored
    cacheDirectory: resolve('.cache-loader'),
  },
}

const postCssLoader = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    plugins: () => [precss(), autoprefixer({ browsers: ['IE >= 9'] })],
  },
}

module.exports = [
  {
    test: /\.css$/,
    include: [resolve('node_modules')],
    use: [
      config.extractCss ? MiniCssExtractPlugin.loader : 'style-loader',
      cacheLoader,
      'css-loader',
      postCssLoader,
    ],
  },
  {
    test: /\.scss$/,
    include: [resolve('src')],
    exclude: /\.module\.scss$/,
    rules: [
      {
        use: [
          config.extractCss ? MiniCssExtractPlugin.loader : 'style-loader',
          // typingsForCssModulesLoader,
          'css-loader',
          postCssLoader,
          sassLoader,
        ],
      },
    ],
  },
  {
    test: /\.module\.scss$/,
    use: [
      config.extractCss ? MiniCssExtractPlugin.loader : 'style-loader',
      cssModulesLoader,
      postCssLoader,
      sassLoader,
    ],
  },
  {
    // for ant design
    test: /\.less$/,
    exclude: /\.module\.less$/,
    rules: [
      {
        use: [
          config.extractCss ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          postCssLoader,
          lessLoader,
        ],
      },
    ],
  },
  {
    test: /\.module\.less$/,
    use: [
      config.extractCss ? MiniCssExtractPlugin.loader : 'style-loader',
      cssModulesLoader,
      postCssLoader,
      lessLoader,
    ],
  },
]
