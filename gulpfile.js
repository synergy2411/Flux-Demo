var gulp = require('gulp'),
	browserify = require('gulp-browserify'),
	uglify = require('gulp-uglify'),
	connect = require('gulp-connect');

gulp.task('browserify',function(){
    gulp.src('src/js/main.js')
    .pipe(browserify({transform:'reactify'}))
	// .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('copyHtml',function(){
    gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('connect', function() {
  connect.server({
    root: 'dist'
  });
});

gulp.task('default',['browserify','copyHtml','connect']);
