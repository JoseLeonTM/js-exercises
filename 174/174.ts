
var fibonacci = (function(){
    var sequence : number[]= [1,1];

    return function(n : number) : number{
        n--;
        if(n>0) {
            if (sequence[n]) {
                return sequence[n];
            }
            while (sequence.length < (n+1)){
                sequence.push(sequence.slice(-2,-1)[0]+sequence.slice(-1)[0]);
            }
            return sequence[n];
        }
    }
})();
console.log("Result: "+fibonacci(3));//2
console.log("Result: "+fibonacci(5));//5
console.log("Result: "+fibonacci(10));//55
console.log("Result: "+fibonacci(8));//21
console.log("Result: "+fibonacci(7));//13