function out () {
    var p;
    p = document.getElementById("out");
    // p.innerHTML = "hello";
    // дописать информацию
    //p.innerHTML += " <b>hello</b>";

    //p.innerText += " hi"
    //p.insertAdjacentHTML ("beforeBegin","HI");
    //beforeBegin - перед открывающим тегом
    //p.insertAdjacentHTML ("afterBegin","HI");
    //afterBegin - после открывающего тега
    //p.insertAdjacentHTML ("beforeEnd","HI");
    //p.insertAdjacentHTML ("afterEnd","HI");
    p.outerHTML = '<div class="one">hello</div>';
}

