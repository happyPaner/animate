/*
 *  折线图形类;
 *  @param points:折线角点， options：可选属性, 继承自Polygon类；
 *  create by Paner @2016;
 */ 

Animate.Polyline = function(points, options){
    this.points = points ? points : [];
    var typePoints = this._getTypePoints(points);
    
    options ? options : options = {}
    options.opciaty ? options.opciaty : options.opciaty = 0;
    options.strokeWidth ? options.strokeWidth : options.strokeWidth = 2;
    options.strokeOpciaty ? options.strokeOpciaty : options.strokeOpciaty = 1;
    Animate.Path.call(this, typePoints, options)
    this._closePath = false;
}

Animate.extend(Animate.Polyline, Animate.Polygon);

//重新设置多边形关键点
Animate.Polyline.prototype.setPoints = function(points){
    this.points = points ? points : [];
    this._typePoints = this._getTypePoints(points);
}

//获取多边形关键点
Animate.Polyline.prototype.getPoints = function(){
    return this.points;
}

//通过points获取typepoints
Animate.Polyline.prototype._getTypePoints = function(points){
    var typePoints= [], typePoint;
    for(var i=0, len=points.length; i<len; i++){
        if(i===0) typePoint = new Animate.TypePoint(points[0],'M');
        else typePoint = new Animate.TypePoint(points[i],'L');
        typePoints.push(typePoint)
    }
    return typePoints;
}