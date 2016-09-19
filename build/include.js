(function(){
    var deps = [
        'Animate.js',
        'base/Common.js',
        'base/Point.js',
        'base/Translate.js',
        'base/Scale.js',
        'base/TypePoint.js',
        'base/Event.js',
        'graphic/Graphic.js',
        'graphic/Path.js',
        'graphic/Rectangle.js',
        'graphic/circle.js',
        'graphic/Polygon.js',
        'graphic/Polyline.js',
        'viewer/Scene.js',
        'viewer/Renderer.js',
        'viewer/Viewer.js',
    ]

    if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = deps;
    }else if(typeof window !== 'undefined'){
        var path = '../src/';
        deps.forEach(function(v) {
            document.writeln('<script type="text/javascript" src="' + path + v + '"></script>');
        }, this);
    }
})()