const sass = require('gulp-sass')(require('sass'));
const gulp = require('gulp');
const browserSync = require('browser-sync').create();

function buildStyles() {
    return gulp.src('project-root/src/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('project-root/dist/css/'));
};

function browsersync() {
    browserSync.init({
      server: { baseDir: "./project-root" },
    });
}

function watch() {
    gulp.watch('project-root/src/*.scss', { delay: 500 },  buildStyles);
    gulp.watch(["*.html", 'css/*.css', 'script/*.js'], browserSync.reload);
  
}

exports.watch = gulp.parallel(browsersync, watch);
