/*
 * 定义动画渲染器，渲染场景内容;
 * create by Paner @2016;
 */ 

Animate.Renderer = function(viewer){
    this._ctx = viewer.canvas.getContext('2d');
    this._canvas = viewer.canvas;
}

Animate.Renderer.prototype = {
    
    //场景渲染器；
    render : function(scene){
        this.clear();
        scene.members.forEach(function(v){
            switch(v.type){
                case 'rectangle':
                    this._rectangle(v);
                    break;

                case 'circle':
                    this._circle(v);
                    break;
            }
        },this)
    },

    //清空画布
    clear : function(){
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height)
    },

    //渲染矩形方法
    _rectangle : function(v){
        this._ctx.globalAlpha = v.opciaty;
        this._ctx.fillStyle = v.fillStyle;
        this._ctx.fillRect(v.lefttop.x, v.lefttop.y, v.width, v.height);
        if(v._strokeWidth > 0 && v._strokeOpciaty > 0){
            this._ctx.globalAlpha = v.strokeOpciaty;
            this._ctx.strokeStyle = v.strokeStyle;
            this._ctx.lineWidth = v.strokeWidth;
            this._ctx.strokeRect(v.lefttop.x, v.lefttop.y, v.width, v.height);
        }
    },

    //渲染圆方法
    _circle : function(v){

        this._ctx.beginPath();
        this._ctx.arc(v.center.x, v.center.y, v.radius, 0, Math.PI * 2, true);
        this._ctx.closePath();

        this._ctx.globalAlpha = v.opciaty;
        this._ctx.fillStyle = v.fillStyle;
        this._ctx.fill();

        if(v.strokeWidth > 0 && v.strokeOpciaty > 0){
            this._ctx.globalAlpha = v.strokeOpciaty;
            this._ctx.strokeStyle = v.strokeStyle;
            this._ctx.lineWidth = v.strokeWidth;
            this._ctx.stroke();
        }
    }

}