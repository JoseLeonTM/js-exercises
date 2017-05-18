
var arr1 : number[] = [2, 3, 5, 3],
    arr2 : number[] = [3, 4, 3, 5, 3, 6, 8];//[3,5,3]

// var arr1 : number[] = [2,2,3,5,3,7,8],
//     arr2 : number[] = [3,2,1,4,3,5,3,6,8];//[2,3,5,3,8]
function arrayIntersection(arr1:number[], arr2:number[]):number[]{
    let newArr= [];
    let cur=0;
    for(let i=0;i<arr1.length;i++){
        for(let o=cur;o<arr2.length;o++){
            if(arr2[o]==arr1[i]){
                newArr.push(arr2[o]);
                cur=o+1;
                break;
            }
        }
    }
    return newArr;
}
console.log(arrayIntersection(arr1,arr2));