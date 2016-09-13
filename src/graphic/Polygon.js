/*
 *  多边形图形类;
 *  @param points: 多边形角点， options：可选属性；
 *  create by Paner @2016;
 */ 

Animate.Polygon = function(points, options){
    this.type = 'polygon'
    this.points = points ? points : [];
    
    options ? options : options = {}
    options.strokeWidth ? options.strokeWidth : options.strokeWidth = 1;
    Animate.Graphic.call(this, options)
}

Animate.extend(Animate.Polygon, Animate.Graphic)

//重新设置多边形关键点
Animate.Polygon.prototype.setPoints = function(points){
    this.points = points ? points : [];
}

//获取多边形关键点
Animate.Polygon.prototype.getPoints = function(){
    return this.points;
}