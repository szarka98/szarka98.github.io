var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var ww = window.innerWidth;
var wh = window.innerHeight;
canvas.height = wh;
canvas.width = ww;

var size = 100;
var leftX = ww / 2 - 2.5 * size;

var speed = 12;

var elemName = [
  ["St", "At", "E", " ", "Of"],
  ["Ja", "Va", "Sc", "Ri", "Pt"],
  [" ", " ", "20", "18", " "]
];
var elemNameColor = ["#e1e1e1", "#41c7c7", "#fe6a6a"];
var elemNum = [[0, 1, 2, 0, 3], [4, 5, 6, 7, 8], [0, 0, 9, 10, 0]];
// hide factor
var elemBoole = [[1, 1, 1, 0, 1], [1, 1, 1, 1, 1], [0, 0, 1, 1, 0]];
// starting point
var v0 = [];
// current coordinates
var v = [];
// speed vector
var dv = [];

for (var i = 0; i < 5; i++) {
  // TODO: beautify multidim array declaration
  v0[i] = [];
  v[i] = [];
  dv[i] = [];
  for (var j = 0; j < 3; j++) {
    v0[i][j] = [leftX + size * i, 100 * (1 + j)];
    v[i][j] = [v0[i][j][0], v0[i][j][1]];
    dv[i][j] = [Math.random() * 2 + -1, Math.random() * 2 + -1];
  }
}

var startBtn = document.getElementById("start-button");
var magnet = false;
startBtn.addEventListener("mouseover", magnetOn);
startBtn.addEventListener("mouseout", magnetOff);

function magnetOn() {
  magnet = true;
  return magnet;
}

function magnetOff() {
  magnet = false;
  return magnet;
}

function drawElem(i) {
  for (var j = 0; j < 3; j++) {
    if (elemBoole[j][i]) {
      ctx.beginPath();
      // box
      ctx.rect(v[i][j][0], v[i][j][1], size, size);
      ctx.fillStyle = "#212424";
      ctx.fillRect(v[i][j][0], v[i][j][1], size, size);
      ctx.strokeStyle = "#646a6a";
      ctx.strokeWidth = 1;
      ctx.stroke();
      // elem
      ctx.font = "600 2.4rem IBM Plex Mono";
      ctx.textAlign = "center";
      ctx.fillStyle = elemNameColor[j];
      ctx.fillText(
        elemName[j][i],
        v[i][j][0] + size / 2,
        v[i][j][1] + size * 0.6
      );
      // number
      ctx.font = "300 13px IBM Plex Mono";
      ctx.fillStyle = "#e1e1e1";
      ctx.fillText(
        elemNum[j][i],
        v[i][j][0] + size * 0.14,
        v[i][j][1] + size * 0.19
      );
      ctx.closePath();
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 3; j++) {
      drawElem(i);

      if (!magnet) {
        if (
          v[i][j][0] + dv[i][j][0] * speed > ww - size ||
          v[i][j][0] + dv[i][j][0] * speed < 0
        ) {
          speed = 3;
          dv[i][j][0] = -dv[i][j][0];
        }
        if (
          v[i][j][1] + dv[i][j][1] * speed > wh - size ||
          v[i][j][1] + dv[i][j][1] * speed < 0
        ) {
          speed = 3;
          dv[i][j][1] = -dv[i][j][1];
        }

        v[i][j][0] += dv[i][j][0] * speed;
        v[i][j][1] += dv[i][j][1] * speed;
      } else {
        if (
          Math.abs(v0[i][j][0] - v[i][j][0]) > 3 ||
          Math.abs(v0[i][j][1] - v[i][j][1]) > 3
        ) {
          v[i][j][0] += (v0[i][j][0] - v[i][j][0]) / 8;
          v[i][j][1] += (v0[i][j][1] - v[i][j][1]) / 8;
        } else {
          v[i][j][0] = v0[i][j][0];
          v[i][j][1] = v0[i][j][1];
        }
      }
    }
  }
}

setInterval(draw, 10);
