class Person {
    constructor(name, last) {
        this.name = name;
        this.last = last;
    }
    fullName() {
        return this.name + ' ' + this.last;
    }
    send() {
        var xhttp = new XMLHttpRequest();
        xhttp.open('GET', '/contact.html?name=' +
            this.name + '&last=' + this.last);
        xhttp.send();
    }
}
class Medic extends Person {
    constructor(name, last, spec) {
        super(name, last);
        this.spec = spec;
    }
    doctor() {
        return 'Dr. ' + this.name + ' ' + this.last + ' is a ' + this.spec;
    }
}
var p1 = new Person('Jose', 'Leon');
var d1 = new Medic('Mario', 'Leon', 'Traumatologist');
console.log(p1.fullName());
console.log(d1.fullName());
console.log(d1.doctor());
