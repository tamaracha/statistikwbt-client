'use strict';
//var _=require('lodash');
var gulp=require('gulp');
var del=require('del');
var webpack=require('webpack');
var $=require('gulp-load-plugins')();
$.webpack_dev=webpack(require('./webpack.config.js'));
$.webpack_prod=webpack(require('./webpack.config.min.js'));
var angularVersion='1.4.3';
function clean(cb){
  del('dist/*',cb);
}
gulp.task('clean',clean);

function jade_dev(){
  return gulp.src('src/index.jade')
  .pipe($.jade({
    locals: {env: 'development',angularVersion},
    doctype: 'html'
  }))
  .pipe(gulp.dest('dist'));
}
gulp.task('jade_dev',jade_dev);
function jade_prod(){
  return gulp.src('src/index.jade')
  .pipe($.jade({
    locals: {env: 'production',angularVersion},
    doctype: 'html'
  }))
  .pipe(gulp.dest('dist'));
}
gulp.task('jade_prod',jade_prod);

function webpack_dev(cb){
  return $.webpack_dev.run(cb);
}
gulp.task('webpack_dev',webpack_dev);

function webpack_prod(cb){
  return $.webpack_prod.run(cb);
}
gulp.task('webpack_prod',webpack_prod);

function compress(){
  return gulp.src('dist/*')
  .pipe($.gzip())
  .pipe(gulp.dest('dist'));
}
gulp.task('compress',compress);

function images(){
  gulp.src('src/images/*')
  .pipe($.imagemin({progressive: true}))
  .pipe(gulp.dest('dist/images'));
}
gulp.task('images',images);

gulp.task('dev',gulp.series([
  'clean',
  gulp.parallel([
    'jade_dev',
    'webpack_dev',
    'images'
  ])
]));
gulp.task('default',gulp.series([
  'clean',
  gulp.parallel([
    'jade_prod',
    'webpack_prod',
    'images'
  ]),
  'compress'
]));
