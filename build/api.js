const _ = require('lodash')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')

let config = require('./development')()
let { devServer, entry } = config

for (let key in entry) {
  entry[key] = [].concat(entry[key])
  entry[key].unshift("webpack-dev-server/client?/", 'webpack/hot/dev-server')
}

const compile = webpack(_.omit(config, ['devServer']))
const server = new WebpackDevServer(compile, devServer)
const app = server.app

server.listen(devServer.port, devServer.host, function(err) {
  if (err) {
    console.log(err)
  }
  console.log('runing')
})

app.get('/hello', function(req, res){
  res.send('hello')
})
