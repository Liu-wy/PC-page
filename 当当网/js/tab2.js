var innTab = document.getElementsByClassName("inner-tab");
var bool = document.getElementsByClassName("bool-li-tab");
var tabP2 = document.querySelectorAll(".tab2-img");
var classBook = document.getElementById("book").getElementsByTagName("li");
//循环列表
for(i = 0; i < classBook.length; i++){
    classBook[i].onmouseover = function(){
        for(j = 0; j <classBook.length; j++){
            if(classBook[j] == this){
                tabP2[j].style.display = "block"
            }else{
                tabP2[j].style.display = "none";
            }
        }
    }
    classBook[i].onmouseout = function(){
        for(j = 0; j <classBook.length; j++){
           tabP2[j].style.display = "none";
        }
    }
}