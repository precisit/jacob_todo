'use strict';

var config      = require('../config');
var changed     = require('gulp-changed');
var gulp        = require('gulp');
var gulpif      = require('gulp-if');
var browserSync = require('browser-sync');

gulp.task('backend', function() {

  return gulp.src(config.backend.src)
    .pipe(changed(config.backend.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.backend.dest))
    .pipe(gulpif(browserSync.active, browserSync.reload({ stream: true, once: true })));

});
