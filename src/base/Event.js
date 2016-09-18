/*
 * 定义动画元素事件类，判断元素事件;
 * @param dom: 承载点击事件的dom, 一般是显示的canvas dom节点； 
 * create by Paner @2016;
 */ 

Animate.Event = function(dom){
    this._eventCanvas = document.createElement('canvas');
    this._eventCtx = this._eventCanvas.getContext('2d');
    this._contain = {};

    var _this = this;

    //基本事件类型
    var event = ['click', 'dblclick', 'mousemove', 'mousedown', 'mouseup', 'contextmenu']
    dom.addEventListener('contextmenu', function (e){
        e.preventDefault();
    }, false);
    
    //注册基础事件
    for(var i=0;i<event.length; i++){
        (function(i){
            dom.addEventListener(event[i], function(e){
                var rightType = 'right' + event[i];
                var point = _this._getEventPoint(e);

                if(_this._contain[event[i]] && e.button==0){
                    _this._doBaseEvent(point, event[i]);
                }else if(_this._contain[rightType] && e.button==2){
                    _this._doBaseEvent(point, rightType);
                }else{
                    if(i===5 && _this._contain["rightclick"]){
                        _this._doBaseEvent(point, "rightclick");
                    }
                }
            })
        })(i)
    }
}

Animate.Event.prototype = {
    
    //添加事件元素，把元素添加到发生事件的集合中
    addEvent : function(event, path, func){
        if( !this._contain[event] ) this._contain[event] = [];
        this._contain[event].push({
            path: path,
            func: func
        })
    }, 

    //获取事件发生位置
    _getEventPoint : function(e){
        var x = e.pageX - dom.offsetLeft;
        var y = e.pageY - dom.offsetTop;
        return new Animate.Point(x, y)
    },

    //执行左键基础事件
    _doBaseEvent : function(point, event){
        var k = this._pointIsInPath(point, this._contain[event]);
        if(k || k===0) this._contain[event][k].func()
    },

    //检测事件发生在哪个路径中，返回路径在事件集合中的索引值
    _pointIsInPath: function(point, paths){
        var indexs = [];
        paths.forEach(function(v, k){
            var typePoints = v.path._typePoints;
            this._eventCtx.beginPath();
            for(var i=0, len=typePoints.length; i<len; i++){
                switch(typePoints[i].type){
                    case 'M'||'m':
                        this._eventCtx.moveTo(typePoints[i].point.x, typePoints[i].point.y);
                        break;
                    case 'L'||'l':
                        this._eventCtx.lineTo(typePoints[i].point.x, typePoints[i].point.y);
                        break;
                    case 'A'||'a': 
                        this._eventCtx.arc(typePoints[i].point[0].x, typePoints[i].point[0].y, typePoints[i].point[1], typePoints[i].point[2], typePoints[i].point[3]);
                        break;

                    default:
                        this._eventCtx.lineTo(typePoints[i].point.x, typePoints[i].point.y);
                }            
            }
            v._closePath ? this._eventCtx.closePath() : false;
            if(v.path.opciaty > 0 && this._eventCtx.isPointInPath(point.x, point.y)){
                indexs.push(k)                
            }else if(v.path.strokeWidth > 0 && v.path.strokeOpciaty > 0 && this._eventCtx.isPointInStroke(point.x, point.y)){
                indexs.push(k)
            }
        }, this)

        var theIndex = 0, theK;
        for(var i=0; i<indexs.length; i++){
            if(paths[indexs[i]].path.index >= theIndex) {
                theIndex = paths[indexs[i]].path.index;
                theK = indexs[i];
            } 
        }

        return theK;
    },
}