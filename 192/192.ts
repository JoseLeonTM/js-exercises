
var btn = document.getElementsByTagName('button')[0];
var list = document.getElementById('list');

var contact = document.createElement('div');
for(let i=0; i<4;i++){
    let span = document.createElement('span');
    contact.appendChild(span);
}
btn.addEventListener('click',function(ev){
    let inputs = document.getElementsByTagName('input');
    let info = contact.cloneNode(true);
    let cells = info.childNodes;

    ///////SEND TO SERVER/////////
    var data = {
        name:inputs[0].value,
        lastName:inputs[1].value,
        phone:inputs[2].value,
        email:inputs[3].value
    };
    var req = new XMLHttpRequest();
    req.open('POST','http://da-server/contacts',true);
    req.send(data);
    for(let i =0;i<cells.length;i++){
        cells[i].textContent=inputs[i].value;
        inputs[i].value='';
    }
    list.appendChild(info);
    ev.preventDefault();
});