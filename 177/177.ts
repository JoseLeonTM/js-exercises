
class Animal{
    name:string;
    breathes:boolean;
    moves:boolean;
    constructor(name:string){
        this.name = name;
        this.lives();
    }
    lives(){
        this.breathes = true;
        this.moves = true;
    }
}
class Feline extends Animal{
    sound:string;
    constructor(name:string,sound:string){
        super(name);
        this.sound=sound;
    }
    makeSound(){
        console.log(this.sound);
    }
}
var lion = new Feline('Lion','Roar!');
lion.makeSound();
