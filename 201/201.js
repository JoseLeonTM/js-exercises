var Ps = document.getElementsByTagName('p');
for (let i = 1; i < Ps.length; i = i + 2) {
    Ps[i].className = 'hide';
}
for (let i = 0; i < Ps.length; i = i + 2) {
    Ps[i].addEventListener('click', function () {
        if (!Ps[i + 1].className) {
            Ps[i + 1].className = 'hide';
        }
        else {
            Ps[i + 1].className = '';
        }
    });
}
