var container = document.getElementById('container');
var body = document.getElementsByTagName('body')[0];
var btn = document.getElementById('back');
btn.addEventListener('click', function (ev) {
    var path = 'http://localhost:3000';
    fetch(path).then(function (res) {
        return res.text();
    }).then(function (res) {
        var content = document.createElement('div');
        content.innerHTML = res;
        var articles = content.getElementsByTagName('article');
        // console.log(articles);
        var current = container.getElementsByTagName('article');
        // console.log(current);
        var newContainer = document.createElement('div');
        newContainer.appendChild(btn.parentNode);
        for (let i = 0; i < articles.length; i++) {
            let clone = articles[i].cloneNode(true);
            newContainer.appendChild(clone);
        }
        for (let i = 0; i < current.length; i++) {
            let clone = current[i].cloneNode(true);
            newContainer.appendChild(clone);
        }
        console.log(newContainer);
        newContainer.id = 'container';
        body.replaceChild(newContainer, document.getElementById('container'));
    });
    ev.preventDefault();
});
