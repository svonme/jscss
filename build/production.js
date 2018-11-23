const webpack = require('webpack')
const resolve = require('./resolve')
const merge = require('webpack-merge')

// 基础配置
const webpackcommon = require('./config')
const mode = 'production'
const config = {
  devtool: false,
  mode: mode,
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[id].[chunkhash].js'
  },
  plugins: [
  ]
}

module.exports = function (_, env) {
  env.mode = mode
  return merge(webpackcommon(env), config)
}
