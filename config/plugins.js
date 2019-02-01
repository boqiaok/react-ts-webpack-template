const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const { CheckerPlugin } = require('awesome-typescript-loader')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
// const OfflinePlugin = require('offline-plugin')

const constants = require('./constants')
const config = require('./index')
const { assetsPath } = require('./utils')
const env = require('./env.json')

const oriEnv = env[constants.APP_ENV]
Object.assign(oriEnv, {
  APP_ENV: constants.APP_ENV,
})
// 照旧将webpack下发变量置于process.env
const defineEnv = {}
for (let key in oriEnv) {
  defineEnv[`process.env.${key}`] = JSON.stringify(oriEnv[key])
}

const webpackAddAssetPlugin = new AddAssetHtmlPlugin({
  filepath: path.resolve('config/dll/vendor.min.js'),
  hash: false,
  outputPath: config.extractCss ? '/dll' : '',
  publicPath: config.extractCss ? '/dll' : '',
  includeSourcemap: false,
})

const basePlugins = [
  new webpack.DefinePlugin(defineEnv),
  new MomentLocalesPlugin({
    localesToKeep: ['es-us', 'zh-cn'],
  }),
  new webpack.DllReferencePlugin({
    context: __dirname,
    manifest: path.resolve(__dirname, './vendor_manifest.json'),
  }),

  new CopyWebpackPlugin([
    {
      from: path.resolve('static'),
      to: path.resolve('dist/static'),
      ignore: ['.*'],
      cache: true,
    },
  ]),
  new CheckerPlugin(),
]

const devPlugins = [
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.resolve('config/index.html'),
    inject: true,
  }),
  webpackAddAssetPlugin
  // new CaseSensitivePathsPlugin()
]

const prodPlugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.resolve('config/index.html'),
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
      // more options:
      // https://github.com/kangax/html-minifier#options-quick-reference
    },
    // necessary to consistently work with multiple chunks via CommonsChunkPlugin
    chunksSortMode: 'dependency',
  }),
  webpackAddAssetPlugin,
  new webpack.WatchIgnorePlugin([/css\.d\.ts$/]),
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    // filename: assetsPath('css/[name].[hash].css'),
    // chunkFilename: assetsPath('css/[name].[id].[hash].css'),
    filename: assetsPath('css/[name].[hash].css'),
    chunkFilename: assetsPath('css/[name].[id].[hash].css'),
  }),
  // new OfflinePlugin()
]

if (config.bundleAnalyzerReport) {
  const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
  prodPlugins.push(new BundleAnalyzerPlugin())
}

module.exports = basePlugins.concat(
  constants.APP_ENV === 'dev' ? devPlugins : prodPlugins,
)
