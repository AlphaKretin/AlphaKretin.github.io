var upperBound = 1000;
var perfNums = [];
var tempFactors = [];
var tempTotal = 0;

function calcPerfs() {
    for (var i = 0; i < upperBound; i++) {
        tempFactors = [];
        tempTotal = 0;
        for (var j = 1; i < i / 2; j++) {
            if (i % j === 0) {
                tempFactors.push(j);
            }
        }
        for (var fact of tempFactors) {
            tempTotal += fact;
        }
        if (tempTotal === i) {
            perfNums.push(i);
        }
    }
    console.dir(perfNums);
}