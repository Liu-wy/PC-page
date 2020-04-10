var conmid = document.getElementById("conner-mid");
var dj = document.getElementById("dj-ul").getElementsByTagName("li")
var tab1 = document.getElementsByClassName("tab1")
console.log(tab1)
//循环标题
for(var i=0;i<dj.length;i++){
    dj[i].onmouseover = function(){
        // 去除被单击后的样式
        for(var j=0;j<dj.length;j++){
            if(dj[j]==this){
                tab1[j].style.display = "block";
            }else{
                tab1[j].style.display = "none";
            }
        }
    }
}