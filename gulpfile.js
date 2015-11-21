var gulp   = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var babelify   = require('babelify');
var watchify   = require('watchify');
var browserify = require('browserify');
var webserver  = require('gulp-webserver');

var browserifyConf = {
    debug: true,
    paths: ['./node_modules', './src']
}

function compile(watch) {
  var bundler = watchify(browserify('./app.jsx', browserifyConf).transform(babelify));

  function rebundle() {
      bundler.bundle()
          .on("error", function (err) { console.log("Error : " + err.message); })
          .pipe(source('bundle.js'))
          .pipe(buffer())
          .pipe(gulp.dest('./'));
  }

  if (watch) {
      bundler.on('update', function() {
          console.log('-> bundling...');
          rebundle();
      });
  }

  rebundle();
}

function watch() {
    return compile(true);
};


gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      host: '127.0.0.1',
      livereload: true,
      port: '8004'
    })
  );
});

gulp.task('build', function() { return compile(); });
gulp.task('watch', function() { return watch(); });
gulp.task('start', ['watch', 'webserver']);
gulp.task('default', ['build', 'webserver']);
