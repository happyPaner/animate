/*
 *  多边形图形类;
 *  @param points: 多边形角点， options：可选属性；
 *  create by Paner @2016;
 */ 

Animate.Polygon = function(points, options){
    this.points = points ? points : [];
    var typePoints = this._getTypePoints(points);
    Animate.Path.call(this, typePoints, options);
}

Animate.extend(Animate.Polygon, Animate.Path)

//重新设置多边形关键点
Animate.Polygon.prototype.setPoints = function(points){
    this.points = points ? points : [];
    this._typePoints = this._getTypePoints(points);
}

//获取多边形关键点
Animate.Polygon.prototype.getPoints = function(){
    return this.points;
}

//通过points获取typepoints
Animate.Polygon.prototype._getTypePoints = function(points){
    var typePoints= [], typePoint;
    for(var i=0, len=points.length; i<len; i++){
        if(i===0) typePoint = new Animate.TypePoint(points[0],'M');
        else typePoint = new Animate.TypePoint(points[i],'L');
        typePoints.push(typePoint);
    }
    return typePoints;
}