console.log("revision 8");
var legalChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "~", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", ",", "!", "(", ")", "-", "/", "\\", "?", ";", ":", "#", "&", "\"", "'", "+", "%", "\n"];
var ctx = document.getElementById("renderCanvas").getContext("2d");
var input = document.getElementById("inputArea");
var charWidths = {
    a: 6,
    b: 5,
    c: 5,
    d: 5,
    e: 5,
    f: 5,
    g: 7,
    h: 5,
    i: 2,
    j: 3,
    k: 5,
    l: 2,
    m: 6,
    n: 5,
    o: 5,
    p: 5,
    q: 5,
    r: 4,
    s: 5,
    t: 4,
    u: 5,
    v: 6,
    w: 6,
    x: 6,
    y: 5,
    z: 5,
    cA: 6,
    cB: 6,
    cC: 6,
    cD: 6,
    cE: 6,
    cF: 6,
    cG: 6,
    cH: 6,
    cI: 4,
    cJ: 6,
    cK: 6,
    cL: 6,
    cM: 8,
    cN: 6,
    cO: 6,
    cP: 6,
    cQ: 7,
    cR: 6,
    cS: 7,
    cT: 6,
    cU: 6,
    cV: 6,
    cW: 8,
    cX: 8,
    cY: 6,
    cZ: 6,
    space: 4,
    tilde: 7,
    0: 5,
    1: 4,
    2: 5,
    3: 5,
    4: 7,
    5: 5,
    6: 5,
    7: 5,
    8: 5,
    9: 5,
    dot: 2,
    comma: 2,
    bang: 2,
    openBrack: 4,
    closeBrack: 4,
    dash: 4,
    slash: 7,
    backSlash: 7,
    question: 7,
    semicolon: 2,
    colon: 2,
    hash: 6,
    amp: 7,
    quote: 4,
    apos: 2,
    plus: 8,
    percent: 8
};
console.log("loaded charWidths");
var images = {
    a: new Image(charWidths["a"], 15),
    b: new Image(charWidths["b"], 15),
    c: new Image(charWidths["c"], 15),
    d: new Image(charWidths["d"], 15),
    e: new Image(charWidths["e"], 15),
    f: new Image(charWidths["f"], 15),
    g: new Image(charWidths["g"], 15),
    h: new Image(charWidths["h"], 15),
    i: new Image(charWidths["i"], 15),
    j: new Image(charWidths["j"], 15),
    k: new Image(charWidths["k"], 15),
    l: new Image(charWidths["l"], 15),
    m: new Image(charWidths["m"], 15),
    n: new Image(charWidths["n"], 15),
    o: new Image(charWidths["o"], 15),
    p: new Image(charWidths["p"], 15),
    q: new Image(charWidths["q"], 15),
    r: new Image(charWidths["r"], 15),
    s: new Image(charWidths["s"], 15),
    t: new Image(charWidths["t"], 15),
    u: new Image(charWidths["u"], 15),
    v: new Image(charWidths["v"], 15),
    w: new Image(charWidths["w"], 15),
    x: new Image(charWidths["x"], 15),
    y: new Image(charWidths["y"], 15),
    z: new Image(charWidths["z"], 15),
    cA: new Image(charWidths["cA"], 15),
    cB: new Image(charWidths["cB"], 15),
    cC: new Image(charWidths["cC"], 15),
    cD: new Image(charWidths["cD"], 15),
    cE: new Image(charWidths["cE"], 15),
    cF: new Image(charWidths["cF"], 15),
    cG: new Image(charWidths["cG"], 15),
    cH: new Image(charWidths["cH"], 15),
    cI: new Image(charWidths["cI"], 15),
    cJ: new Image(charWidths["cJ"], 15),
    cK: new Image(charWidths["cK"], 15),
    cL: new Image(charWidths["cL"], 15),
    cM: new Image(charWidths["cM"], 15),
    cN: new Image(charWidths["cN"], 15),
    cO: new Image(charWidths["cO"], 15),
    cP: new Image(charWidths["cP"], 15),
    cQ: new Image(charWidths["cQ"], 15),
    cR: new Image(charWidths["cR"], 15),
    cS: new Image(charWidths["cS"], 15),
    cT: new Image(charWidths["cT"], 15),
    cU: new Image(charWidths["cU"], 15),
    cV: new Image(charWidths["cV"], 15),
    cW: new Image(charWidths["cW"], 15),
    cX: new Image(charWidths["cX"], 15),
    cY: new Image(charWidths["cY"], 15),
    cZ: new Image(charWidths["cZ"], 15),
    space: new Image(charWidths["space"], 15),
    tilde: new Image(charWidths["tilde"], 15),
    0: new Image(charWidths["0"], 15),
    1: new Image(charWidths["1"], 15),
    2: new Image(charWidths["2"], 15),
    3: new Image(charWidths["3"], 15),
    4: new Image(charWidths["4"], 15),
    5: new Image(charWidths["5"], 15),
    6: new Image(charWidths["6"], 15),
    7: new Image(charWidths["7"], 15),
    8: new Image(charWidths["8"], 15),
    9: new Image(charWidths["9"], 15),
    dot: new Image(charWidths["dot"], 15),
    comma: new Image(charWidths["comma"], 15),
    bang: new Image(charWidths["bang"], 15),
    openBrack: new Image(charWidths["openBrack"], 15),
    closeBrack: new Image(charWidths["closeBrack"], 15),
    dash: new Image(charWidths["dash"], 15),
    slash: new Image(charWidths["slash"], 15),
    backSlash: new Image(charWidths["backSlash"], 15),
    question: new Image(charWidths["question"], 15),
    semicolon: new Image(charWidths["semicolon"], 15),
    colon: new Image(charWidths["colon"], 15),
    hash: new Image(charWidths["hash"], 15),
    amp: new Image(charWidths["amp"], 15),
    quote: new Image(charWidths["quote"], 15),
    apos: new Image(charWidths["apos"], 15),
    plus: new Image(charWidths["plus"], 15),
    percent: new Image(charWidths["percent"], 15)
};
console.log("loaded images");

images.onload = function() {
	for (var i = 0; i < images.length; i++){
		images[i].src = "../images/fetext/" + charToName(legalChars[i]) + ".png";
		console.log("finished loading");
	}
}



console.log("set images onload");

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
            ctx.drawImage(images[charName], location.x, location.y);
            var width = charWidths[charName];
            location.x += width;
        }
    }
}
