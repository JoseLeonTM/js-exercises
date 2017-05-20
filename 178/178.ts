
import Mustache = require('mustache');

function init(options:Array<any>):string{
    let temp : Array<Object> = ["<div id='dialog' action='none'>"],
        template : string;
    for(let i=0; i<options.length;i++){
        let input = [
            '<div>',
            '<label>'+options[i].name+'</label>',
            '<input type="'+options[i].type+'"/>',
            '</div>'
            ].join('');
        temp.push(input);
    }

    temp.push("<button>Confirm</button>");
    temp.push("<button>Decline</button>");
    temp.push("</div>");
    template = temp.join('');
    Mustache.parse(template);
    return template;
}
var inputs = [
    {name: 'Title', type: 'text'},
    {name: 'First name', type: 'text'},
    {name: 'Last name', type: 'text'}
];
var rendered = Mustache.render(init(inputs), {name: "world"});

//////////RELEVANT ELEMENTS//////////
var body = document.getElementsByTagName('body')[0];
var greet = document.getElementsByTagName('h1')[0];
var bg = document.createElement('div');
bg.id='bg';
var form = document.getElementById('dialog');
bg.innerHTML=rendered;
body.appendChild(bg);
var [conBtn,decBtn]= document.getElementsByTagName('button');

conBtn.addEventListener('click',confirm);
decBtn.addEventListener('click',decline);
function confirm(){
    var inputs = document.getElementsByTagName('input');
    for(let i=0;i<inputs.length;i++){
        greet.innerText+=' '+inputs[i].value;
    }
    // console.log('confirmed');
    body.removeChild(bg);
}
function decline(){
    // console.log('declined');
    greet.innerText="There is no one to greet here";
    body.removeChild(bg);
}

