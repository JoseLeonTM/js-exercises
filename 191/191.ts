
var btn = document.getElementsByTagName('button')[0];
var container = document.getElementById('container');

var changeColor = (function(){
    var colors : string[] = ['blue','red','yellow','green','gray','lightblue','chocolate','darkgoldenrod','wheat','brown'];
    var divs = container.getElementsByTagName('div');
    return function(){
        let col = Math.floor(Math.random()*10);
        let div = Math.floor(Math.random()*10);
        // console.log("color: ",col);
        // console.log("div: ",div);
        divs[div].style.backgroundColor=colors[col];
    }
})();

btn.addEventListener('click',changeColor);


