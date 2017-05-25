
var menu = document.getElementById('menu');
var dropdown = document.getElementsByClassName('dropdown')[0];
menu.addEventListener('mouseenter',drop);
document.addEventListener('click',hide);
function drop(){
    dropdown.className+=' show';
}
function hide(ev){
        console.log(ev.target);
        dropdown.className='dropdown';
}