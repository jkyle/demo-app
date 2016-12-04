var webpack = require('webpack');

var path = require('path');
var basePath = path.resolve('./src');

module.exports = {
  output: {
    filename: './build/[name].js',
  },
  module: {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-object-rest-spread']
        }
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader?sourceMap&modules&importLoaders=1!stylus-loader?paths=' + basePath + '/common/styles'
      }, {
        test: /\.html$/,
        loader: 'html'
      }
    ]
  },
  stylus: {
    use: [require('nib')()],
    import: ['~nib/lib/nib/index.styl']
  },
  resolve: {
    extensions: ['', '.js', '.styl'],
    alias: {
      base: basePath,
      appraise: basePath,
      '@app1': basePath + '/app1',
      '@app2': basePath + '/app2',
      '@resources': basePath + '/resources',
      '@common': basePath + '/common',
      '@styles': basePath + '/common/styles'
    }
  },
  cache: true
};
