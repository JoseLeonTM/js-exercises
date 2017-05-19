class Animal {
    constructor(name) {
        this.name = name;
        this.lives();
    }
    lives() {
        this.breathes = true;
        this.moves = true;
    }
}
class Feline extends Animal {
    constructor(name, sound) {
        super(name);
        this.sound = sound;
    }
    makeSound() {
        console.log(this.sound);
    }
}
var lion = new Feline('Lion', 'Roar!');
lion.makeSound();
