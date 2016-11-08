var words = ["aaa", "aah", "aahed", "aahing", "aahs", "aal", "aalii", "aaliis", "aals", "aam", "aardvark", "aardvarks", "aardwolf", "aardwolves", "aargh", "aaron", "aaronic", "aarrgh", "aarrghh", "aas", "aasvogel", "aasvogels", "aba", "abac", "abaca", "abacas", "abacate", "abacaxi", "abacay", "abaci", "abacinate", "abacination", "abacisci", "abaciscus", "abacist", "aback", "abacli", "abacot", "abacterial", "abactinal", "abactinally", "abaction", "abactor", "abaculi", "abaculus", "abacus", "abacuses", "abada", "abaddon", "abadejo", "abadengo", "abadia", "abaff", "abaft", "abaisance", "abaised", "abaiser", "abaisse", "abaissed", "abaka", "abakas", "abalation", "abalienate", "abalienated", "abalienating", "abalienation", "abalone", "abalones", "abamp", "abampere", "abamperes", "abamps", "aband", "abandon", "abandonable", "abandoned", "abandonedly", "abandonee", "abandoner", "abandoners", "abandoning", "abandonment", "abandonments", "abandons", "abandum", "abanet", "abanga", "abannition", "abapical", "testinglengthlimits", "faaaaart", "butts"];
var wordStem;
var wordsFound = ["blep"];
var numFound = 0;

function randomLetter() {
    console.log("random letter called");
    var randNum = Math.floor((Math.random() * 26) + 1); //random no between 1 and 26
    switch (randNum) {
        case 1:
            return "A";
        case 2:
            return "B";
        case 3:
            return "C";
        case 4:
            return "D";
        case 5:
            return "E";
        case 6:
            return "F";
        case 7:
            return "G";
        case 8:
            return "H";
        case 9:
            return "I";
        case 10:
            return "J";
        case 11:
            return "K";
        case 12:
            return "L";
        case 13:
            return "M";
        case 14:
            return "N";
        case 15:
            return "O";
        case 16:
            return "P";
        case 17:
            return "Q";
        case 18:
            return "R";
        case 19:
            return "S";
        case 20:
            return "T";
        case 21:
            return "U";
        case 22:
            return "V";
        case 23:
            return "W";
        case 24:
            return "X";
        case 25:
            return "Y";
        case 26:
            return "Z";
    }
}

function generateStem() { //called onclick of a dedicated button
    console.log("generate stem called");
    var stemGeneratedYet = false;
    do {
        wordStem = randomLetter().toLowerCase() + randomLetter().toLowerCase();
        if (validateString(wordStem) === true) { //calls function below
            stemGeneratedYet = true;
        }
    } while (stemGeneratedYet === false);
    document.getElementById("wordStem").innerHTML = wordStem;
}

function validateString(stem) {
    console.log("validate string called");
    var isValid = false;
    for (var i = 0; i < words.length; i++) { //checks each word...
        if (words[i].indexOf(stem) === 0) { //...to see if wordStem is at the start of it
            isValid = true; //it's never set back to false so if it ever happens, it stays true
        }
    }
    console.log("survived the for loop"); //gotta make sure, since the words array can potentially be huge af
    return isValid;
}

function submit() { //called onclick of a button
    console.log("submit called");
    var userWord = document.getElementById("gameText").value;
    var isAWord = false;
    var isWordNew = true;
    for (var i = 0; i < words.length; i++) {
        if (words[i] === userWord) {
            isAWord = true; //if word is in array, good start...
        }
    }
    if (userWord.indexOf(wordStem) !== 0) { //...but it's got to start with the right letters too
        isAWord = false;
    }
    if (isAWord === true) {
        document.getElementById("results").innerHTML = "You found a word!";
        for (var i = 0; i < wordsFound.length; i++) {
            if (userWord === wordsFound[i]) {
                isWordNew = false;		
            }
        }
        if (isWordNew) {
            numFound++;
            document.getElementById("found").innerHTML = numFound;
	    wordsFound.push(userWord);
        }
    } else {
        document.getElementById("results").innerHTML = "Sorry, that's not in my word list.";
    }
}

document.getElementById("gameText").addEventListener("keyup", function(event) { //makes pressing enter in the textbox click submit
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("checkButton").click();
    }
});
