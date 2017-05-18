
var arr = [1,13,65,3,7,96,46,100,32];
function max(arr : number[]) : number{
    let big : number=0;
    for(let i =0; i<arr.length;i++){
        big = Math.max(big,arr[i]);
    }
    return big;
}
console.log(max(arr));