
(function(arr:number[],size:number,total:number){
    // var arr : number[] = [3,2,1,0,-3,2,2,-2];
        var combs : Array<number[]>=[],
        result : number[][];
    function possibleCombs(arra, size){
        var result_set = [],
            result;
        for(var x = 0; x < Math.pow(2, arra.length); x++){
            result = [];
            let i = arra.length - 1;
            while(i>=0){
                if ((x & (1 << i)) !== 0) {
                    result.push(arra[i]);
                }
                i--;
            }
            if( result.length == size){
                result_set.push(result.sort());
            }
        }
        return result_set;
    }
    function checkBefore(arrays:number[][],arr:number[]){
        for(let i=0;i<arrays.length;i++){
            if(arrays[i].join('')==arr.join('')){
                return false;
            }
        }
        return true;
    }
    function addToTotal(numbers:number[][], total:number):number[][]{
        var result : number[][]=[];
        for(let i =0;i<numbers.length;i++){
            let sum=0;
            for(let o=0;o<numbers[i].length;o++){
                sum+=numbers[i][o];
            }
            if(sum==0){
                if(checkBefore(result,numbers[i])) {
                    result.push(numbers[i]);
                }
            }
        }
        return result;
    }
    combs=possibleCombs(arr,size);
    result = addToTotal(combs,total);
    console.log("Result: ",result);
// })([3,0,-3,2,1],3,0);
// })([3,2,1,0,-3,2,2,-2],3,0);
})([3,2,1,0,-3,2,2,-2,45,87,45,3,512,75,9,3,7,-21,-32,-87,-56],5,0);
