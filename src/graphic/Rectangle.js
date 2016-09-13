/*
 *  矩形图形类;
 *  @param lefttop: 矩形左上角坐标点， width: 矩形宽度， height：矩形高度， options：可选属性；
 *  create by Paner @2016;
 */ 

Animate.Rectangle = function(lefttop, width, height, options){
    
    this.type = 'rectangle';
    this.lefttop = lefttop ? lefttop : new Animate.Point(0,0);
    this.width = width ? width : 100;
    this.height = height ? height : 80;
    Animate.Graphic.call(this, options)
}

//继承图形基础原型
Animate.Rectangle.prototype = (new Animate.Graphic()).__proto__

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