/*
 *  具有填充图形样式基础类;
 *  @param  options：可选属性；
 *  create by Paner @2016;
 */ 

Animate.Graphic = function(options){
    options ? options : options = {};
    this.show = options.show ? options.show : true;
    this.opciaty = options.opciaty ? options.opciaty : 1;
    this.fillStyle = options.fillStyle ? options.fillStyle : '#FF0000';
    this.strokeWidth =  options.strokeWidth ? options.strokeWidth: 0;
    this.strokeStyle = options.strokeStyle ? options.strokeStyle : '#00FF00';
    this.strokeOpciaty = options.strokeOpciaty ? options.strokeOpciaty : 1;
}

Animate.Graphic.prototype = {

    //重新设置透明度
    setOpciaty : function(opciaty){
        this.opciaty = opciaty ? opciaty : 1;
    },

    //重新设置填充颜色
    setFillStyle : function(style){
        this.fillStyle = style ? style : "#FF0000";
    },

    //重新设置边框宽度
    setStrokeWidth : function(strokeWidth){
        this.strokeWidth = strokeWidth ? strokeWidth : 0;
    },

    //重新设置边框颜色
    setStrokeStyle: function(strokeStyle){
        this.strokeStyle = strokeStyle ? strokeStyle : 0;
    },

    //重新设置边框透明度
    setStrokeOpciaty : function(strokeOpciaty){
        this.strokeOpciaty = strokeOpciaty ? strokeOpciaty : 1;
    },

    //把矩形添加到场景或者图形组中
    addTo : function(scene){
        scene.add(this)
    }
}