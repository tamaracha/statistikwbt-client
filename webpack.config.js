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
        loader: 'ng-annotate?add=true!babel!jshint'
      },
      {
        loader: 'style!css',
        test: /\.css$/,
      },
      {
        loader: `jade-html?doctype=html&basedir=${__dirname}/src`,
        test: /\.jade$/
      },
      {
        loader: 'json!yaml',
        test: /(.yaml|.yml)/
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
      'angular-bootstrap': __dirname+'/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
      oclazyload: __dirname+'/bower_components/oclazyload/dist/ocLazyLoad.js'
    }
  }
};
