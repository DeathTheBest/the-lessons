
var prNum, tempOut;

prNum = Math.floor ((Math.random()* 10) + 1);
//tempOut = document.getElementById("temp-out");
//tempOut.innerHTML = prNum;

console.log(prNum);

function f1 () {
    var num,  out;
    //0 1 0.665443
    

    num = document.getElementById("mynum").value;
    out = document.getElementById("out");
    
    if (num == prNum) {
        out.innerHTML = "вы угадали";
    }
    else if (num > prNum) {
        out.innerHTML = "вы ввели число больше чем нужно ";
    }

    else {
        out.innerHTML = "вы ввели число меньше чем нужно";
    }

}