//获取元素
var conner = document.getElementById("conner");
var inner = document.getElementById("inner");
var banner = document.getElementById("banner");
var ban2 = document.getElementById("ban2");
var lun2 = document.getElementById("lun2");
var dian = document.getElementById("dian").getElementsByTagName("li");
var num1 = 0;
var timerTwo = null;
var rightBtn = document.getElementById("rightBtn");
var leftBtn = document.getElementById("leftBtn");
var pic = document.getElementById("lun2").getElementsByTagName("div");
console.log(rightBtn)
//页面加载完执行
/* window.onload = function(){
    clocker();
} */
//自动轮播
function clocker(){
    timerTwo = setInterval(moveTwo,4000)
}
function moveTwo(){
    num1++;
    if(num1 == 4){
        num1 = 0;
    }

    if(num1 == -1){
        num1 = pic.length - 1;
    }
    changeBgcolor2();
    moverTwo(ban2.scrollLeft,750*num1)
}
//轮播效果
function moverTwo(first,finlly){
    var pace = 0;
    var maxPace = 10;
    var everyPace = (finlly-first)/maxPace;
    var timeTwo = setInterval(function(){
        pace++;
        ban2.scrollLeft = ban2.scrollLeft + everyPace;
        if(pace == maxPace){
            clearInterval(timeTwo);
        }
    },50)
}
//按钮变色
function changeBgcolor2(){
    for(var k = 0; k < dian.length; k++){
        dian[k].style.background = "#aaaaaa";
    }
    dian[num1].style.background = "pink";
}
//鼠标移动
for(k = 0; k < dian.length; k++){
    dian[k].onmouseover = function(){
        clearInterval(timerTwo);
        for(var h = 0; h <= dian.length; h++){
            if(this == dian[h]){
                num1 = h;
                changeBgcolor2();
                moverTwo(ban2.scrollLeft,750*h);
            }
        }
        clocker();
    }
}
//绑定左右按钮
rightBtn.onclick = function(){
    clearInterval(timerTwo);
    moveTwo();
    clocker();
}
leftBtn.onclick = function(){
    clearInterval(timerTwo);
    num1 -= 2;
    moveTwo();
    clocker();
}