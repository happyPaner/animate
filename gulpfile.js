var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var path= require('./build/include');

path.forEach(function(v, i) {
    path[i] = './src/' + v;
    console.log(v)
}, this);

gulp.task('build', function() {
    gulp.src(path)
    .pipe(concat('Animate.js'))
    .pipe(gulp.dest('./build')) 
    .pipe(concat('Animate.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build')) 
});