var uglify = require('gulp-uglify'),
    gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename');

gulp.task('default', function () {
    gulp.src(['src/**/*.js'])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/'))
        .pipe(uglify())
        .pipe(rename({ basename: "angular-utility-filters", suffix: ".min", extname: ".js" }))
        .pipe(gulp.dest('dist/'));
});
