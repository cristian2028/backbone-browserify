var gulp = require('gulp');
var util = require('gulp-util');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var sass = require('gulp-sass');
var minifyHTML = require('gulp-minify-html');
var imagemin = require('gulp-imagemin');
var connect = require('gulp-connect');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var hbsfy = require('hbsfy');

var paths = {
    src: './app',
    dist: './dist'
};

var files = {
    scripts: [paths.src+'/**/*.js'],
    html: [paths.src+'/**/*.html'],
    styles: [paths.src+'/styles/**/*.scss'],
    vendor: ['./vendor/**/*.*'],
    images: [
        paths.src+'/images/**/*.png',
        paths.src+'/images/**/*.jpg',
        paths.src+'/images/**/*.gif'
    ]
};

gulp.task('scripts', function (cb) {

    var bundler = browserify({
        debug: true,
        basedir: __dirname,
        extensions: ['.js'],
        cache: {},
        packageCache: {},
        fullPaths: false
    });

    bundler.transform({
        global: true
    }, hbsfy);

    bundler.require('./app/scripts/app');


    return bundler.bundle()
        // Report compile errors
        .on('error', function(e){console.log('Error: ',e)})
        // Use vinyl-source-stream to make the stream gulp compatible.
        .pipe(source('bundle.js'))
        // Specify the output destination
        .pipe(gulp.dest(paths.dist));
        //.on('end', cb);
});

gulp.task('html', function() {
    var opts = {comments:true, spare:true};
    gulp.src(files.html)
        //.pipe(minifyHTML(opts))
        .pipe(gulp.dest(paths.dist))
        .pipe(connect.reload());
});

gulp.task('sass', function() {
    gulp.src(files.styles)
        .pipe(sass())
        .pipe(gulp.dest(paths.dist+'/styles'))
        .pipe(connect.reload());
});

gulp.task('vendor', function() {
    gulp.src(files.vendor)
        .pipe(gulp.dest(paths.dist+'/vendor'));
});

gulp.task('images', function() {
    gulp.src(files.images)
        //.pipe(imagemin())
        .pipe(gulp.dest(paths.dist+'/images'))
        .pipe(connect.reload());
});

gulp.task('connect', connect.server({
    root: [paths.dist],
    port: 1234,
    livereload: true
}));

gulp.task('watch', function () {
    gulp.watch(files.scripts, ['scripts']);
    gulp.watch(files.html, ['html']);
    gulp.watch(files.syles, ['sass']);
    gulp.watch(files.images, ['images']);
});

gulp.task('default', [
    'scripts',
    'html',
    'sass',
    'images',
    'vendor',
    'connect',
    'watch'
]);