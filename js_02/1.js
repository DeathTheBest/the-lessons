// plus +

function plus () {
    var num1, num2, result;
    num1 = document.getElementById("n1").value;
    num1 = parseInt(num1);

    num2 = document.getElementById("n2").value;
    num2 = parseInt(num2);

    result = num1+num2;
    // innerHTML
    document.getElementById("out").innerHTML = result;
}
// minus -

function minus () {
    var num1, num2, result;
    num1 = document.getElementById("n1").value;
    num1 = parseInt(num1);

    num2 = document.getElementById("n2").value;
    num2 = parseInt(num2);

    result = num1-num2;
    document.getElementById("out").innerHTML = result;
}

function delenie () {
    var num1, num2, result;
    num1 = document.getElementById("n1").value;
    num1 = parseInt(num1);

    num2 = document.getElementById("n2").value;
    num2 = parseInt(num2);

    result = num1/num2;
    document.getElementById("out").innerHTML = result;
}

function ymnogenie () {
    var num1, num2, result;
    num1 = document.getElementById("n1").value;
    num1 = parseInt(num1);

    num2 = document.getElementById("n2").value;
    num2 = parseInt(num2);

    result = num1*num2;
    document.getElementById("out").innerHTML = result;
}
