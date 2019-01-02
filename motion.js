var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var ww = window.innerWidth;
var wh = window.innerHeight;
canvas.height = wh;
canvas.width = ww;

var size = 100;
var leftX = ww / 2 - 2.5 * size;

var v0 = [];
var v = [];
var dv = [];
for (var i = 0; i < 5; i++) {
  v0[i] = [[leftX + size * i, 100], [leftX + size * i, 200]];
  v[i] = [[v0[i][0][0], v0[i][0][1]], [v0[i][1][0], v0[i][1][1]]];
  dv[i] = [
    [Math.random() * 2 + -1, Math.random() * 2 + -1],
    [Math.random() * 2 + -1, Math.random() * 2 + -1]
  ];
}

var speed = 8;
var elemName = [["St", "At", "E", " ", "Of"], ["Ja", "Va", "Sc", "Ri", "Pt"]];
var elemNameColor = ["#e1e1e1", "#41c7c7"];
var elemNum = [[0, 1, 2, 0, 3], [4, 5, 6, 7, 8]];
var elemBoole = [[1, 1, 1, 0, 1], [1, 1, 1, 1, 1]];

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
  // box
  if (elemBoole[1][i]) {
    ctx.beginPath();
    ctx.rect(v[i][1][0], v[i][1][1], size, size);
    ctx.fillStyle = "#212424";
    ctx.fillRect(v[i][1][0], v[i][1][1], size, size);
    ctx.strokeStyle = "#646a6a";
    ctx.strokeWidth = 1;
    ctx.stroke();
    // elem
    ctx.font = "600 2.4rem IBM Plex Mono";
    ctx.textAlign = "center";
    ctx.fillStyle = elemNameColor[1];
    ctx.fillText(elemName[1][i], v[i][1][0] + size / 2, v[i][1][1] + size * 0.6);
    // number
    ctx.font = "300 13px IBM Plex Mono";
    ctx.fillStyle = "#e1e1e1";
    ctx.fillText(
      elemNum[1][i],
      v[i][1][0] + size * 0.14,
      v[i][1][1] + size * 0.19
    );
    ctx.closePath();
  }
  if (elemBoole[0][i]) {
    ctx.beginPath();
    ctx.rect(v[i][0][0], v[i][0][1], size, size);
    ctx.fillStyle = "#212424";
    ctx.fillRect(v[i][0][0], v[i][0][1], size, size);
    ctx.strokeStyle = "#646a6a";
    ctx.strokeWidth = 1;
    ctx.stroke();
    // elem
    ctx.font = "600 2.4rem IBM Plex Mono";
    ctx.textAlign = "center";
    ctx.fillStyle = elemNameColor[0];
    ctx.fillText(elemName[0][i], v[i][0][0] + size / 2, v[i][0][1] + size * 0.6);
    // number
    ctx.font = "300 13px IBM Plex Mono";
    ctx.fillStyle = "#e1e1e1";
    ctx.fillText(
      elemNum[0][i],
      v[i][0][0] + size * 0.14,
      v[i][0][1] + size * 0.19
    );
    ctx.closePath();
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (var i = 0; i < 5; i++) {
    drawElem(i);
    if (!magnet) {
      if (
        v[i][1][0] + dv[i][1][0] * speed > ww - size ||
        v[i][1][0] + dv[i][1][0] * speed < 0
      ) {
        speed = 3;
        dv[i][1][0] = -dv[i][1][0];
      }
      if (
        v[i][1][1] + dv[i][1][1] * speed > wh - size ||
        v[i][1][1] + dv[i][1][1] * speed < 0
      ) {
        speed = 3;
        dv[i][1][1] = -dv[i][1][1];
      }
      if (
        v[i][0][0] + dv[i][0][0] * speed > ww - size ||
        v[i][0][0] + dv[i][0][0] * speed < 0
      ) {
        speed = 3;
        dv[i][0][0] = -dv[i][0][0];
      }
      if (
        v[i][0][1] + dv[i][0][1] * speed > wh - size ||
        v[i][0][1] + dv[i][0][1] * speed < 0
      ) {
        speed = 3;
        dv[i][0][1] = -dv[i][0][1];
      }
      v[i][1][0] += dv[i][1][0] * speed;
      v[i][1][1] += dv[i][1][1] * speed;
      v[i][0][0] += dv[i][0][0] * speed;
      v[i][0][1] += dv[i][0][1] * speed;
    } else {
      speed = 6;

      if (
        Math.abs(v0[i][1][0] - v[i][1][0]) > 4 ||
        Math.abs(v0[i][1][1] - v[i][1][1]) > 4
      ) {
        v[i][1][0] =
          v[i][1][0] +
          (speed * (v0[i][1][0] - v[i][1][0])) /
            (Math.abs(v0[i][1][0] - v[i][1][0]) +
              Math.abs(v0[i][1][1] - v[i][1][1]));
        v[i][1][1] =
          v[i][1][1] +
          (speed * (v0[i][1][1] - v[i][1][1])) /
            (Math.abs(v0[i][1][0] - v[i][1][0]) +
              Math.abs(v0[i][1][1] - v[i][1][1]));
      } else {
        v[i][1][0] = v0[i][1][0];
        v[i][1][1] = v0[i][1][1];
      }

      if (
        Math.abs(v0[i][0][0] - v[i][0][0]) > 4 ||
        Math.abs(v0[i][0][1] - v[i][0][1]) > 4
      ) {
        v[i][0][0] =
          v[i][0][0] +
          (speed * (v0[i][0][0] - v[i][0][0])) /
            (Math.abs(v0[i][0][0] - v[i][0][0]) +
              Math.abs(v0[i][0][1] - v[i][0][1]));
        v[i][0][1] =
          v[i][0][1] +
          (speed * (v0[i][0][1] - v[i][0][1])) /
            (Math.abs(v0[i][0][0] - v[i][0][0]) +
              Math.abs(v0[i][0][1] - v[i][0][1]));
      } else {
        v[i][0][0] = v0[i][0][0];
        v[i][0][1] = v0[i][0][1];
      }
    }
  }
}

setInterval(draw, 10);
