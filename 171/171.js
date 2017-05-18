var arr = [1, 2, 3, [4, 5, [6, 7]], 8, 9];
function flat(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] instanceof Array) {
            newArr.push(...flat(arr[i]));
        }
        else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(flat(arr));
