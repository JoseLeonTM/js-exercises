


var table = document.getElementsByTagName('table')[0];
var button = document.getElementById('sort');
var body = document.getElementById('body');
button.addEventListener('click',sort);
function sort(){
    var people = [];
    var rows = table.getElementsByTagName('tr');
    var header = rows[0];
    for(let i=1;i<rows.length;i++){
        people.push(rows[i]);
    }
    people.sort(function(a,b){
       return a.children[1].innerText - b.children[1].innerText;
    });
    var newTable=document.createElement('table');
    newTable.appendChild(header);
    for(let i =0;i<people.length;i++){
        newTable.appendChild(people[i]);
    }
    body.replaceChild(newTable,table);
    table = document.getElementsByTagName('table')[0];
}