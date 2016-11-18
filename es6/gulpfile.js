
var gulp = require("gulp");
var concat = require("gulp-concat");
var min_css = require("gulp-clean-css");
var uglify = require('gulp-uglify');
var clean = require("gulp-clean");
var babel = require('gulp-babel');

gulp.task('clean', ['clean:all']);

gulp.task('clean:all', function() {
    return gulp.src('dist/css')
        .pipe(clean({ force: true }))
});

gulp.task('scripts', function () {
    return gulp.src(["src/js/jquery-3.1.1.min.js", "src/js/bootstrap.min.js", "src/js/template.js", "src/js/test.js", "src/js/script.js", "src/js/check-script.js"])
        .pipe(babel({
            compact: false,
            only: ["src/js/test.js", "src/js/script.js", "src/js/check-script.js"]
        }))
        .pipe(concat('main-script.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});

gulp.task('css', function () {
    return gulp.src('src/**/*.css')
        .pipe(concat("main-style.css"))
        .pipe(min_css())
        .pipe(gulp.dest('dist/css'));

});

gulp.task("default", ['clean:all', 'css', 'scripts']);

gulp.task('watch', function() {
    gulp.watch("src/js/**/*.js", ['scripts']);
    gulp.watch("src/css/**/*.css", ['css']);
});