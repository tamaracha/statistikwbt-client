//var _=require('lodash');
var gulp=require('gulp');
var del=require('del');
var webpackConfig=require('./webpack.config.js');
var $=require('gulp-load-plugins')();
$.webpack=require('webpack')(webpackConfig);

function clean(cb){
  del('dist/*',cb);
}
gulp.task('clean',clean);

function jade(){
  return gulp.src('src/index.jade')
  .pipe($.jade({doctype: 'html'}))
  .pipe(gulp.dest('dist'));
}
gulp.task('jade',jade);

function webpack(cb){
  return $.webpack.run(cb);
}
gulp.task('webpack',webpack);

function compress(){
  return gulp.src('dist/*')
  .pipe($.gzip())
  .pipe(gulp.dest('dist'));
}
gulp.task('compress',compress);

gulp.task('default',gulp.series([
  'clean',
  gulp.parallel([
    'jade',
    'webpack'
  ]),
  'compress'
]));
