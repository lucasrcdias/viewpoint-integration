var gulp            = require('gulp');
var uglify          = require('gulp-uglify');
var plumber         = require('gulp-plumber');
var browserSync     = require('browser-sync');

gulp.task('browser-sync', function() {
  browserSync.init("src/", {
    port: '9000',
    server: {
      baseDir: "src/",
    },
    socket: {
      port: '9001',
      domain: 'localhost:9001'
    }
  });
});

gulp.task('minifyJS', function () {
  gulp.src("src/viewpoint.js")
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest("dist/"))
});

gulp.task('default', ['browser-sync']);
gulp.task('build',   ['minifyJS']);
