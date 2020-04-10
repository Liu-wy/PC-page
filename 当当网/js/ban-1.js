//获取元素
var conner = document.getElementById("conner");
var inner = document.getElementById("inner");
var banner = document.getElementById("banner");
var ban1 = document.getElementById("ban1");
var lun1 = document.getElementById("lun1");
var btn = document.getElementById("page").getElementsByTagName("li");
var num = 0;
var timer = null;
//页面加载完执行
/* window.onload = function(){
    clock();
} */
//自动轮播
function clock(){
    timer = setInterval(move,2000)
}
function move(){
    num++;
    if(num == 9){
        num = 0;
    }
    changeBgcolor();
    // ban1.scrollLeft = 750*num;
    mover(ban1.scrollLeft,750*num)
    
    // console.log(ban1); 
}
//轮播效果
function mover(start,end){
    var step = 0;
    var maxStep = 10;
    var everyStep = (end-start)/maxStep;
    var time = setInterval(function(){
        step++;
        ban1.scrollLeft = ban1.scrollLeft + everyStep;
        if(step == maxStep){
            clearInterval(time);
        }
    },50)
}
//绑定按钮变色事件
function changeBgcolor(){
    for(var i=0;i<btn.length;i++){
        btn[i].style.background = "#ffffff";
        btn[i].style.color = "#666666";
    }
    btn[num].style.background = "#ff4848";
    btn[num].style.color = "#ffffff";
}
//鼠标移动到按钮上的事件
for(i = 0; i < btn.length; i++){
    btn[i].onmouseover = function(){
        clearInterval(timer);
        for(j = 0; j <= btn.length; j++){
            if(this == btn[j]){
                num = j;
                changeBgcolor();
                mover(ban1.scrollLeft,750*j);
            }
        }
        clock();
    }
}