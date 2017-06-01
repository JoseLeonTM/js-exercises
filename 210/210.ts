
interface Move{
    name : string;
    type : string;
    pp : number;
    power : number;
    accuracy : number;
    category : 'Physical' | 'Special';
}
interface Pokemon{
    name: string;
    type : string;
    moves : Move[];
}
interface Trainer{
    name : string;
    party : Pokemon[];
}

class  Player : Trainer{
    
}