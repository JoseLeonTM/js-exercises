
var left = document.getElementById('left');
var right= document.getElementById('right');
var loginBtn = right.getElementsByTagName('li')[1];
var login = right.getElementsByClassName('login')[0];
var goBtn = document.getElementById('go');

document.addEventListener('click',function(ev){
    var isLogin = ev.target;
    if(isLogin!=loginBtn){
        while(isLogin){
            if(isLogin==login){
                return;
            }
            isLogin=isLogin.parentNode;
        }
        login.className='login hide';
    }
});
loginBtn.addEventListener('click',function(){
    login.className='login';
});