var adress = document.getElementById("adress");
var adr = document.getElementById("adr");
var pics = document.getElementById("adr-img");
var dizhi = document.getElementById("dizhi");
console.log(adr)
adr.onmouseover = function(){
    dizhi.style.display = "block";
    pics.src = "images/上.png";
}
adr.onmouseout = function(){
    dizhi.style.display = "none";
    pics.src = "images/下.png";
}
//我的当当
var dengu = document.getElementById("denglu");
var dl = document.getElementById("dl");
var myD = document.getElementById("myD");
var dPics = document.getElementById("xia");
var myList = document.getElementById("myD-list");
var dang = document.getElementById("dang");
var son = document.getElementById("myD-list").getElementsByTagName("span");
console.log(son)
myD.onmouseover = function(){
    myList.style.display = "block";
    dPics.src = "images/上.png";
    // son.style.background = "eeeeee";
}
myD.onmouseout = function(){
    myList.style.display = "none";
    dPics.src = "images/下.png";
    // son.style.background = "#ffffff";
}