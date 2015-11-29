var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var uncss = require('gulp-uncss');

gulp.task('scripts', function() {
	gulp.src('assets/js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('assets/dist'))
});

gulp.task('sass', function () {
  gulp.src('assets/sass/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/css/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('assets/sass/*.scss', ['sass']);
});

// gulp.task('default', function() {
//   return gulp.src('assets/styles.css')
//     .pipe(uncss({
//         html: ['index.html']
//     }))
//     .pipe(gulp.dest('./out'));
// });
