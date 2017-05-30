
var Ps = document.getElementsByTagName('p');
var togglers = [],
    content = [];
for(let i =1; i< Ps.length; i=i+2){
    Ps[i].className='hide';
    content.push(Ps[i]);
}
for(let i =0; i<Ps.length; i=i+2){
    togglers.push(Ps[i]);
}
for(let i=0;i<togglers.length;i++){
    togglers[i].addEventListener('click',function(){
        for(let o=0;o<content.length;o++){
            if(o!=i){
                content[o].className='hide';
            }
        }
        if(content[i].className){
            content[i].className='';
        }
        else{
            content[i].className='hide';
        }
    });
}
