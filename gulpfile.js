var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('build', function () {
    return browserify({entries: './src/js/index.jsx', extensions: ['.jsx'], debug: true})
        .on('error', function(e) {
            console.log(e);
        })
        .transform('babelify', {
            presets: [
                'es2015',
                'react'
            ]
        })
        .on('error', function(e) {
            console.log(e);
        })
        .bundle()
        .on('error', function(e) {
            console.log(e);
        })
        .pipe(source('js/bundle.js'))

        .pipe(gulp.dest('public'));
});

gulp.task('watch', ['build'], function () {
    gulp.watch('./src/js/**/*.jsx', ['build']);
});

gulp.task('default', ['watch']);