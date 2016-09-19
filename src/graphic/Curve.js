/*
 *  路径曲线类，可用通过此类生成二次贝塞尔曲线，继承自Path类, 更复杂的曲线则可由Path生成;
 *  @param typePoints：带类型的点 options：可选属性；
 *  create by Paner @2016;
 */ 

Animate.Curve =  function(points, options){
    this.points = points ? points : [];
    var typePoints = this._getTypePoints(points);
    Animate.Path.call(this, typePoints, options);
    this.type = 'curve';
}

Animate.extend(Animate.Curve, Animate.Path)

Animate.Polygon.prototype.setPoints = function(points){
    this.points = points ? points : [];
    this._typePoints = this._getTypePoints(this.points);
}