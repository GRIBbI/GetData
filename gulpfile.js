const gulp = require('gulp');
const rename = require('gulp-rename');
const miniCss = require('gulp-csso');
const uncss = require('gulp-uncss');
const prefixer = require('gulp-autoprefixer');
const {
  series
} = require('gulp');
var browserSync = require('browser-sync').create();

function renameCopy(done) {
  gulp.src('./css/**/*.css')
    .pipe(rename({
      suffix: '.min',
    }))
    .pipe(uncss({
      html: ['./index.html']
    }))
    .pipe(prefixer('last 2 versions', '> 1%', 'ie 9'))
    .pipe(miniCss({
      restructure: false,
      sourceMap: true,
      debug: true
    }))
    .pipe(gulp.dest('./dist/'));
}



function print(done) {
  console.log('HI');
  done();
}

function realod(done) {
  gulp.src("./index.html")
    .pipe(browserSync.stream());
  done();

}

function watch() {
  gulp.watch('./css/**/*', renameCopy);
}
//gulp.task('default', gulp.series(print, watch));
exports.default = series(print, watch);

//exports.realod = realod;