var container = document.getElementById('container');
var ball = document.getElementById('ball');
var max = 100, min = 0, interval = 10, speed = 1, height = max, falling = true;
ball.style.bottom = height + '%';
function down() {
    height -= speed;
    ball.style.bottom = height + '%';
}
function up() {
    height += speed;
    ball.style.bottom = height + '%';
}
var bounce = setInterval(function () {
    if (falling) {
        down();
    }
    else {
        up();
    }
    if (height <= min) {
        falling = false;
        max -= interval;
    }
    if (height >= max) {
        falling = true;
    }
    if (max <= min) {
        clearInterval(bounce);
    }
}, 10);
