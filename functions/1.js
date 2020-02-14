// function one () {
//         alert ("hello");
//         return 9;
// }

// console.log (5+one());

// one ();

// var block = document.getElementById("one");


//  block.onclick = function () {
//      this.style.background = "green";
//      this.onclick = null;
//  }

// block.ondblclick = function () {
//     this.style.background = "red";
// }

// block.oncontextmenu = function () {
//     this.style.background = "black";
//     return false;
// }

// document.oncontextmenu = function () {
//     return false;
// }

// block.onmouseenter = function () {
//     console.log ("in!!!");
//     this.style.background = "gold";
// }

// block.onmouseleave = function () {
//     this.style.background = "orange";
// }

// var a=0;

// block.onmousemove = function () {
//     a++;
//     this.style.width = 100 + a+"px";
// }

// нажимаешь и держим кнопку мыши (любую)
// block.onmousedown = function (event) {
//     this.style.background = "cyan";
//     console.log ("button:" +event.button);
//     console.log ("which:" +event.which);
// }
// block.onmouseup = function () {
//     this.style.background = ("pink");
// }

////////////////////////////////////////////////////////////
// котик на мышку сел
// document.onmousemove = function () {
//     document.getElementsByTagName ("body") [0].insertAdjacentHTML("beforeEnd", '<img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/cat-64.png" id="cat">');
//     var cat = document.getElementById("cat");
//     cat.style.position = "fixed";

//     document.onmousemove = function (event) {
        
//         cat.style.left = event.clientX  -30+"px";
//         cat.style.top = event.clientY -30+"px";
//     }

// }
// котик на мышку сел
/////////////////////////////////////////////////////////////


document.getElementById ("myslide").onmousemove = function (event) {
    var x = event.offsetX;
 document.getElementById ("two").style.width = x +'px';
}

document.getElementById ("myslide").onmouseleave = function (event) {
    document.getElementById ("two").style.width = '1100px';
}