const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function scripts(){
    return gulp.src('./src/scripts/*js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}

function styles(){
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
}

function images(){
    return gulp.src('./src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
}

exports.default = gulp.parallel(styles, scripts, images);

