var calcedYet = false;
var finalRate = 0;
var shakeRate = 0;
var critRate = 0;
var out = "";
var isCrit = false;
var shakeOne = false;
var shakeTwo = false;
var shakeThree = false;
var isCaught = true;
var balls = 0;
var catches = 0;

console.log("numBalls");

window.onload = function() {
    var a = document.getElementById("mylink");
    a.onclick = function() {
        alert("Sleep: 2.5\nFreeze: 2.5\nParalyze: 1.5\nPoison: 1.5\nBurn: 1.5");
        return false;
    };
};

function calcRates() {
    var maxHP = 0;
    var currentHP = 0;
    var monRate = 0;
    var ballBonus = 0;
    var statusBonus = 0;
    var dexMult = 0;

    maxHP = parseFloat(document.getElementById("maxHP").value);
    currentHP = parseFloat(document.getElementById("currentHP").value);
    monRate = parseFloat(document.getElementById("monRate").value);
    ballBonus = parseFloat(document.getElementById("ballBonus").value);
    statusBonus = parseFloat(document.getElementById("statusBonus").value);
    dexMult = parseFloat(document.getElementById("dexMult").value);

    finalRate = (((3 * maxHP - 2 * currentHP) * monRate * ballBonus) / (3 * maxHP)) * statusBonus;
    shakeRate = 65536 / Math.pow((255 / finalRate), 0.1875);
    critRate = Math.round((finalRate * dexMult) / 6);

    document.getElementById("finalRate").innerHTML = round4096(finalRate);
    document.getElementById("shakeRate").innerHTML = round4096(shakeRate);
    document.getElementById("critRate").innerHTML = round4096(critRate);
    if (!(isNaN(maxHP) && isNaN(currentHP) && isNaN(monRate) && isNaN(ballBonus) && isNaN(statusBonus) && isNaN(dexMult))) {
        calcedYet = true;
    } else {
        alert("All entries must be numbers!");
    }
}

function round4096(num) {
    return Math.ceil(num * 4096) / 4096;
}

function throwBall() {
    if (calcedYet) {
        balls++;
        if (getRandomIntInclusive(0, 255) < critRate) {
            isCrit = true;
            criticalCapture();
        } else {
            normalCapture();
        }
        if (isCrit) {
            out += "Critical capture! ";
            if (isCaught) {
                out += "Caught!";
                catches++;
            } else {
                out += "Broke free!";
            }
        } else {
            out += "No critical capture. ";
            if (shakeOne) {
                out += "Ball shook once! ";
                if (shakeTwo) {
                    out += "Ball shook twice! ";
                    if (shakeThree) {
                        out += "Ball shook thrice! ";
                        if (isCaught) {
                            out += "Caught!";
                            catches++;
                        } else {
                            out += "Broke free!";
                        }
                    } else {
                        out += "Broke free!";
                    }
                } else {
                    out += "Broke free!";
                }
            } else {
                out += "Broke free!";
            }
        }
        document.getElementById("out").innerHTML = out;
        document.getElementById("balls").innerHTML = balls;
        document.getElementById("catches").innerHTML = catches;
        isCrit = false;
        shakeOne = false;
        shakeTwo = false;
        shakeThree = false;
        isCaught = true;
        out = "";
    } else {
        alert("You must calculate a catch rate before you simulate a capture attempt!");
    }
}

function criticalCapture() {
    if (getRandomIntInclusive(0, 65535) < shakeRate) {
        isCaught = true;
    }
}

function normalCapture() {
    if (getRandomIntInclusive(0, 65535) < shakeRate) {
        shakeOne = true;
        if (getRandomIntInclusive(0, 65535) < shakeRate) {
            shakeTwo = true;
            if (getRandomIntInclusive(0, 65535) < shakeRate) {
                shakeThree = true;
                if (getRandomIntInclusive(0, 65535) < shakeRate) {
                    isCaught = true;
                }
            }
        }
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function lotsOfBalls() {
    var numBalls = parseInt(document.getElementById("numBalls").value);
    if (!isNaN(numBalls)) {
        var i = 0;
        while (i < numBalls) {
            throwBall();
            i++;
        }
    }
}
