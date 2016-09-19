/*
 * 定义动画所在视图类;
 * @param: id : 动画容器div元素id;
 * create by Paner @2016;
 */ 

Animate.Viewer = function(id){
    var canvas = document.createElement('canvas');
    var container = document.getElementById(id);
    container.appendChild(canvas)
    canvas.width = container.clientWidth-1;
    canvas.height = container.clientHeight-1;

    this.container = container;
    this.canvas = canvas;
    this._canvasEvent = {}
    Animate._event = new Animate.Event(canvas)
}

//视图注册事件
Animate.Viewer.prototype.on = function(event, func){
    var _this = this;
    this._canvasEvent[event] ? this._canvasEvent : this._canvasEvent[event] = [];
    this.canvas.addEventListener(event, function(e){
        var x = e.pageX - dom.offsetLeft;
        var y = e.pageY - dom.offsetTop;
        var point = new Animate.Point(x, y);
        
        var en = {}
        en.func = func;
        en.callee = arguments.callee;   
        _this._canvasEvent[event].push(en)

        func(point);
    });
}

//视图注销事件
Animate.Viewer.prototype.off = function(event, func){
    if(this._canvasEvent[event] instanceof Array){
        var arr = this._canvasEvent[event];
        if(typeof func === 'undefind'){
            arr.forEach(function(v, i){
                this.canvas.removeEventListener(event, v.callee)
            }, this)
            arr = [];
        }else{
            arr.forEach(function(v, i){
                if(v.func===func) {
                    arr.splice(i, 1);
                    this.canvas.removeEventListener(event, v.callee)
                }
            }, this)
        } 
    }
}