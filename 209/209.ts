
var power = function(pow:number):Function{
    return function(num:number):number{
        let result:number=num;
        for(let i=1;i<pow;i++){
            result=result*num;
        }
        return result;
    }
};
var power2 = power(2);
var power5 = power(5);
console.log(power2(8));
console.log(power5(4));