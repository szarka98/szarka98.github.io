var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ww = window.innerWidth;
var wh = window.innerHeight;
var size = 100;
var x = [110, 120, 130, 140, 150];
var y = [110, 120, 130, 140, 150];
var dx = [];
var dy = [];
var speed = 3;
for (var i = 0; i < 5; i++) {
    dx[i] = (Math.random() * 2 + (-1))*speed;
    dy[i] = (Math.random() * 2 + (-1))*speed;
}
var elemName = ["Ja", "Va", "Sc", "Ri", "Pt"];
var elemNameColor = "#c4caca";
var elemNum = [1, 2, 3, 4, 5];

canvas.height = wh;
canvas.width = ww;

function drawElem(i) {
    // box
    ctx.beginPath();
    ctx.rect(x[i], y[i], size, size);
    ctx.fillStyle = "#212424";
    ctx.fillRect(x[i], y[i], size, size);
    ctx.strokeStyle = "#646a6a";
    ctx.strokeWidth = 1;
    ctx.stroke();
    // elem
    ctx.font = "600 36px IBM Plex Mono";
    ctx.textAlign = "center";
    ctx.fillStyle = "#41c7c7";
    ctx.fillText(elemName[i], x[i] + size / 2, y[i] + size * 0.6);
    // number
    ctx.font = "300 13px IBM Plex Mono";
    ctx.fillStyle = elemNameColor;
    ctx.fillText(elemNum[i], x[i] + size * 0.14, y[i] + size * 0.19);
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i=0; i<5; i++) {
        drawElem(i);
        if (x[i] + dx[i] > ww - size || x[i] + dx[i] < 0) {
            dx[i] = -dx[i];
        }
        if (y[i] + dy[i] > wh - size || y[i] + dy[i] < 0) {
            dy[i] = -dy[i];
        }

        x[i] += dx[i];
        y[i] += dy[i];
    }
}

setInterval(draw, 10);