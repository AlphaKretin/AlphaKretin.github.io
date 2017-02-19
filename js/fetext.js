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
	A: 6,
	B: 6,
	C: 6,
	D: 6,
	E: 6,
	F: 6,
	G: 6,
	H: 6,
	I: 4,
	J: 6,
	K: 6,
	L: 6,
	M: 8,
	N: 6,
	O: 6,
	P: 6,
	Q: 7,
	R: 6,
	S: 7,
	T: 6,
	U: 6,
	V: 6,
	W: 8,
	X: 8,
	Y: 6,
	Z: 6,
	space: 4,
	tilde: 5,
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

function charToName(letter) {
	switch (letter) {
		case " ": return "space";
		case "~": return "tilde";
		case ".": return "dot";
		case ",": return "comma";
		case "!": return "bang";
		case "(": return "openBrack";
		case ")": return "closeBrack";
		case "-": return "dash";
		case "/": return "slash";
		case "\\": return "backSlash";
		case "?": return "question";
		case ";": return "semicolon";
		case ":": return "colon";
		case "#": return "hash";
		case "&": return "amp";
		case "\"": return "quote";
		case "'": return "apos";
		case "+": return "plus";
		case "%": return "percent";
		default: return letter;
	}
}


input.addEventListener("oninput", function() { render(); });

function render() {
	//clear and render text box
	var location = { x: 0, y: 0 };
	var inText = input.value.split("");
	for (var i = 0; i < inText.length; i++){
		if (legalChars.indexOf(inText[i]) < 0){
			inText[i] = " ";
		}
		if (inText[i] === "\n") {
			location.x = 0;
			location.y += 16;
		} else {
			var charName = charToName(inText[i]);
			ctx.drawImage("../images/fetext/" + charName + ".png", location.x, location.y);
			var width = charWidths[charName];
			location.x += width;
		}
	}
}