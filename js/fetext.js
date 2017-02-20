console.log("revision 15");
var legalChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "~", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", ",", "!", "(", ")", "-", "/", "\\", "?", ";", ":", "#", "&", "\"", "'", "+", "%", "\n"];
var canvas = document.getElementById("renderCanvas");
var ctx = canvas.getContext("2d");
var input = document.getElementById("inputArea");
var charWidths = {
    a: {
        wid: 6,
        index: 0
    },
    b: {
        wid: 5,
        index: 6
    },
    c: {
        wid: 5,
        index: 11
    },
    d: {
        wid: 5,
        index: 16
    },
    e: {
        wid: 5,
        index: 21
    },
    f: {
        wid: 5,
        index: 26
    },
    g: {
        wid: 7,
        index: 31
    },
    h: {
        wid: 5,
        index: 38
    },
    i: {
        wid: 2,
        index: 43
    },
    j: {
        wid: 3,
        index: 45
    },
    k: {
        wid: 5,
        index: 48
    },
    l: {
        wid: 2,
        index: 53
    },
    m: {
        wid: 6,
        index: 55
    },
    n: {
        wid: 5,
        index: 61
    },
    o: {
        wid: 5,
        index: 66
    },
    p: {
        wid: 5,
        index: 71
    },
    q: {
        wid: 5,
        index: 76
    },
    r: {
        wid: 4,
        index: 81
    },
    s: {
        wid: 5,
        index: 85
    },
    t: {
        wid: 4,
        index: 90
    },
    u: {
        wid: 5,
        index: 94
    },
    v: {
        wid: 6,
        index: 99
    },
    w: {
        wid: 6,
        index: 105
    },
    x: {
        wid: 6,
        index: 111
    },
    y: {
        wid: 5,
        index: 117
    },
    z: {
        wid: 5,
        index: 122
    },
    cA: {
        wid: 6,
        index: 127
    },
    cB: {
        wid: 6,
        index: 133
    },
    cC: {
        wid: 6,
        index: 139
    },
    cD: {
        wid: 6,
        index: 145
    },
    cE: {
        wid: 6,
        index: 151
    },
    cF: {
        wid: 6,
        index: 157
    },
    cG: {
        wid: 6,
        index: 163
    },
    cH: {
        wid: 6,
        index: 169
    },
    cI: {
        wid: 4,
        index: 175
    },
    cJ: {
        wid: 6,
        index: 179
    },
    cK: {
        wid: 6,
        index: 185
    },
    cL: {
        wid: 6,
        index: 191
    },
    cM: {
        wid: 8,
        index: 197
    },
    cN: {
        wid: 6,
        index: 205
    },
    cO: {
        wid: 6,
        index: 211
    },
    cP: {
        wid: 6,
        index: 217
    },
    cQ: {
        wid: 7,
        index: 223
    },
    cR: {
        wid: 6,
        index: 230
    },
    cS: {
        wid: 7,
        index: 236
    },
    cT: {
        wid: 6,
        index: 243
    },
    cU: {
        wid: 6,
        index: 249
    },
    cV: {
        wid: 6,
        index: 255
    },
    cW: {
        wid: 8,
        index: 261
    },
    cX: {
        wid: 8,
        index: 269
    },
    cY: {
        wid: 6,
        index: 277
    },
    cZ: {
        wid: 6,
        index: 283
    },
    space: {
        wid: 4,
        index: 289
    },
    tilde: {
        wid: 7,
        index: 293
    },
    zero: {
        wid: 6,
        index: 300
    },
    one: {
        wid: 4,
        index: 306
    },
    two: {
        wid: 6,
        index: 310
    },
    three: {
        wid: 6,
        index: 316
    },
    four: {
        wid: 7,
        index: 322
    },
    five: {
        wid: 6,
        index: 329
    },
    six: {
        wid: 6,
        index: 335
    },
    seven: {
        wid: 6,
        index: 341
    },
    eight: {
        wid: 6,
        index: 347
    },
    nine: {
        wid: 6,
        index: 353
    },
    dot: {
        wid: 2,
        index: 359
    },
    comma: {
        wid: 2,
        index: 361
    },
    bang: {
        wid: 3,
        index: 363
    },
    openBrack: {
        wid: 4,
        index: 366
    },
    closeBrack: {
        wid: 4,
        index: 370
    },
    dash: {
        wid: 4,
        index: 374
    },
    slash: {
        wid: 7,
        index: 378
    },
    backSlash: {
        wid: 7,
        index: 385
    },
    question: {
        wid: 7,
        index: 392
    },
    semicolon: {
        wid: 2,
        index: 399
    },
    colon: {
        wid: 2,
        index: 401
    },
    hash: {
        wid: 6,
        index: 403
    },
    amp: {
        wid: 7,
        index: 409
    },
    quote: {
        wid: 4,
        index: 416
    },
    apos: {
        wid: 2,
        index: 420
    },
    plus: {
        wid: 8,
        index: 422
    },
    percent: {
        wid: 8,
        index: 430
    }
};
var atlas = new Image();
atlas.src = "../images/fetext/atlas.png";

console.log("loaded atlas");

function charToName(letter) {
    switch (letter) {
    case "A":
        return "cA";
    case "B":
        return "cB";
    case "C":
        return "cC";
    case "D":
        return "cD";
    case "E":
        return "cE";
    case "F":
        return "cF";
    case "G":
        return "cG";
    case "H":
        return "cH";
    case "I":
        return "cI";
    case "J":
        return "cJ";
    case "K":
        return "cK";
    case "L":
        return "cL";
    case "M":
        return "cM";
    case "N":
        return "cN";
    case "O":
        return "cO";
    case "P":
        return "cP";
    case "Q":
        return "cQ";
    case "R":
        return "cR";
    case "S":
        return "cS";
    case "T":
        return "cT";
    case "U":
        return "cU";
    case "V":
        return "cV";
    case "W":
        return "cW";
    case "X":
        return "cX";
    case "Y":
        return "cY";
    case "Z":
        return "cZ";
    case " ":
        return "space";
    case "~":
        return "tilde";
    case "0":
        return "zero";
    case "1":
        return "one";
    case "2":
        return "two";
    case "3":
        return "three";
    case "4":
        return "four";
    case "5":
        return "five";
    case "6":
        return "six";
    case "7":
        return "seven";
    case "8":
        return "eight";
    case "9":
        return "nine";
    case ".":
        return "dot";
    case ",":
        return "comma";
    case "!":
        return "bang";
    case "(":
        return "openBrack";
    case ")":
        return "closeBrack";
    case "-":
        return "dash";
    case "/":
        return "slash";
    case "\\":
        return "backSlash";
    case "?":
        return "question";
    case ";":
        return "semicolon";
    case ":":
        return "colon";
    case "#":
        return "hash";
    case "&":
        return "amp";
    case "\"":
        return "quote";
    case "'":
        return "apos";
    case "+":
        return "plus";
    case "%":
        return "percent";
    default:
        return letter;
    }
}

function render() {
    console.log("render()");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var location = {
        x: 0,
        y: 0
    };
    var inText = input.value.split("");
    for (var i = 0; i < inText.length; i++) {
        if (legalChars.indexOf(inText[i]) < 0) {
            inText[i] = " ";
        }
        if (inText[i] === "\n") {
            location.x = 0;
            location.y += 16;
        } else {
            var charName = charToName(inText[i]);
            var cha = charWidths[charName];
            ctx.drawImage(atlas, cha.index, 0, cha.wid, 15, location.x, location.y, cha.wid, 15);
            location.x += cha.wid;
        }
    }
}