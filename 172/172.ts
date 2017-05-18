

var arr = [1,2,3,4];
function duplicate(arr:Array<any>):Array<any>{
    let length=arr.length;
    for(let i=0; i<length;i++){
        arr.push(arr[i]);
    }
    return arr;
}
console.log(duplicate(arr));