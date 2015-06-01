var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: './dist'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'ng-annotate!babel!jshint'
      },
      {
        loader: 'jade?doctype=html',
        test: /\.jade$/
      }
    ]
  },
  plugins: [
    new WebpackNotifierPlugin()
  ],
  externals: {
    angular: 'angular',
    lodash: '_',
    d3: 'd3',
    MathJax: 'MathJax',
    vega: 'vg'
  },
  resolve: {
    alias: {
      ngstorage: __dirname+'/bower_components/ngstorage/ngStorage.min.js'
    }
  },
  jshint: {
    esnext: true
  }
};
