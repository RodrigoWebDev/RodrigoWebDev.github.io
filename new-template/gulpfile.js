var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var watch = require('gulp-watch');

//sass
gulp.task('sass', function(){
  gulp.src('./assets/sass/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./assets/css/'))
});

//server gls
gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('assets/sass/*.scss').on('change', browserSync.reload);
  gulp.watch('*.html').on('change', browserSync.reload);
});

//watch
gulp.task('watch', function(){
  return gulp.watch('./assets/sass/*.scss' , ['sass']);
})

//default

gulp.task('default', ['serve','watch']);
