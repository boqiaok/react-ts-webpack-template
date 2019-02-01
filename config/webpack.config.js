const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CheckerPlugin } = require('awesome-typescript-loader')
const jsRules = require('./rules/jsRules')
const styleRules = require('./rules/styleRules')
const fileRules = require('./rules/fileRules')
const plugins = require('./plugins')
const optimization = require('./optimization')
const { assetsRoot, assetsPublicPath } = require('./index')
const { assetsPath, resolve } = require('./utils')
const constants = require('./constants')

const config = require('./index')

const conf = {
  devtool: config.sourceMap ? 'source-map' : false,
  entry: {
    index: path.resolve('src/app.tsx'),
  },
  output: {
    path: assetsRoot,
    filename:
      constants.APP_ENV === 'dev'
        ? '[name].js'
        : 'scripts/[name].[chunkhash].js',
    publicPath: assetsPublicPath,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    // alias: {
    //   '@': path.resolve('src'),
    // },
    plugins: [
      new TsconfigPathsPlugin({
        configFile: resolve('tsconfig.webpack.json'),
        extensions: constants.FILE_EXTENSIONS,
      }),
    ],
  },
  module: {
    rules: [
      ...jsRules,
      ...styleRules,
      ...fileRules,
    ],
  },
  plugins,
  optimization,
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    // open: true,
    compress: false,
    clientLogLevel: 'none',
    port: config.port,
    hot: true,
    historyApiFallback: true,
    disableHostCheck: true,
    host: '0.0.0.0',
    // inline: true,
    // hotOnly: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
}

module.exports = conf
