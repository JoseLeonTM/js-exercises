var div = document.getElementsByTagName('div')[0];
var a = document.getElementById('id1');
div.className = 'hide';
a.addEventListener('click', function () {
    div.className = '';
});
