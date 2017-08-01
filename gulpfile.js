const gulp = require('gulp'),
  watch = require('gulp-watch'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer')
  cssvars = require('postcss-simple-vars'),
  nested = require('postcss-nested')
  cssImport = require('postcss-import');

gulp.task('default', () => {
  console.log('gulp is running');
});

gulp.task('html', () => {
  console.log('Imagine something useful being done to your HTML here.');
});

gulp.task('styles', () => {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', () => {

  watch('./app/index.html', () => {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', () => {
    gulp.start('styles');
  });

});
