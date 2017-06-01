var Categories;
(function (Categories) {
    Categories[Categories["Physical"] = 0] = "Physical";
    Categories[Categories["Special"] = 1] = "Special";
    Categories[Categories["Status"] = 2] = "Status";
})(Categories || (Categories = {}));
var Types;
(function (Types) {
    Types[Types["Normal"] = 0] = "Normal";
    Types[Types["Fighting"] = 1] = "Fighting";
    Types[Types["Flying"] = 2] = "Flying";
    Types[Types["Poison"] = 3] = "Poison";
    Types[Types["Ground"] = 4] = "Ground";
    Types[Types["Rock"] = 5] = "Rock";
    Types[Types["Bug"] = 6] = "Bug";
    Types[Types["Ghost"] = 7] = "Ghost";
    Types[Types["Steel"] = 8] = "Steel";
    Types[Types["Fire"] = 9] = "Fire";
    Types[Types["Water"] = 10] = "Water";
    Types[Types["Grass"] = 11] = "Grass";
    Types[Types["Electric"] = 12] = "Electric";
    Types[Types["Psychic"] = 13] = "Psychic";
    Types[Types["Ice"] = 14] = "Ice";
    Types[Types["Dragon"] = 15] = "Dragon";
    Types[Types["Dark"] = 16] = "Dark";
    Types[Types["Fairy"] = 17] = "Fairy";
})(Types || (Types = {}));
class Battle {
    constructor(p1, p2) {
        this.players = [p1, p2];
        this.pokes = [p1.party[0], p2.party[0]];
        this.turn = true;
        console.log(this.players[1].name + ' would like to battle!');
        console.log(this.players[1].name + ' sent out ' + this.pokes[1].name + '.');
        console.log('Go, ' + this.pokes[0].name + '!');
    }
    shift(change) {
        let turn = this.turn ? 0 : 1;
        if (this.players[turn].party[change]) {
            console.log("That's enough, " + this.pokes[turn].name + '. Come back!');
            this.pokes[turn] = this.players[turn].party[change];
            console.log("Your foe is weak, get 'em, " + this.pokes[turn].name + '!');
        }
        else {
            console.log(this.players[turn].name + " doesn't have enough Pokemon.");
        }
        this.turn = !this.turn;
    }
    attack(atk) {
        var attacker = this.turn ? 0 : 1, defender = this.turn ? 1 : 0, attack = this.pokes[attacker].moves[atk];
        if (!attack || attack.pp == 0) {
            attack = moves.struggle();
        }
        else {
            attack.pp--;
        }
        var output = this.pokes[attacker].name + ' used ' + attack.name + ' on ' + this.pokes[defender].name + '.';
        if (attack.category == Categories.Physical && this.pokes[defender].type == Types.Ghost) {
            output += ' But if failed!';
        }
        else if (Math.random() < 0.1) {
            output += ' Critial hit!';
        }
        console.log(output);
        this.turn = !this.turn;
    }
}
class Trainer {
    constructor(name, party) {
        this.name = name;
        this.party = party;
    }
}
class Pokemon {
    constructor(name, type, moves) {
        this.name = name;
        this.type = type;
        this.moves = moves;
    }
}
class Move {
    constructor(name, type, pp, power, accuracy, category) {
        this.name = name;
        this.type = type;
        this.pp = pp;
        this.power = power;
        this.accuracy = accuracy;
        this.category = category;
    }
}
var moves = {
    struggle: () => new Move('Struggle', Types.Normal, 1, 30, 100, Categories.Physical),
    tackle: () => new Move('Tackle', Types.Normal, 30, 20, 100, Categories.Physical),
    scratch: () => new Move('Scratch', Types.Normal, 30, 15, 100, Categories.Physical),
    leer: () => new Move('Leer', Types.Normal, 30, 0, 100, Categories.Special),
    shadowBall: () => new Move('Shadow Ball', Types.Ghost, 15, 80, 100, Categories.Special),
    bite: () => new Move('Bite', Types.Dark, 25, 60, 100, Categories.Physical),
    darkPulse: () => new Move('Dark Pulse', Types.Dark, 15, 80, 100, Categories.Special),
    hypnosis: () => new Move('Hypnosis', Types.Psychic, 20, 0, 60, Categories.Status),
    withdraw: () => new Move('Withdraw', Types.Normal, 30, 0, 100, Categories.Physical),
    waterGun: () => new Move('Water Gun', Types.Water, 25, 50, 100, Categories.Special)
};
var pkmn = {
    charmander: () => new Pokemon('Charmander', Types.Fire, [moves.scratch(), null, null, null]),
    squirtle: () => new Pokemon('Squirtle', Types.Water, [moves.tackle(), moves.withdraw(), moves.waterGun(), null]),
    gengar: () => new Pokemon('Gengar', Types.Ghost, [moves.shadowBall(), moves.hypnosis(), moves.darkPulse(), moves.bite()])
};
var player = new Trainer('Tom', [pkmn.charmander(), pkmn.squirtle(), null, null, null, null]);
var enemy = new Trainer('Mark', [pkmn.gengar(), null, null, null, null, null]);
var rivalBattle = new Battle(player, enemy);
rivalBattle.attack(1);
rivalBattle.attack(3);
rivalBattle.shift(1);
rivalBattle.attack(2);
rivalBattle.attack(2);
