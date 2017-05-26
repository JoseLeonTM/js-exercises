
var randomGen=(function(){
    var generated : Object={},
        count : number = 0;
    return function(min:number,max:number):number | boolean{
        function gen():number{
            return Math.floor(Math.random()*(max-min+1))+min;
        }
        let range : number = max-min+1;
        let random = gen();
        while(generated[random]){
            random = gen();
            if(count==range){
                return false;
            }
        }
        count++;
        generated[random]=true;
        return random;
    }
})();
console.log(randomGen(2,4));
console.log(randomGen(2,4));
console.log(randomGen(2,4));
console.log(randomGen(2,4));
console.log(randomGen(2,5));