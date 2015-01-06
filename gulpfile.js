var gulp = require('gulp');
var util = require('gulp-util');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserify = require('gulp-browserify');
var minifyHTML = require('gulp-minify-html');
var stylus = require('gulp-stylus');
var imagemin = require('gulp-imagemin');
var connect = require('gulp-connect');
var rename = require('gulp-rename');
var watchify = require('watchify');

var paths = {
    src: './app',
    dist: './dist'
};

var files = {
    scripts: [paths.src+'/**/*.js'],
    html: [paths.src+'/**/*.html'],
    styles: [paths.src+'/styles/**/*.scss'],
    images: [
        paths.src+'/images/**/*.png',
        paths.src+'/images/**/*.jpg',
        paths.src+'/images/**/*.gif'
    ]
};

gulp.task('scripts', function (cb) {
    var bundle = watchify(browserify({
        debug: true,
        extensions: ['.js'],
        cache: {},
        packageCache: {},
        fullPaths: true
    }))
    .on('log', function(msg) {
        console.log('rebuild: ' + msg);
    });
});

gulp.task('html', function() {
    var opts = {comments:true, spare:true};
    gulp.src(paths.src + '/index.html')
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest(paths.dist))
        .pipe(connect.reload());
});

gulp.task('sass', function() {
    gulp.src(files.styles)
        .pipe(gulp.dest(paths.dist+'/css'))
        .pipe(connect.reload());
});

gulp.task('images', function() {
    gulp.src(files.images)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.dist+'/images'))
        .pipe(connect.reload());
});

gulp.task('connect', connect.server({
    root: [paths.dist],
    port: 1337,
    livereload: true
}));

gulp.task('watch', function () {
    //gulp.watch(files.scripts, ['scripts']);
    gulp.watch(files.html, ['html']);
    //gulp.watch(files.syles, ['sass']);
    gulp.watch(files.images, ['images']);
});

gulp.task('default', [
    'scripts',
    'html',
    //'stylus',
    //'images',
    'connect',
    'watch'
]);

