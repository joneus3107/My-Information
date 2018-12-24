'use strict';
// Gọi thư viện sử dụng vào
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({ lazy: true });
var browserSync = require('browser-sync').create();
var runSequence = require('run-sequence');
var taskPath = './tasks/';
var taskList = require('fs').readdirSync(taskPath);
// Load tất cả các task
taskList.forEach(function(taskFile) {
    require(taskPath + taskFile)(gulp, plugins, browserSync);
});


// Lệnh mặc định của Gulp
gulp.task('default', function(callback) {
    runSequence(
        'clean',
        'copy-img',
        'copy-fonts',
        'concat-css',
        'concat-js',
        'create-js',
        'create-css',
        'create-html',
        'watch',
        'autorefixer',
        'browser-sync',
        callback
    );
});
gulp.task('build', function(callback) {
    runSequence(
        'clean',
        'copy-img',
        'copy-fonts',
        'concat-css',
        'concat-js',
        'create-js',
        'create-css',
        'create-html',
        'watch',
        'autorefixer',
        'browser-sync',
        callback
    );
});