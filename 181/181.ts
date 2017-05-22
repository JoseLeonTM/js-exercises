

Date.prototype.nextDay=function(){
    return this.setDate(this.getDate()+1);
};
let day = new Date();
console.log(day);
day.nextDay();
console.log(day);