// var a,b;
// a = 81;
// b = 8;

// if (a>b) {
//     alert ("первое число больше");

// }

// else if (a==b) {
//     alert ("числа равны");
// }

// else {
//     alert ("второе число больше");
// }

function f1 () {
    var n,p;
    n = document.getElementById("num1").value;
    p = document.getElementById("out");
    n = parseInt (n);
    if (n==100) {
        p.innerHTML = "число равно 100"; 
    }
    else if (n<100) {
        p.innerHTML = "число меньше 100";
    }

    else {
        p.innerHTML = "число больше 100";
    }
}

