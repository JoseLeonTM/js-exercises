(function () {
    var form = document.getElementsByTagName('form')[0], inputs = document.getElementsByTagName('input'), button = document.getElementById('submit');
    form.addEventListener('keydown', before);
    form.addEventListener('keyup', after);
    var prev, key, aft;
    function validate(elem) {
        var regs = [/1234/, /qwert/, /asdf/, /(\w)\1{3}/];
        setTimeout(function () {
            elem.style.backgroundColor = 'white';
        }, 200);
        for (let i = 0; i < regs.length; i++) {
            if (elem.value.match(regs[i])) {
                elem.value = prev;
                elem.style.backgroundColor = 'red';
                return;
            }
        }
    }
    function before(ev) {
        prev = ev.target.value;
        key = ev.key;
    }
    function after(ev) {
        aft = ev.target.value;
        validate(ev.target);
    }
})();
