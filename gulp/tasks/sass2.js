'use strict';

module.exports = function() {

  $.gulp.task('sass2', function() {
    return $.gulp.src('./src/style2/app2.scss')
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.sass()).on('error', $.gp.notify.onError({ title: 'Style SASS'}))
      .pipe($.gp.autoprefixer({grid: true}))
      .pipe($.gp.csso())
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.root + '/assets/css'))
      .pipe($.browserSync.stream());
  })

};
