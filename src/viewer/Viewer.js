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
}