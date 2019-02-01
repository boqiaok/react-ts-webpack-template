const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const constants = require('./index')
const isDev = constants.APP_ENV === 'dev'

module.exports = isDev
  ? {}
  : {
      splitChunks: {
        chunks: 'all',
      },
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true, // set to true if you want JS source maps
        }),
        new OptimizeCSSAssetsPlugin({}),
      ],
    }


  //   {
  //     runtimeChunk: {
  //         name: 'manifest'
  //     },
  //     splitChunks: {
  //         cacheGroups: {
  //             default: false,
  //             commons: {
  //                 test: /[\\/]node_modules[\\/]/,
  //                 name: 'split-vendor',
  //                 chunks: 'all'
  //             }
  //         }
  //     },
  //     minimizer: [
  //         new TerserPlugin({
  //             cache: true,
  //             parallel: true,
  //             sourceMap: config.sourceMap
  //         }),
  //         new OptimizeCSSAssetsPlugin({
  //             cssProcessor: require('cssnano'),
  //             cssProcessorOptions: {
  //                 reduceIdents: false,
  //                 autoprefixer: false
  //             }
  //         })
  //     ]
  // }