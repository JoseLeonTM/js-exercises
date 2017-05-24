
var forms = document.getElementsByTagName('div');
for(let i=0;i<forms.length;i++){
    let form = forms[i].childNodes[1];
    let btn = document.createElement('button');
    btn.innerText= i<forms.length-1 ?
        'NEXT' :
        'SUBMIT';
    form.appendChild(btn);
    if(i>0){
        forms[i].className='hide';
        // forms[i].style.zIndex='-'+i;
        forms[i].style.visibility='hidden';
    }
    if(i<forms.length-1){
        btn.type='button';
        btn.addEventListener('click',next);
    }
}
var nextForm = 1;
function next(ev){
    var form = ev.target.parentNode.parentNode;
    // form.style.opacity='0';
    form.className='hide';
    forms[nextForm].style.visibility="visible";
    setTimeout(function(){
        forms[nextForm++].className='';
        // forms[nextForm++].style.opacity='1';
    },250);
}