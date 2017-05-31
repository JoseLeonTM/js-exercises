
var container = document.getElementById('container');
var divs = container.getElementsByTagName('div');
for(let i=0;i<divs.length;i++){
    divs[i].innerHTML=(i+1).toString();
}
var boxChanger = (function(){
    function changeBox(){
        var div = divs[4],
            number = div.innerHTML.valueOf()-1;

        var interval = setInterval(function(){
            div.innerHTML=(number--).toString();
        },1000);
        setTimeout(function(){
            clearInterval(interval);
            div.innerHTML='I did it!';
        },5000);
    }
    changeBox();
    return changeBox;
})();