/*
 *  路径图形类，是所有图形的基础类;
 *  @param typePoints：带类型的点 options：可选属性；
 *  create by Paner @2016;
 */ 

Animate.Path = function(typePoints, options){
    options ? options : options = {};

    this._closePath = true;
    this._typePoints = typePoints ? typePoints : [];

    this.show = options.show ? options.show : true;
    this.index = options.index ? options.index : 0;
    this.opciaty = options.opciaty || options.opciaty===0 ? options.opciaty : 1;
    this.fillStyle = options.fillStyle ? options.fillStyle : '#FF0000';
    this.strokeWidth =  options.strokeWidth || options.strokeWidth===0 ? options.strokeWidth: 0;
    this.strokeStyle = options.strokeStyle ? options.strokeStyle : '#00FF00';
    this.strokeOpciaty = options.strokeOpciaty || options.strokeOpciaty===0? options.strokeOpciaty : 1;

    var x = 0, y=0;
    var i, len=typePoints.length;
    for(i=0; i<len; i++){
        if(typePoints[i].type === 'M' || typePoints[i].type === 'L'){
            x += typePoints[i].point.x;
            y += typePoints[i].point.y;
        }else{
            x += typePoints[i].point[0].x;
            y += typePoints[i].point[0].y;
        }
    }
    this.center = new Animate.Point(x/len, y/len);
    Animate.Graphic.call(this, options);
}

Animate.Path.prototype = {

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
    setStrokeStyle : function(strokeStyle){
        this.strokeStyle = strokeStyle ? strokeStyle : 0;
    },

    //重新设置边框透明度
    setStrokeOpciaty : function(strokeOpciaty){
        this.strokeOpciaty = strokeOpciaty ? strokeOpciaty : 1;
    },

    //把矩形添加到场景或者图形组中
    addTo : function(scene){
        scene.add(this)
    },

    //添加绑定事件
    on : function(event, func){
        Animate._event.addEvent(event, this, func)
    },

    //解除绑定事件
    off : function(event, func){
        Animate._event.removeEvent(event, this, func)
    }
}

Animate.extend(Animate.Path, Animate.Graphic)