
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
        forms[i].style.opacity='0';
    }
    if(i<forms.length-1){
        btn.type='button';
        btn.addEventListener('click',next);
    }
}
var nextForm = 1;
function next(ev){
    var form = ev.target.parentNode.parentNode;
    form.style.opacity='0';
    setTimeout(function(){
        form.className='hide';
        forms[nextForm].className='';
        forms[nextForm++].style.opacity='1';
    },500);

    // setTimeout(function(){
    //     forms[nextForm++].className='';
    // },500);

}