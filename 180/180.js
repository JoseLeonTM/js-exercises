function addToDate(name, callback) {
    Date.prototype[name] = callback;
}
addToDate('backInTheDay', function () {
    this.setFullYear(this.getFullYear() - 30);
    return this;
});
let day = new Date();
console.log(day.backInTheDay());
