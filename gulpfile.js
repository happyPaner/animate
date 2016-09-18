var gulp = require('gulp');
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')

gulp.task('build', function() {
    gulp.src([
        'src/Animate.js',
        'src/base/Common.js',
        'src/base/Point.js',
        'src/base/TypePoint.js',
        'src/base/Event.js',
        'src/graphic/Path.js',
        'src/graphic/Rectangle.js',
        'src/graphic/circle.js',
        'src/graphic/Polygon.js',
        'src/graphic/Polyline.js',
        'src/viewer/Renderer.js',
        'src/viewer/Viewer.js',
        'src/viewer/Scene.js',
    ])
    .pipe(concat('Animate.js'))
    .pipe(gulp.dest('./build'))

    gulp.src([
        'src/Animate.js',
        'src/base/Common.js',
        'src/base/Point.js',
        'src/base/TypePoint.js',
        'src/base/Event.js',
        'src/graphic/Path.js',
        'src/graphic/Rectangle.js',
        'src/graphic/circle.js',
        'src/graphic/Polygon.js',
        'src/graphic/Polyline.js',
        'src/viewer/Renderer.js',
        'src/viewer/Viewer.js',
        'src/viewer/Scene.js',
    ])
    .pipe(concat('Animate.js'))
    gulp.src([
        'src/Animate.js',
        'src/base/Common.js',
        'src/base/Point.js',
        'src/base/TypePoint.js',
        'src/base/Event.js',
        'src/graphic/Path.js',
        'src/graphic/Rectangle.js',
        'src/graphic/circle.js',
        'src/graphic/Polygon.js',
        'src/graphic/Polyline.js',
        'src/viewer/Renderer.js',
        'src/viewer/Viewer.js',
        'src/viewer/Scene.js',
    ])
    .pipe(concat('Animate.js'))
    .pipe(uglify('./build'))
    .pipe(gulp.dest('./build'))
});