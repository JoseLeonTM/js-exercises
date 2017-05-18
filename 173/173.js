var perm = [], used = [];
function permute(input) {
    var next;
    for (let i = 0; i < input.length; i++) {
        next = input.splice(i, 1)[0];
        used.push(next);
        if (input.length == 0) {
            perm.push(used.slice());
        }
        permute(input);
        input.splice(i, 0, next);
        used.pop();
    }
    return perm;
}
console.log(permute([1, 2, 3]));
