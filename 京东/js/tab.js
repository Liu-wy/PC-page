//获取元素
var container = document.getElementsByClassName("container");
var conLi = document.getElementById("conlist1").getElementsByTagName("li");
console.log(conLi)
var morer = document.getElementById("morer");
var mor = document.querySelectorAll(".mor");
console.log(mor)
//遍历左侧li标签
for(var i = 0; i < conLi.length; i++){
    //鼠标移入效果
    conLi[i].onmouseover = function(){
        for(var j = 0; j < conLi.length; j++){
            if(conLi[j] == this){
                morer.style.display = "block";
                mor[j].className = "mor-show";
            }else{
                mor[j].className = "mor-sel";
            }
        }
    }
    //鼠标移出
    conLi[i].onmouseout = function(){
        for(j = 0; j < conLi.length; j++){
            // mor[j].style.display = "none";
            morer.style.display = "none";
        }
    }
}