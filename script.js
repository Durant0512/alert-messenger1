'use strict'
var names = ['vasa', 'peter', 'ann', 'vera', 'alex'];

function list(ar, container_id){
    var result = [];
    for(var item of ar){
    result +=  '<li>' + item + '</li>';
    }
    var con = document.querySelector(container_id);
    con.innerHTML = result;
    con.onclick = function(){
        for(var item of ar){
        alert('Вы нажали на имя' + item)
    }
    };
}

list(names, '#list');

/*names = document.querySelector('#list');

names.onclick = function(){
    alert('Вы нажали на имя' + names)
};*/





/*var html = [];
for(var name of names){
    html += '<li>' + name + '</li>';
}

console.log(html);


var container = document.querySelector('#list');
container.innerHTML = html;*/


