const path = require('path')

// const constants = {}
const constants = require('./constants')
// 静态资源访问域名（CDN）
const STATICDOMAIN = constants.APP_ENV === 'prod' ? '' : ''

module.exports = {
  port: 8000,
  bundleAnalyzerReport: process.env.report,
  // index: path.resolve(__dirname, `./../dist/${constants.APP_ENV}/index.html`),
  assetsRoot: path.resolve(__dirname, `./../dist/${constants.APP_ENV}`),
  assetsPublicPath: constants.APP_ENV === 'dev' ? '/' : `${STATICDOMAIN}/`,
  assetsSubDirectory: '',
  // 正式环境接入sentry需要sourceMap
  sourceMap: constants.APP_ENV !== 'qa', // 打包source
  extractCss: constants.APP_ENV !== 'dev',
  // Run the build command with an extra argument to
  // View the bundle analyzer report after build finishes:
  // `npm run build --report`
  // Set to `true` or `false` to always turn it on or off
  // bundleAnalyzerReport: process.env.npm_config_report
}

