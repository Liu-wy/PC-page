var returnTop = document.getElementsByClassName("returnTop");
var dy = document.getElementById("diaocha");
var dya = document.getElementsByTagName("a");
// dy.onmouseover = function(){
//     // background.src = "images/笔(1).png";
//     dya.style.color = "#ffffff";
// }

window.onload = function(){
    var rt = document.getElementById("rt");
    console.log(rt)
    var time3 = null;
    rt.onclick = function(){
        time3 = setInterval(function(){
            var scrT = document.body.scrollTop||document.documentElement.scrollTop;
            document.body.scrollTop-=100;
            document.documentElement.scrollTop-=100;
            console.log(scrT);
            if(scrT==0){
                clearInterval(time3);
            }
        },20)
    }
}
window.onscroll = function(){
    var scrT = document.body.scrollTop||document.documentElement.scrollTop;
    if(scrT>document.documentElement.clientHeight){
        rt.style.display = "block";
    }else {
        rt.style.display = "none";
    }
}