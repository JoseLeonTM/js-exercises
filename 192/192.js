var btn = document.getElementsByTagName('button')[0];
var list = document.getElementById('list');
var contact = document.createElement('div');
for (let i = 0; i < 4; i++) {
    let span = document.createElement('span');
    contact.appendChild(span);
}
btn.addEventListener('click', function (ev) {
    /////CREATE TEMPLATE FOR NEW USER
    ////INSERT TEMPLATE INTO list
    let inputs = document.getElementsByTagName('input');
    let info = contact.cloneNode(true);
    let cells = info.childNodes;
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = inputs[i].value;
        inputs[i].value = '';
    }
    list.appendChild(info);
    ev.preventDefault();
});
