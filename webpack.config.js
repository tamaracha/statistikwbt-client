var webpack=require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: './dist',
    publicPath: 'dist/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'ng-annotate!babel!jshint'
      },
      {
        loader: 'style!css',
        test: /\.css$/,
      },
      {
        loader: 'jade-html?doctype=html',
        test: /\.jade$/
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
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
      ngstorage: __dirname+'/bower_components/ngstorage/ngStorage.min.js',
      'angular-ui-router': __dirname+'/bower_components/angular-ui-router/release/angular-ui-router.min.js',
      'angular-ui-router.stateHelper': __dirname+'/bower_components/angular-ui-router.stateHelper/statehelper.min.js',
      'angular-bootstrap': __dirname+'/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
      'angular-breadcrumb': __dirname+'/bower_components/angular-breadcrumb/release/angular-breadcrumb.min.js',
      oclazyload: __dirname+'/bower_components/oclazyload/dist/ocLazyLoad.min.js'
    }
  }
};
