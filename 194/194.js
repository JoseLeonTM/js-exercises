Array.prototype.remove = function (...elements) {
    let newArray = [];
    newArray.push(...this);
    elements.sort((a, b) => b - a);
    for (let i = 0; i < elements.length; i++) {
        if (elements[i] >= 0 && elements[i] < newArray.length) {
            newArray.splice(elements[i], 1);
        }
    }
    return newArray;
};
var arr = [1, 2, 3, 4, 5, 6, 7];
var arr2 = arr.remove(1, 2, 6);
console.log("Original array: ", arr);
console.log("Trimmed array: ", arr2);
