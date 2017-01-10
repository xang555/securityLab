/**
 * Created by xang on 1/10/2017.
 */

"use strict";

var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var gulp = require('gulp');

gulp.task('default', function() {
    var bundleStream = browserify('public/javascripts/controller.js').bundle();

    bundleStream
        .pipe(source('controller.js'))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest('public/javascripts/controller.min.js'));
});