var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ww = window.innerWidth;
var wh = window.innerHeight;
var size = 100;
var x0 = [200, 300, 400, 500, 600];
var y0 = [300, 300, 300, 300, 300];
var x = [200, 300, 400, 500, 600];
var y = [300, 300, 300, 300, 300];
var dx = [];
var dy = [];
var speed = 8;
for (var i = 0; i < 5; i++) {
    dx[i] = (Math.random() * 2 + (-1));
    dy[i] = (Math.random() * 2 + (-1));
}
var elemName = ["Ja", "Va", "Sc", "Ri", "Pt"];
var elemNumColor = "#c4caca";
var elemNum = [1, 2, 3, 4, 5];

canvas.height = wh;
canvas.width = ww;

var startBtn = document.getElementById("start-button");
var magnet = false;
startBtn.addEventListener("mouseover", magnetOn);
startBtn.addEventListener("mouseout", magnetOff);

function magnetOn() {
    magnet = true;
    console.log('true');
    return magnet;
}

function magnetOff() {
    magnet = false;
    console.log('false');
    return magnet;
}

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
    ctx.font = "600 2.4rem IBM Plex Mono";
    ctx.textAlign = "center";
    ctx.fillStyle = "#41c7c7";
    ctx.fillText(elemName[i], x[i] + size / 2, y[i] + size * 0.6);
    // number
    ctx.font = "300 13px IBM Plex Mono";
    ctx.fillStyle = elemNumColor;
    ctx.fillText(elemNum[i], x[i] + size * 0.14, y[i] + size * 0.19);
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < 5; i++) {
        drawElem(i);
        if (!magnet) {
            if (x[i] + dx[i] * speed > ww - size || x[i] + dx[i] * speed < 0) {
                speed = 3;
                dx[i] = -dx[i];
            }
            if (y[i] + dy[i] * speed > wh - size || y[i] + dy[i] * speed < 0) {
                speed = 3;
                dy[i] = -dy[i];
            }
            x[i] += dx[i] * speed;
            y[i] += dy[i] * speed;
        } else {
            speed = 8;
            if (Math.abs(x0[i] - x[i]) > 4) {
                x[i] = x[i] + Math.round(speed * (x0[i] - x[i]) / Math.abs(x0[i] - x[i]));
            } else {
                x[i] = x0[i]
            }
            if (Math.abs(y0[i] - y[i]) > 4) {
                y[i] = y[i] + Math.round(speed * (y0[i] - y[i]) / Math.abs(y0[i] - y[i]));
            } else {
                y[i] = y0[i];
            }
        }
    }
}

setInterval(draw, 10);