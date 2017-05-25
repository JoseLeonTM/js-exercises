function matchStr(match, str) {
    let parts = str.split('');
    let cur = 0;
    for (let i = 0; i < parts.length; i++) {
        if (parts[i] == '*' || match.indexOf(parts[i]) == cur) {
            cur++;
        }
        else {
            return false;
        }
    }
    return true;
}
console.log(matchStr('sofia', '*of'));
console.log(matchStr('sofia', 'sof*a'));
console.log(matchStr('sothda', 's***a'));
