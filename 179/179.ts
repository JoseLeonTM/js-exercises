
var obj1={
    name: 'Carlos',
    last:'Salazar',
    age:'23',
    job:'programmer'
    },
    obj2={
        animal:'Lion',
        name:'Alex',
        age:'3',
        color:'orange'
    },
    obj3={
        brand:'Toyota',
        model:'2012',
        name:'Corolla',
        color:'red'
    };

function checkProps(o1:Object,o2:Object):Object{
    let props: Object={};

    for(let prop in o1){
        if(o2[prop]){
            if(o1[prop]!==o2[prop]){
                props[prop]=[o1[prop],o2[prop]];
            }
        }
        else{
            props[prop]=o1[prop];
        }
    }
    for(let prop in o2){
        if(!props[prop]){
            props[prop]=o2[prop];
        }
    }
    return props;
}
console.log(checkProps(obj1,obj2));
console.log(checkProps(obj1,obj3));
