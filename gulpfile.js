var gulp            = require('gulp');
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

gulp.task('default', ['browser-sync']);
