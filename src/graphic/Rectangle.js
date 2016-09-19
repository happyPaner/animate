/*
 *  矩形图形类;
 *  @param lefttop: 矩形左上角坐标点， width: 矩形宽度， height：矩形高度， options：可选属性；
 *  create by Paner @2016;
 */ 

Animate.Rectangle = function(lefttop, width, height, options){
    this.lefttop = lefttop ? lefttop : new Animate.Point(0,0);
    this.width = width ? width : 100;
    this.height = height ? height : 80;
    var typePoints = this._getTypePoints(lefttop, width, height)
    Animate.Path.call(this, typePoints, options)
    this.type = 'rectangle';
}

//继承图形基础原型
Animate.extend(Animate.Rectangle, Animate.Path)

//重新设定矩形位置
Animate.Rectangle.prototype.setPosition =  function(point){
    this.lefttop = point ? point : new Animate.Point(0,0);
}

//重新设置矩形宽度
Animate.Rectangle.prototype.setWidth = function(width){
    this.width = width ? width : 100;
}

//重新设置矩形高度
Animate.Rectangle.prototype.setHeight = function(height){
    this.height =  height ? height : 80;
}

//获取矩形的typepoints
Animate.Rectangle.prototype._getTypePoints = function(lefttop, width, height){
    var typePoint0 = new Animate.TypePoint(lefttop, 'M')
    var typePoint1 = new Animate.TypePoint(new Animate.Point(lefttop.x + width, lefttop.y), 'L')
    var typePoint2 = new Animate.TypePoint(new Animate.Point(lefttop.x + width, lefttop.y + height), 'L')
    var typePoint3 = new Animate.TypePoint(new Animate.Point(lefttop.x, lefttop.y + height), 'L')
    return [typePoint0, typePoint1, typePoint2, typePoint3]
}