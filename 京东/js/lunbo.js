var conIn = document.getElementsByClassName("c-conInner");
var ccll = document.getElementById("ccll");
var Pic = document.getElementById("ccl").getElementsByTagName("img"); 
var point = document.getElementById("point").getElementsByTagName("span");
var timer = null;
var num = 0;
var zuo = document.getElementById("zuo");
var you = document.getElementById("you");
//自动轮播

function clock(){
    timer = setInterval(move,2000)
}
function move(){
    num++;
    if(num == 7){
        num = 0;
    }
    if(num == -1){
        num = Pic.length-1;
    }
    pointColor();
    moveSlow(ccll.scrollLeft,590*num)
}
//轮播效果
function moveSlow(start,end){
    var step = 0;
    var maxStep = 10;
    var everyStep = (end - start) / maxStep;
    var time = setInterval(function(){
        step++;
        ccll.scrollLeft = ccll.scrollLeft + everyStep;
        if(step == maxStep){
            clearInterval(time);
        }
    },50)
}
//下面小点变色
function pointColor(){
    for(var i = 0; i < point.length; i++){
        point[i].style.background = "#eeeeee";
    }
    point[num].style.background = "brown";
}
//小点绑定移入事件
for( i = 0; i < point.length; i++){
    point[i].onmouseover = function(){
        clearInterval(timer);
        for(var j = 0; j < point.length; j++){
            if(this == point[j]){
                num = j;
                pointColor();
                moveSlow(ccll.scrollLeft,590*j);
            }
        }
        clock();
    }
}
//左右按钮单击
you.onclick = function(){
    clearInterval(timer);
    move();
    clock();
}
zuo.onclick = function(){
    clearInterval(timer);
    num -= 2;
    move();
    clock();
}