var webpack = require('webpack');

var base = require('./webpack.base.config.js');

var config = Object.assign({
  entry: './src/main.js',
  debug: false,
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}, base);

module.exports = config;
