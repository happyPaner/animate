/*
 *  矩形图形类;
 *  @param center: 圆心坐标， radius: 圆半径， options：可选属性；
 *  create by Paner @2016;
 */ 

Animate.Circle = function(center, radius, options){
    var point = [], typePoint;
    this.center = center ? center : new Animate.Point(0, 0);
    this.radius = radius ? radius : 10;
    point.push(center, radius, 0, Math.PI*2);
    typePoint = new Animate.TypePoint(point,'A')
    Animate.Path.call(this, [typePoint], options);
    this.type = 'circle';
}

//继承图形基础原型
Animate.extend(Animate.Circle, Animate.Path);

//重新设置中心点坐标
Animate.Circle.prototype.setCenter = function(point){
    this.center = point ? point : new Animate.Point(0, 0);
}

//重新设置半径大小
Animate.Circle.prototype.setRadius = function(radius){
    this.radius = radius ? radius : 10;
}