/*
 * 定义动画所在场景类，记录动画场景中所有的成员以及状态;
 * create by Paner @2016;
 */ 

Animate.Scene = function(){
    this.members = [];
}

//场景 method
Animate.Scene.prototype = {

    //添加场景元素
    add: function(element){
        this.members.push(element);
    },

    //删除场景元素
    remove: function(element){
        for (var i = 0; i < this.members.length; i++) {
            if(element===this.members[i]){
                this.members.splice(i,1);
            }
        }
    },

    //清空场景
    removeAll: function(){
        this.members = [];
    }
}