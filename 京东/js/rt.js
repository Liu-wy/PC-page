window.onload = function(){
    var topBox = document.getElementById("returnTop");
    var returnT = document.getElementById("returnT");
    console.log(returnT)
    var timer = null;
    returnT.onclick = function(){
        timer = setInterval(function(){
            var scrT = document.body.scrollTop||document.documentElement.scrollTop;
            // scrT-=100
            document.body.scrollTop-=100;
            document.documentElement.scrollTop-=100
            console.log(scrT);
            if(scrT==0){
                clearInterval(timer);
            }
        },20);
    }
}
//给浏览器绑定滚动事件，让返回顶部盒子显示
window.onscroll = function(){
    //获取body的scrollTop的兼容写法
    var scrT = document.body.scrollTop||document.documentElement.scrollTop;
    //>浏览器的可视高度
    //console.log(document.documentElement.clientHeight);
    if(scrT>document.documentElement.clientHeight){
        returnT.style.display = "block";
    }else {
        returnT.style.display = "none";
    }
}