var left = document.getElementById('left');
var right = document.getElementById('right');
var loginBtn = right.getElementsByTagName('li')[1];
var login = right.getElementsByClassName('login')[0];
var goBtn = document.getElementById('go');
document.addEventListener('click', function (ev) {
    console.log(ev.target);
    if (ev.target != login) {
        login.className = 'login';
    }
});
loginBtn.addEventListener('click', function () {
    login.className = 'login';
    console.log(login);
});
