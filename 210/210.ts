

enum Categories{
    Physical,
    Special,
    Status
}
enum Types{
    Normal,
    Fighting,
    Flying,
    Poison,
    Ground,
    Rock,
    Bug,
    Ghost,
    Steel,
    Fire,
    Water,
    Grass,
    Electric,
    Psychic,
    Ice,
    Dragon,
    Dark,
    Fairy
}
interface move{
    name : string;
    type : Types;
    pp : number;
    power : number;
    accuracy : number;
    category : Categories;
}
interface pokemon{
    name: string;
    type : Types;
    moves : [move,move|null,move|null,move|null];
}
interface trainer{
    name : string;
    party : [pokemon,pokemon|null,pokemon|null,pokemon|null,pokemon|null,pokemon|null];
}
interface battle{
    players : [trainer,trainer],
    pokes : [pokemon,pokemon],
    turn : boolean
}
class Battle implements battle{
    public players: [trainer,trainer];
    public pokes : [pokemon,pokemon];
    public turn : boolean;
    constructor(p1:Trainer,p2:Trainer){
        this.players=[p1,p2];
        this.pokes=[p1.party[0],p2.party[0]];
        this.turn= true;
        console.log(this.players[1].name+' would like to battle!');
        console.log(this.players[1].name+' sent out '+this.pokes[1].name+'.');
        console.log('Go, '+this.pokes[0].name+'!');
    }
    shift(change:number){
        let turn = this.turn ? 0 : 1;
        if(this.players[turn].party[change]) {
            console.log("That's enough, "+this.pokes[turn].name+'. Come back!');
            this.pokes[turn] = this.players[turn].party[change];
            console.log("Your foe is weak, get 'em, "+this.pokes[turn].name+'!');
        }
        else{
            console.log(this.players[turn].name+" doesn't have enough Pokemon.");
        }
        this.turn = !this.turn;
    }
    attack(atk:number){
        var attacker : number = this.turn ? 0:1,
            defender : number = this.turn ? 1:0,
            attack : move | null = this.pokes[attacker].moves[atk];
        if(!attack || attack.pp==0){
            attack = moves.struggle();
        }
        else{
            attack.pp--;
        }
        var output:string = this.pokes[attacker].name+' used '+attack.name+' on '+this.pokes[defender].name+'.';
        if(attack.category==Categories.Physical && this.pokes[defender].type==Types.Ghost){
            output+=' But if failed!';
        }
        else if(Math.random()<0.1){
            output+=' Critial hit!';
        }
        console.log(output);
        this.turn = !this.turn;
    }
}
class Trainer implements trainer{
    constructor(
        public name:string,
        public party:[pokemon,pokemon|null,pokemon|null,pokemon|null,pokemon|null,pokemon|null]
    ){}
}
class Pokemon implements pokemon{
    constructor(
        public name:string,
        public type:Types,
        public moves:[move,move|null,move|null,move|null]
    ){}
}
class Move implements move{
    constructor(
        public name:string,
        public type:Types,
        public pp:number,
        public power:number,
        public accuracy:number,
        public category : Categories
    ){}
}


var moves = {
    struggle:()=>new Move('Struggle',Types.Normal,1,30,100,Categories.Physical),
    tackle:()=>new Move('Tackle',Types.Normal,30,20,100,Categories.Physical),
    scratch:()=>new Move('Scratch',Types.Normal,30,15,100,Categories.Physical),
    leer:()=>new Move('Leer',Types.Normal,30,0,100,Categories.Special),
    shadowBall:()=>new Move('Shadow Ball',Types.Ghost,15,80,100,Categories.Special),
    bite:()=>new Move('Bite',Types.Dark,25,60,100,Categories.Physical),
    darkPulse:()=>new Move('Dark Pulse',Types.Dark,15,80,100,Categories.Special),
    hypnosis:()=>new Move('Hypnosis',Types.Psychic,20,0,60,Categories.Status),
    withdraw: ()=> new Move('Withdraw',Types.Normal,30,0,100,Categories.Physical),
    waterGun:()=>new Move('Water Gun',Types.Water,25,50,100,Categories.Special)
};
var pkmn={
    charmander:()=>new Pokemon('Charmander',Types.Fire,[moves.scratch(),null,null,null]),
    squirtle:()=>new Pokemon('Squirtle',Types.Water,[moves.tackle(),moves.withdraw(),moves.waterGun(),null]),
    gengar:()=>new Pokemon('Gengar',Types.Ghost,[moves.shadowBall(),moves.hypnosis(),moves.darkPulse(),moves.bite()])
};
var player = new Trainer('Tom',[pkmn.charmander(),pkmn.squirtle(),null,null,null,null]);
var enemy = new Trainer('Mark',[pkmn.gengar(),null,null,null,null,null]);

var rivalBattle = new Battle(player,enemy);

rivalBattle.attack(1);
rivalBattle.attack(3);
rivalBattle.shift(1);
rivalBattle.attack(2);
rivalBattle.attack(2);
