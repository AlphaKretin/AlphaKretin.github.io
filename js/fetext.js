console.log("revision 11");
var legalChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "~", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", ",", "!", "(", ")", "-", "/", "\\", "?", ";", ":", "#", "&", "\"", "'", "+", "%", "\n"];
var ctx = document.getElementById("renderCanvas").getContext("2d");
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
        wid: 5,
        index: 185
    },
    cL: {
        wid: 6,
        index: 190
    },
    cM: {
        wid: 8,
        index: 196
    },
    cN: {
        wid: 6,
        index: 204
    },
    cO: {
        wid: 6,
        index: 210
    },
    cP: {
        wid: 6,
        index: 216
    },
    cQ: {
        wid: 7,
        index: 222
    },
    cR: {
        wid: 6,
        index: 229
    },
    cS: {
        wid: 7,
        index: 235
    },
    cT: {
        wid: 6,
        index: 242
    },
    cU: {
        wid: 6,
        index: 248
    },
    cV: {
        wid: 6,
        index: 254
    },
    cW: {
        wid: 8,
        index: 260
    },
    cX: {
        wid: 8,
        index: 268
    },
    cY: {
        wid: 6,
        index: 276
    },
    cZ: {
        wid: 6,
        index: 282
    },
    space: {
        wid: 4,
        index: 288
    },
    tilde: {
        wid: 7,
        index: 292
    },
    zero: {
        wid: 5,
        index: 299
    },
    one: {
        wid: 4,
        index: 304
    },
    two: {
        wid: 5,
        index: 308
    },
    three: {
        wid: 5,
        index: 313
    },
    four: {
        wid: 7,
        index: 318
    },
    five: {
        wid: 5,
        index: 325
    },
    six: {
        wid: 5,
        index: 330
    },
    seven: {
        wid: 5,
        index: 335
    },
    eight: {
        wid: 5,
        index: 340
    },
    nine: {
        wid: 5,
        index: 345
    },
    dot: {
        wid: 2,
        index: 350
    },
    comma: {
        wid: 2,
        index: 352
    },
    bang: {
        wid: 2,
        index: 354
    },
    openBrack: {
        wid: 4,
        index: 356
    },
    closeBrack: {
        wid: 4,
        index: 360
    },
    dash: {
        wid: 4,
        index: 364
    },
    slash: {
        wid: 7,
        index: 368
    },
    backSlash: {
        wid: 7,
        index: 375
    },
    question: {
        wid: 7,
        index: 382
    },
    semicolon: {
        wid: 2,
        index: 389
    },
    colon: {
        wid: 2,
        index: 391
    },
    hash: {
        wid: 6,
        index: 393
    },
    amp: {
        wid: 7,
        index: 399
    },
    quote: {
        wid: 4,
        index: 406
    },
    apos: {
        wid: 2,
        index: 410
    },
    plus: {
        wid: 8,
        index: 412
    },
    percent: {
        wid: 8,
        index: 420
    }
}

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
    //clear and render text box
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