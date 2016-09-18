/*
 *  定义动画类中且公有常用方法;
 *  create by Paner @2016;
 */ 

//原型继承方法
Animate.extend = function(child, parent){
    var c = child.prototype;
    var p = parent.prototype;
    for (var k in p) {
        c[k] = p[k];
    }
}