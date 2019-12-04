'use strict'
var names = ['vasa', 'peter', 'ann', 'vera', 'alex'];

function list(ar, container_id){
    var result = [];
    for(var item of ar){
    result +=  '<li>' + item + '</li>';
    }
    var con = document.querySelector(container_id);
    con.innerHTML = result;
    }

list(names, '#list');

var list = document.querySelectorAll('li');

var onCl = function() {
    alert(this.innerHTML)
}

list.forEach (function(li){
    li.onclick =onCl;
});
console.log(names)





/*var list = document.querySelectorAll('li');

var oncl = function(){
    alert(this.innerHTML)
}

list.forEach = (function(li){
    li.onclick = oncl;
});*/