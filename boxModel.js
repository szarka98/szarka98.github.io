var minCord = [0, 0];
var maxCord = [500, 1000];
var dCord = [30, 30];
var cord = [100, 50];

// --- test jQuery animation with a callback ---

$("#n1").animate({
    left: cord[0] + 'px',
    top: cord[1] + 'px'
} , 2000, function() {
    nextCoord();
    alert(cord[0]);
});

// ----------------------------------------------

function nextCoord() {
    cord[0] + dCord[0] < maxCord[0] ? cord[0] += dCord[0] : cord[0] = maxCord[0] - ((cord[0] + dCord[0]) - maxCord[0]);
    cord[1] + dCord[1] < maxCord[1] ? cord[1] += dCord[1] : cord[1] = maxCord[1] - ((cord[1] + dCord[1]) - maxCord[1]);
    return cord;
}


// ha a tömböt másolom, akkor a referencia szerinti átadás miatt nem működik,
// ezért muszáj egyenként átadni a koordinátákat
// js animate
/* 
var oldCord = [0, 0];
oldCord[0] = cord[0];
oldCord[1] = cord[1];
nextCoord();

document.getElementById("n1").animate(
    [
        {left: oldCord[0] + 'px', top: oldCord[1] + 'px'},
        {left: cord[0] + 'px', top: cord[1] + 'px'}
    ],
    {
        duration: 10*1000,
        iterations: 1
    }
);
*/