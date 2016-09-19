var gulp = require('gulp');
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')

var path = [
        'Animate.js',
        'base/Common.js',
        'base/Point.js',
        'base/TypePoint.js',
        'base/Event.js',
        'graphic/Path.js',
        'graphic/Rectangle.js',
        'graphic/circle.js',
        'graphic/Polygon.js',
        'graphic/Polyline.js',
        'viewer/Renderer.js',
        'viewer/Viewer.js',
        'viewer/Scene.js',
    ]


path.forEach(function(v, i) {
    path[i] = './src/' + v;
    console.log(path[i])
}, this);


gulp.task('build', function() {
    gulp.src(path)
    .pipe(concat('Animate.js'))
    .pipe(gulp.dest('./build'))

    gulp.src(path)
    .pipe(concat('Animate.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build')) 
});