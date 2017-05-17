
var square = document.getElementById('square');

var left=100;
square.style.left=left+'%';
var interval = setInterval(function(){
    square.style.left=left+'%';
    left--;
    if(square.style.left=='0%'){
        clearInterval(interval);
    }
},10);




