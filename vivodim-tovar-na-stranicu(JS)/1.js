var goods = {
    "28292" : {
        "name" : "Банан",
        "cost" : "30",
        "img" : "https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_banana-512.png",
        "sklad" : "да"
    },
    "23729" : {
        "name" : "помидор",
        "cost" : "40",
        "img" : "https://cdn0.iconfinder.com/data/icons/fruits/128/Tomato.png",
        "sklad" : "нет"
    },
   
};


console.log(goods);
var out = ' ';
for (var key in goods) {
    out+= 'Название: ' +goods[key].name + '<br>';
    out+= 'Цена: ' +goods[key].cost + '<br>';
    out+= 'Наличие: ' +goods[key].sklad + '<br>';
    out+='<img src="'+goods[key].img+'">'
    out+= '<hr>';
}

document.getElementById('out').innerHTML = out;