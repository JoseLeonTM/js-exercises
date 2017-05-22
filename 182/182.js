function check2() {
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] == 2) {
            return true;
        }
    }
    return false;
}
console.log(check2('this', 'is', 'sparta') ?
    'There is a 2!' :
    'There was no 2.');
console.log(check2('the', 'right', 'answer is', '2') ?
    'There is a 2!' :
    'There was no 2.');
