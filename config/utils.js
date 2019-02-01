const path = require('path')

const config = require('./index')

exports.assetsPath = function(_path) {
    return path.posix.join(config.assetsSubDirectory, _path)
}

exports.resolve = function(dir) {
    return path.join(__dirname, './../', dir)
}
