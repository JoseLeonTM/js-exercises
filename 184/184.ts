interface Candidate{
    firstName:string;
    lastName:string;
    phone:string;
}
function printName(candidate:Candidate):string{
    let fullName : string;
    fullName = candidate.firstName;
    fullName+=' '+candidate.lastName;
    return fullName;
}
var candidate = {
    name : {
        firstName : 'John',
        lastName : 'Galt',
        phone : '6442-161381'
    }
};
///////////A//////////
var info = document.getElementsByClassName('info')[1];
var [divName,divFullName] = info.children;
divName.innerText=candidate.name.firstName;
divFullName.innerText=printName(candidate.name);

/////////B//////////
var table = document.getElementById('table');
function addCandidate(can:Candidate){
    let row = document.createElement('tr');
    ///////BUILDING THE EDDIT/DELETE CELL/////////
    let eddel = document.createElement('td'),
        edit = document.createElement('span'),
        del= document.createElement('span');
    edit.innerText='Edit';
    del.innerText='Delete';
    edit.addEventListener('click',editCandidate);
    del.addEventListener('click',deleteCandidate);
    eddel.appendChild(edit);
    eddel.appendChild(del);

    for(let prop in can){
        let td = document.createElement('td');
        td.className='data';
        td.innerText=can[prop];
        row.appendChild(td);
    }
    row.appendChild(eddel);
    return row;
}
///ADDING THE FIRST CANDIDATE/////
table.appendChild(addCandidate(candidate.name));
var getReq = new XMLHttpRequest();
getReq.open('GET','my-server/candidate-list',true);
getReq.onload=function(){
    var candidates = JSON.parse(getReq.responseText);
    for(let can in candidates){
        table.appendChild(addCandidate(candidates[can]));
    }
};

var addBtn = document.getElementById('add');
addBtn.addEventListener('click',addNew);
function addNew(){
    /////////TEMPLATE FOR NEW CANDIDATE///////////
    var temporal = document.createElement('tr');
    temporal.innerHTML=[
        '<td contenteditable="true"></td>',
        '<td contenteditable="true"></td>',
        '<td contenteditable="true"></td>',
        '<td><span id="save">Save</span><span id="cancel">Cancel</span></td>'
    ].join('');

    table.appendChild(temporal);
    var saveBtn = document.getElementById('save');
    var cancelBtn = document.getElementById('cancel');
    saveBtn.addEventListener('click',function(){
        var inputs = temporal.children;
        var candidate={
            firstName: inputs[0].textContent,
            lastName: inputs[1].textContent,
            phone: inputs[2].textContent
        };
        table.appendChild(addCandidate(candidate));
        table.removeChild(temporal);
        var postReq = new XMLHttpRequest();
        postReq.open('POST','my-server/candidate-list',true);
        postReq.send(candidate);
    });
    cancelBtn.addEventListener('click',function(){
        table.removeChild(temporal);
    })
}

///////////EDIT / DELETE CANDIDATES//////////
function editCandidate(ev){
    var row = ev.target.parentNode.parentNode;
    var inputs = row.children;
    var temporal = document.createElement('tr');
    temporal.innerHTML=[
        '<td contenteditable="true">'+inputs[0].textContent+'</td>',
        '<td contenteditable="true">'+inputs[1].textContent+'</td>',
        '<td contenteditable="true">'+inputs[2].textContent+'</td>',
        '<td><span id="save">Save</span><span id="cancel">Cancel</span></td>'
    ].join('');
    table.replaceChild(temporal,row);
    var saveBtn = document.getElementById('save');
    var cancelBtn = document.getElementById('cancel');
    saveBtn.addEventListener('click',function(){
        var inputs = temporal.children;
        var candidate={
            firstName: inputs[0].textContent,
            lastName: inputs[1].textContent,
            phone: inputs[2].textContent
        };
        var putReq= new XMLHttpRequest();
        putReq.open('PUT','my-server/candidate-list',true);
        putReq.send(candidate);
        table.replaceChild(addCandidate(candidate),temporal);
    });
    cancelBtn.addEventListener('click',function(){
        table.replaceChild(row,temporal);
    });
}
function deleteCandidate(ev) {
    var row = ev.target.parentNode.parentNode;
    var delReq = new XMLHttpRequest();
    delReq.open('DELETE','my-server/candidate-list/',true);
    delReq.send();
    table.removeChild(row);
}