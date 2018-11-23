const resolve = require('./resolve')
const merge = require('webpack-merge')
const webpackcommon = require('./config')
const mode = 'development'

const config = {
  mode: mode,
  devtool: 'cheap-module-eval-source-map',
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[id].[chunkhash].js'
  },
  entry: {
    app: resolve('src/app.js')
  }
}

module.exports = function (_, env) {
  return merge(webpackcommon(Object.assign({}, env, {
    'mode': 'test'
  })), config)
}
