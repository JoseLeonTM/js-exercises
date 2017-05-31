

var container = document.getElementById('container');
var ball = document.getElementById('ball');

var max : number = 100,
    min : number=0,
    interval : number=10,
    speed: number= 1,
    height : number= max,
    falling : boolean = true;
ball.style.bottom=height+'%';
function down(){
    height-=speed;
    ball.style.bottom=height+'%';
}
function up(){
    height+=speed;
    ball.style.bottom=height+'%';
}
var bounce = setInterval(function() {
    if(falling){
        down();
    }
    else{
        up();
    }
    if(height <= min){
        falling=false;
        max-=interval;
    }
    if(height>=max){
        falling=true;
    }
    if(max<=min){
        clearInterval(bounce);
    }
},10);