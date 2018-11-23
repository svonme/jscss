/*
  基础配置
*/
const resolve = require('./resolve')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function config (env) {
  let option = {
    mode: `"${env.mode}"`,
    NODE_ENV: `"${env.mode}"`,
  }
  return {
    entry: {
      app: resolve('src/app'),
      style: resolve('src/style'),
    },
    output: {
      path: resolve('dest'),
      filename: '[name].js',
      publicPath: '/'
    },
    //更多配置项
  	resolve: {
  		//自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
  		extensions: ['.js', '.jsx', '.css', '.scss'],
      alias : {
        // src 源码跟目录
        '@': resolve('src')
      }
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: ['babel-loader'],
          exclude: /node_modules/,
        },
        {
          test:/\.(sass|scss)$/,
          exclude: /node_modules/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              query: {
                minimize: true,
                modules: false,
                importLoaders: true,
                localIdentName: '[hash:6]'
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: resolve('index.ejs'),
        filename: resolve('dest/index.html'),
        chunksSortMode: 'dependency',
        title: 'react',
        opt: {
          mode: env.mode
        },
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true
        },
      }),
      // 全局模块对象
      new webpack.ProvidePlugin({
      	React: 'react',
      	ReactDOM: 'react-dom',
      }),
      new webpack.DefinePlugin({
        'process.env': option
      }),
    ]
  }
}

module.exports = config
