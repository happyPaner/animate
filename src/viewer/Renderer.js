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
            this._path(v)
        },this)
    },

    //清空画布
    clear : function(){
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height)
    },

    //渲染路径
    _path : function(v){
        var typePoints = v._typePoints;
        this._ctx.save();

        this._ctx.rotate(v.rotate)
        this._ctx.translate(v.translate.x, v.translate.y)
        this._ctx.translate(v.center.x*(1-v.scale.x), v.center.y*(1-v.scale.y))
        this._ctx.scale(v.scale.x, v.scale.y)

        
        this._ctx.beginPath();
        for(var i=0, len=typePoints.length; i<len; i++){
            switch(typePoints[i].type){
                case 'M':
                    this._ctx.moveTo(typePoints[i].point.x, typePoints[i].point.y);
                    break;
                case 'L':
                    this._ctx.lineTo(typePoints[i].point.x, typePoints[i].point.y);
                    break;
                case 'A':
                    this._ctx.arc(typePoints[i].point[0].x, typePoints[i].point[0].y, typePoints[i].point[1], typePoints[i].point[2], typePoints[i].point[3]);
                    break;

                default:
                    this._ctx.lineTo(typePoints[i].point.x, typePoints[i].point.y);
            }            
        }
        v._closePath ? this._ctx.closePath() : false;
        this._drawPathStyle(v)
        this._ctx.restore()
    },

    //给图形(路径)添加样式
    _drawPathStyle : function(v){
        if(v.opciaty > 0){
            this._ctx.globalAlpha = v.opciaty;
            this._ctx.fillStyle = v.fillStyle;
            this._ctx.fill();
        }
        if(v.strokeWidth > 0 && v.strokeOpciaty > 0){
            this._ctx.globalAlpha = v.strokeOpciaty;
            this._ctx.strokeStyle = v.strokeStyle;
            this._ctx.lineWidth = v.strokeWidth;
            this._ctx.stroke();
        }
    }

}