var minCord = [0, 0];
var maxCord = [500, 1000];
var dCord = [200, 200];
var cord = [0, 0];
var oldCord = [0, 0];
var move1 = [];
var move1Timing = [];

function nextCoord() {
    cord[0] + dCord[0] < maxCord[0] ? cord[0] += dCord[0] : cord[0] = maxCord[0] - ((cord[0] + dCord[0]) - maxCord[0]);
    cord[1] + dCord[1] < maxCord[1] ? cord[1] += dCord[1] : cord[1] = maxCord[1] - ((cord[1] + dCord[1]) - maxCord[1]);
    return cord;
}

// ha a tömböt másolom, akkor a referencia szerinti átadás miatt nem működik,
// ezért muszáj egyenként átadni a koordinátákat
    oldCord[0] = cord[0];
    oldCord[1] = cord[1];
    nextCoord();

    move1 = [{
            left: oldCord[0] + 'px',
            top: oldCord[1] + 'px'
        },
        {
            left: cord[0] + 'px',
            top: cord[1] + 'px'
        },
    ];

    move1Timing = {
        duration: 10*1000,
        iterations: 1
    }

    document.getElementById("n1").animate(
        move1,
        move1Timing
    )
    
