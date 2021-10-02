var canvas = document.createElement('canvas');
var width = innerWidth;
var height = innerHeight;
canvas.width = width;
canvas.height = height;
var ctx = canvas.getContext('2d');

document.body.style.margin = 0;
canvas.style.display = 'block';

document.body.append(canvas);

function draw() {
    ctx.fillStyle = '#cccccc';
    ctx.fillRect(0, 0, width, height);
}

function update() {

}

function loop() {
    draw();
    update();

    window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);