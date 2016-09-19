/*
 *  所有图形基础类，包括路径、图片、文字;
 *  create by Paner @2016;
 */ 

Animate.Graphic = function(options){
    options ? options : options = {};
    this.rotate = options.scale ? options.scale : 0;
    this.scale = options.scale ? options.scale : new Animate.Scale(1, 1);
    this.translate = options.translate ? options.translate : new Animate.Translate(0, 0);
}

Animate.Graphic.prototype = {

    //设置比例
    setScale : function(x, y){
        this.scale = new Animate.Scale(x, y);
    },

    //设置旋转
    setRotate : function(r){
        this.rotate = r;
    },

    //设置位移
    setTranslate : function(x, y){
        this.translate = new Animate.Translate(x, y);
    },
}