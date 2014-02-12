var gulp = require('gulp');

var concat = require('gulp-concat');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');


gulp.task('styles', function() {
  gulp.src(['./src/*.css'])
    .pipe(concat('gulp.styles.css'))
    .pipe(autoprefix('last 10 versions'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['styles'], function() {
  gulp.watch('./src/*.css', function() {
    gulp.start('styles');
  });
});