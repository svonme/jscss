const webpack = require('webpack')
const merge = require('webpack-merge')
const resolve = require('./resolve')
const webpackDevServer = require('webpack-dev-server');
// 基础配置
const webpackcommon = require('./config')
const mode = 'development'

const config = {
  mode: mode,
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: [
      'react-hot-loader/patch',
      resolve('src/app.js')
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    inline: true,
    hot: true, //实时刷新
    publicPath: '/',
    historyApiFallback : false,
    hotOnly: true,
    progress: true,
    host: '0.0.0.0',
    port: 8080
  }
}

module.exports = function (_, env) {
  if (!env) {
    env = {}
  }
  env.mode = mode
  return merge(webpackcommon(env), config)
}
