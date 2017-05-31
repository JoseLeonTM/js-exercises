(function () {
    var parent = document.getElementsByTagName('div')[1], [input, save] = document.getElementsByTagName('input'), names = [];
    save.addEventListener('click', addNew, false);
    function addNew(ev) {
        ev.preventDefault();
        var select = document.getElementsByTagName('select')[0], name = input.value;
        input.value = '';
        function lookForName(cur) {
            return cur == name;
        }
        if (!names.find(lookForName)) {
            names.push(name);
            names = names.sort();
        }
        var newSelect = document.createElement('select');
        for (let i = 0; i < names.length; i++) {
            let option = document.createElement('option');
            option.innerText = names[i];
            newSelect.appendChild(option);
        }
        parent.replaceChild(newSelect, select);
    }
})();
