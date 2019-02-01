const path = require('path')
const webpack = require('webpack')
const { assetsPath } = require('./utils')

const vendors = [
  'react',
  'react-dom',
  'react-router-dom',
  'mobx',
  'mobx-react',
  'mobx-task',
  'axios',
]
const options = {
  mode: 'production',
  entry: {
    vendor: vendors,
  },
  output: {
    publicPath: '/',
    path: path.resolve('config/dll'),
    filename: 'vendor.min.js',
    library: 'library',
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(__dirname, '[name]_manifest.json'),
      name: 'library',
      context: __dirname,
    }),
  ],
}

module.exports = options
