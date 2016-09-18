(function(){
    
    var deps = [
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

    var path = '../src/';

    deps.forEach(function(v) {
        document.writeln('<script type="text/javascript" src="' + path + v + '"></script>');
    }, this);

})()

