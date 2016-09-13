/*
 *  定义动画类命名空间;
 *  create by Paner @2016;
 */ 

//初始化动画类
var Animate= {
    version: '0.0.1'
};

// 在node.Js环境下定义node.js模块
if (typeof module === 'object' && typeof module.exports === 'object') {
	module.exports = Animate;

// 定义AMD模块
} else if (typeof define === 'function' && define.amd) {
	define(Animate);
}

if (typeof window !== 'undefined') {
    (function(){
        var oldAnimate = window.Animate;
        Animate.noConflict = function () {
            window.Animate = oldAnimate;
            return this;
        };
        window.Animate = Animate;
    }())
}

