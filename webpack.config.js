var base = require('./webpack.base.config.js');
var webpack = require('webpack');

let app;

if(process.argv.includes('--env:app1')){
  app = 'app1';
} else if(process.argv.includes('--env:app2')){
  app = 'app2';
} else {
  app = '';
}

var config = Object.assign(base, {
  entry: `./src/${app}/main.js`,
  output: {
    path: `./src/${app}/build/`,
    publicPath: '/build/',
    filename: '[name].js',
  },
  devtool: 'cheap-source-map',
  debug: true,
  module: Object.assign({
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  }, base.module)
});

module.exports = config;
