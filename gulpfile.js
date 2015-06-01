var _=require('lodash');
var gulp=require('gulp');
var $=require('gulp-load-plugins')();
var webpackConfig=require('./webpack.config.js');
$.webpack=require('webpack')(webpackConfig);

gulp.task('jade',jade);
function jade(){
  return gulp.src('src/index.jade')
  .pipe($.jade({doctype: 'html'}))
  .pipe(gulp.dest('dist'));
}

gulp.task('webpack',webpack);
function webpack(cb){
  return $.webpack.run(cb);
}

gulp.task('compress',compress);
function compress(){
  return gulp.src([
    'dist/index.html',
    'dist/bundle.js'
  ])
  .pipe($.gzip())
  .pipe(gulp.dest('dist'));
}

gulp.task('default',gulp.series([
  gulp.parallel([
    'jade',
    'webpack'
  ]),
  'compress'
]));
