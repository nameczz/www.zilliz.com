var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var copy = require('gulp-copy');
var connect = require('gulp-connect');
var del = require('del');
var vinylPaths = require('vinyl-paths');

var build = function (dest) {
  gulp.task('clean-' + dest, function () {
    del.sync(dest+'/**/*');
  })

  gulp.task('sass-' + dest, function () {
      gulp.src(['src/scss/froala_blocks.scss'])
          .pipe(sass())
          .pipe(gulp.dest(dest + '/assets/css'))
  });

  gulp.task('html-' + dest, function () {
    gulp.src(['src/html/**/*.html'])
        .pipe(gulp.dest(dest))
  })

  gulp.task('assets-' + dest, function () {
    gulp.src(['src/assets/**/*'])
        .pipe(gulp.dest(dest + '/assets'))
  })
}

build('.tmp');
build('dist');

gulp.task('watch', [], function() {
  watch('dist').pipe(connect.reload());
  watch('src/html', function () {
    gulp.start(['html-.tmp']);
  })
  watch('src/assets/imgs', function () {
    gulp.start(['imgs-.tmp']);
  })
  watch('src/assets/js', function () {
    gulp.start(['js-.tmp']);
  })
  watch('src/scss', function () {
    gulp.start(['sass-.tmp']);
  });
})

gulp.task('connect', function () {
    connect.server({
      root: ['dist', 'node_modules'],
      port: 8001,
      livereload: true
    });
});

gulp.task('dist', ['clean-dist', 'html-dist', 'assets-dist', 'sass-dist']);

gulp.task('default', ['clean-.tmp', 'html-.tmp', 'assets-.tmp', 'sass-.tmp', 'connect', 'watch']);
