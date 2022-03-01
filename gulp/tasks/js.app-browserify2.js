'use strict';

module.exports = function () {

  $.gulp.task('js:app-browserify2', function () {
    return $.browserify({
        entries: 'src/js2/app2.js',
        debug: true
      })
      .bundle()
      .pipe($.sourceStream('app2.js'))
      .pipe($.buffer())

      //минификация js
      .pipe($.uglifyEs())
      .pipe($.gulp.dest($.config.root + '/assets/js'));
  });

};