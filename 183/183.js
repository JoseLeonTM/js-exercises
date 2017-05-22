var foo = (function () {
    function priv() {
        console.log("This is a private method");
    }
    return {
        bar() {
            console.log('This is the bar method');
        },
        test() {
            console.log('Lets test the private method');
            priv();
        }
    };
})();
foo.bar();
foo.test();
