function move(direction, startPoint) { //direction: 0=up, 1= right, 2=down, 3=left //startPoint = {row: "A" column: 1}
	var isMoving = false;
	var currentCell = {row: "B", column: 2};
	var previousCell = {row: "B", column: 2};
	var destination = {row: "B", column: 3}; 
	var tempImage = "butts";
	var timesLooped = 0;
	console.log("butts");
	isMoving = true;
	currentCell = startPoint;
	var i = 0;
	function colourLoop(){
		setTimeout(function(){
			colourAssign();
			i++;
			console.log("looped " + i);
			if (isMoving === true) {
			colourLoop();
			}
		}, 150);
	}
	colourLoop();
	function colourAssign(){
		timesLooped++;
		if (timesLooped > 100) {
			alert("loop probably infinite, wuh woh");
			isMoving = false;
		}
		switch (direction) {
			case 0: destination.row = decrementLetter(currentCell.row);  destination.column = currentCell.column; break;
			case 1: destination.column = currentCell.column + 1; destination.row = currentCell.row; break;
			case 2: destination.row = incrementLetter(currentCell.row); destination.column = currentCell.column; break;
			case 3: destination.column = currentCell.column - 1; destination.row = currentCell.row; break;
			}
		tempImage = document.getElementById(destination.row + destination.column.toString()).innerHTML;
		if (tempImage.indexOf("backstroke") != -1) {
			tempImage = "backstroke";
		} else if (tempImage.indexOf("slash") != -1) {
			tempImage = "slash";
		} else if (tempImage.indexOf("hole") != -1) {
			tempImage = "hole";
		} else if (tempImage.indexOf("blank") != -1) {
			tempImage = "blank";
		}
		document.getElementById(destination.row + destination.column.toString()).innerHTML = "<img src=\"../images/mirrors/ball.png\" />";
		switch (tempImage){
			case "slash": switch (direction) {
				case 0: direction = 1; break;
				case 1: direction = 0; break;
				case 2: direction = 3; break;
				case 3: direction = 2; break;
			} break;
			case "backstroke": switch (direction) {
				case 0: direction = 3; break;
				case 1: direction = 2; break;
				case 2: direction = 1; break;
				case 3: direction = 0; break;
			} break;
			case "hole": isMoving = false; break;
			case "blank": break;
			default: break;
		}
		previousCell = currentCell;
		currentCell = destination;
	}
}

document.getElementById("G2").addEventListener("click", function(){ move(0, {row: "G", column: 2});}, false);
document.getElementById("G3").addEventListener("click", function(){ move(0, {row: "G", column: 3});}, false);
document.getElementById("G4").addEventListener("click", function(){ move(0, {row: "G", column: 4});}, false);
document.getElementById("G5").addEventListener("click", function(){ move(0, {row: "G", column: 5});}, false);
document.getElementById("G6").addEventListener("click", function(){ move(0, {row: "G", column: 6});}, false);
document.getElementById("B1").addEventListener("click", function(){ move(1, {row: "B", column: 1});}, false);
document.getElementById("C1").addEventListener("click", function(){ move(1, {row: "C", column: 1});}, false);
document.getElementById("D1").addEventListener("click", function(){ move(1, {row: "D", column: 1});}, false);
document.getElementById("E1").addEventListener("click", function(){ move(1, {row: "E", column: 1});}, false);
document.getElementById("F1").addEventListener("click", function(){ move(1, {row: "F", column: 1});}, false);
document.getElementById("A2").addEventListener("click", function(){ move(2, {row: "A", column: 2});}, false);
document.getElementById("A3").addEventListener("click", function(){ move(2, {row: "A", column: 3});}, false);
document.getElementById("A4").addEventListener("click", function(){ move(2, {row: "A", column: 4});}, false);
document.getElementById("A5").addEventListener("click", function(){ move(2, {row: "A", column: 5});}, false);
document.getElementById("A6").addEventListener("click", function(){ move(2, {row: "A", column: 6});}, false);
document.getElementById("B7").addEventListener("click", function(){ move(3, {row: "B", column: 7});}, false);
document.getElementById("C7").addEventListener("click", function(){ move(3, {row: "C", column: 7});}, false);
document.getElementById("D7").addEventListener("click", function(){ move(3, {row: "D", column: 7});}, false);
document.getElementById("E7").addEventListener("click", function(){ move(3, {row: "E", column: 7});}, false);
document.getElementById("F7").addEventListener("click", function(){ move(3, {row: "F", column: 7});}, false);

function incrementLetter(letter) {
	switch (letter) {
	case "A": return "B";
	case "B": return "C";
	case "C": return "D";
	case "D": return "E";
	case "E": return "F";
	case "F": return "G";
	}
}

function decrementLetter(letter) {
	switch (letter) {
	case "B": return "A";
	case "C": return "B";
	case "D": return "C";
	case "E": return "D";
	case "F": return "E";
	case "G": return "F";
	}
}

//inner cells. what's OOP? :V
var B2state = 0;
var B2image = "blank";
document.getElementById("B2").addEventListener("click", function() { //to be called onclick
	console.log(B2state); //debug
	++B2state;
	console.log(B2state); //debug
	if (B2state > 2 || B2state < 0) { //keeps state looping around from 0-2
		B2state = 0;
	}
	console.log(B2state); //debug
	switch (B2state) {
		case 0: B2image = "blank"; break;
		case 1: B2image = "slash"; break;
		case 2: B2image = "backstroke"; break;
		default: B2image = "blank"; alert("state out of bounds"); break; //should never happen, hence why i have it tell me if so
	}
	console.log(B2image); //debug
	document.getElementById("B2").innerHTML = "<img src=\"../images/mirrors/" + B2image + ".png\" />";
	console.log(document.getElementById("B2").innerHTML); //debug
}, false);

var B3state = 0;
var B3image = "blank";
document.getElementById("B3").addEventListener("click", function() { //to be called onclick
	console.log(B3state); //debug
	++B3state;
	console.log(B3state); //debug
	if (B3state > 2 || B3state < 0) { //keeps state looping around from 0-2
		B3state = 0;
	}
	console.log(B3state); //debug
	switch (B3state) {
		case 0: B3image = "blank"; break;
		case 1: B3image = "slash"; break;
		case 2: B3image = "backstroke"; break;
		default: B3image = "blank"; alert("state out of bounds"); break; //should never happen, hence why i have it tell me if so
	}
	console.log(B3image); //debug
	document.getElementById("B3").innerHTML = "<img src=\"../images/mirrors/" + B3image + ".png\" />";
	console.log(document.getElementById("B3").innerHTML); //debug
}, false);

var B4state = 0;
var B4image = "blank";
document.getElementById("B4").addEventListener("click", function() { //to be called onclick
	console.log(B4state); //debug
	++B4state;
	console.log(B4state); //debug
	if (B4state > 2 || B4state < 0) { //keeps state looping around from 0-2
		B4state = 0;
	}
	console.log(B4state); //debug
	switch (B4state) {
		case 0: B4image = "blank"; break;
		case 1: B4image = "slash"; break;
		case 2: B4image = "backstroke"; break;
		default: B4image = "blank"; alert("state out of bounds"); break; //should never happen, hence why i have it tell me if so
	}
	console.log(B4image); //debug
	document.getElementById("B4").innerHTML = "<img src=\"../images/mirrors/" + B4image + ".png\" />";
	console.log(document.getElementById("B4").innerHTML); //debug
}, false);

var B5state = 0;
var B5image = "blank";
document.getElementById("B5").addEventListener("click", function() { //to be called onclick
	console.log(B5state); //debug
	++B5state;
	console.log(B5state); //debug
	if (B5state > 2 || B5state < 0) { //keeps state looping around from 0-2
		B5state = 0;
	}
	console.log(B5state); //debug
	switch (B5state) {
		case 0: B5image = "blank"; break;
		case 1: B5image = "slash"; break;
		case 2: B5image = "backstroke"; break;
		default: B5image = "blank"; alert("state out of bounds"); break; //should never happen, hence why i have it tell me if so
	}
	console.log(B5image); //debug
	document.getElementById("B5").innerHTML = "<img src=\"../images/mirrors/" + B5image + ".png\" />";
	console.log(document.getElementById("B5").innerHTML); //debug
}, false);

var B6state = 0;
var B6image = "blank";
document.getElementById("B6").addEventListener("click", function() { //to be called onclick
	console.log(B6state); //debug
	++B6state;
	console.log(B6state); //debug
	if (B6state > 2 || B6state < 0) { //keeps state looping around from 0-2
		B6state = 0;
	}
	console.log(B6state); //debug
	switch (B6state) {
		case 0: B6image = "blank"; break;
		case 1: B6image = "slash"; break;
		case 2: B6image = "backstroke"; break;
		default: B6image = "blank"; alert("state out of bounds"); break; //should never happen, hence why i have it tell me if so
	}
	console.log(B6image); //debug
	document.getElementById("B6").innerHTML = "<img src=\"../images/mirrors/" + B6image + ".png\" />";
	console.log(document.getElementById("B6").innerHTML); //debug
}, false);

var C2state = 0;
var C2image = "blank";
document.getElementById("C2").addEventListener("click", function() { //to be called onclick
	console.log(C2state); //debug
	++C2state;
	console.log(C2state); //debug
	if (C2state > 2 || C2state < 0) { //keeps state looping around from 0-2
		C2state = 0;
	}
	console.log(C2state); //debug
	switch (C2state) {
		case 0: C2image = "blank"; break;
		case 1: C2image = "slash"; break;
		case 2: C2image = "backstroke"; break;
		default: C2image = "blank"; alert("state out of bounds"); break; //should never happen, hence why i have it tell me if so
	}
	console.log(C2image); //debug
	document.getElementById("C2").innerHTML = "<img src=\"../images/mirrors/" + C2image + ".png\" />";
	console.log(document.getElementById("C2").innerHTML); //debug
}, false);

var C3state = 0;
var C3image = "blank";
document.getElementById("C3").addEventListener("click", function() { //to be called onclick
	console.log(C3state); //debug
	++C3state;
	console.log(C3state); //debug
	if (C3state > 2 || C3state < 0) { //keeps state looping around from 0-2
		C3state = 0;
	}
	console.log(C3state); //debug
	switch (C3state) {
		case 0: C3image = "blank"; break;
		case 1: C3image = "slash"; break;
		case 2: C3image = "backstroke"; break;
		default: C3image = "blank"; alert("state out of bounds"); break; //should never happen, hence why i have it tell me if so
	}
	console.log(C3image); //debug
	document.getElementById("C3").innerHTML = "<img src=\"../images/mirrors/" + C3image + ".png\" />";
	console.log(document.getElementById("C3").innerHTML); //debug
}, false);

var C4state = 0;
var C4image = "blank";
document.getElementById("C4").addEventListener("click", function() { //to be called onclick
	console.log(C4state); //debug
	++C4state;
	console.log(C4state); //debug
	if (C4state > 2 || C4state < 0) { //keeps state looping around from 0-2
		C4state = 0;
	}
	console.log(C4state); //debug
	switch (C4state) {
		case 0: C4image = "blank"; break;
		case 1: C4image = "slash"; break;
		case 2: C4image = "backstroke"; break;
		default: C4image = "blank"; alert("state out of bounds"); break; //should never happen, hence why i have it tell me if so
	}
	console.log(C4image); //debug
	document.getElementById("C4").innerHTML = "<img src=\"../images/mirrors/" + C4image + ".png\" />";
	console.log(document.getElementById("C4").innerHTML); //debug
}, false);

var C5state = 0;
var C5image = "blank";
document.getElementById("C5").addEventListener("click", function() { //to be called onclick
	console.log(C5state); //debug
	++C5state;
	console.log(C5state); //debug
	if (C5state > 2 || C5state < 0) { //keeps state looping around from 0-2
		C5state = 0;
	}
	console.log(C5state); //debug
	switch (C5state) {
		case 0: C5image = "blank"; break;
		case 1: C5image = "slash"; break;
		case 2: C5image = "backstroke"; break;
		default: C5image = "blank"; alert("state out of bounds"); break; //should never happen, hence why i have it tell me if so
	}
	console.log(C5image); //debug
	document.getElementById("C5").innerHTML = "<img src=\"../images/mirrors/" + C5image + ".png\" />";
	console.log(document.getElementById("C5").innerHTML); //debug
}, false);

var C6state = 0;
var C6image = "blank";
document.getElementById("C6").addEventListener("click", function() { //to be called onclick
	console.log(C6state); //debug
	++C6state;
	console.log(C6state); //debug
	if (C6state > 2 || C6state < 0) { //keeps state looping around from 0-2
		C6state = 0;
	}
	console.log(C6state); //debug
	switch (C6state) {
		case 0: C6image = "blank"; break;
		case 1: C6image = "slash"; break;
		case 2: C6image = "backstroke"; break;
		default: C6image = "blank"; alert("state out of bounds"); break; //should never happen, hence why i have it tell me if so
	}
	console.log(C6image); //debug
	document.getElementById("C6").innerHTML = "<img src=\"../images/mirrors/" + C6image + ".png\" />";
	console.log(document.getElementById("C6").innerHTML); //debug
}, false);

var D2state = 0;
var D2image = "blank";
document.getElementById("D2").addEventListener("click", function() { //to be called onclick
	console.log(D2state); //debug
	++D2state;
	console.log(D2state); //debug
	if (D2state > 2 || D2state < 0) { //keeps state looping around from 0-2
		D2state = 0;
	}
	console.log(D2state); //debug
	switch (D2state) {
		case 0: D2image = "blank"; break;
		case 1: D2image = "slash"; break;
		case 2: D2image = "backstroke"; break;
		default: D2image = "blank"; alert("state out of bounds"); break; //should never happen, hence why i have it tell me if so
	}
	console.log(D2image); //debug
	document.getElementById("D2").innerHTML = "<img src=\"../images/mirrors/" + D2image + ".png\" />";
	console.log(document.getElementById("D2").innerHTML); //debug
}, false);

var D3state = 0;
var D3image = "blank";
document.getElementById("D3").addEventListener("click", function() { //to be called onclick
	console.log(D3state); //debug
	++D3state;
	console.log(D3state); //debug
	if (D3state > 2 || D3state < 0) { //keeps state looping around from 0-2
		D3state = 0;
	}
	console.log(D3state); //debug
	switch (D3state) {
		case 0: D3image = "blank"; break;
		case 1: D3image = "slash"; break;
		case 2: D3image = "backstroke"; break;
		default: D3image = "blank"; alert("state out of bounds"); break; //should never happen, hence why i have it tell me if so
	}
	console.log(D3image); //debug
	document.getElementById("D3").innerHTML = "<img src=\"../images/mirrors/" + D3image + ".png\" />";
	console.log(document.getElementById("D3").innerHTML); //debug
}, false);

var D4state = 0;
var D4image = "blank";
document.getElementById("D4").addEventListener("click", function() { //to be called onclick
	console.log(D4state); //debug
	++D4state;
	console.log(D4state); //debug
	if (D4state > 2 || D4state < 0) { //keeps state looping around from 0-2
		D4state = 0;
	}
	console.log(D4state); //debug
	switch (D4state) {
		case 0: D4image = "blank"; break;
		case 1: D4image = "slash"; break;
		case 2: D4image = "backstroke"; break;
		default: D4image = "blank"; alert("state out of bounds"); break; //should never happen, hence why i have it tell me if so
	}
	console.log(D4image); //debug
	document.getElementById("D4").innerHTML = "<img src=\"../images/mirrors/" + D4image + ".png\" />";
	console.log(document.getElementById("D4").innerHTML); //debug
}, false);

var D5state = 0;
var D5image = "blank";
document.getElementById("D5").addEventListener("click", function() { //to be called onclick
	console.log(D5state); //debug
	++D5state;
	console.log(D5state); //debug
	if (D5state > 2 || D5state < 0) { //keeps state looping around from 0-2
		D5state = 0;
	}
	console.log(D5state); //debug
	switch (D5state) {
		case 0: D5image = "blank"; break;
		case 1: D5image = "slash"; break;
		case 2: D5image = "backstroke"; break;
		default: D5image = "blank"; alert("state out of bounds"); break; //should never happen, hence why i have it tell me if so
	}
	console.log(D5image); //debug
	document.getElementById("D5").innerHTML = "<img src=\"../images/mirrors/" + D5image + ".png\" />";
	console.log(document.getElementById("D5").innerHTML); //debug
}, false);

var D6state = 0;
var D6image = "blank";
document.getElementById("D6").addEventListener("click", function() { //to be called onclick
	console.log(D6state); //debug
	++D6state;
	console.log(D6state); //debug
	if (D6state > 2 || D6state < 0) { //keeps state looping around from 0-2
		D6state = 0;
	}
	console.log(D6state); //debug
	switch (D6state) {
		case 0: D6image = "blank"; break;
		case 1: D6image = "slash"; break;
		case 2: D6image = "backstroke"; break;
		default: D6image = "blank"; alert("state out of bounds"); break; //should never happen, hence why i have it tell me if so
	}
	console.log(D6image); //debug
	document.getElementById("D6").innerHTML = "<img src=\"../images/mirrors/" + D6image + ".png\" />";
	console.log(document.getElementById("D6").innerHTML); //debug
}, false);

var E2state = 0;
var E2image = "blank";
document.getElementById("E2").addEventListener("click", function() { //to be called onclick
	console.log(E2state); //debug
	++E2state;
	console.log(E2state); //debug
	if (E2state > 2 || E2state < 0) { //keeps state looping around from 0-2
		E2state = 0;
	}
	console.log(E2state); //debug
	switch (E2state) {
		case 0: E2image = "blank"; break;
		case 1: E2image = "slash"; break;
		case 2: E2image = "backstroke"; break;
		default: E2image = "blank"; alert("state out of bounds"); break; //should never happen, hence why i have it tell me if so
	}
	console.log(E2image); //debug
	document.getElementById("E2").innerHTML = "<img src=\"../images/mirrors/" + E2image + ".png\" />";
	console.log(document.getElementById("E2").innerHTML); //debug
}, false);

var E3state = 0;
var E3image = "blank";
document.getElementById("E3").addEventListener("click", function() { //to be called onclick
	console.log(E3state); //debug
	++E3state;
	console.log(E3state); //debug
	if (E3state > 2 || E3state < 0) { //keeps state looping around from 0-2
		E3state = 0;
	}
	console.log(E3state); //debug
	switch (E3state) {
		case 0: E3image = "blank"; break;
		case 1: E3image = "slash"; break;
		case 2: E3image = "backstroke"; break;
		default: E3image = "blank"; alert("state out of bounds"); break; //should never happen, hence why i have it tell me if so
	}
	console.log(E3image); //debug
	document.getElementById("E3").innerHTML = "<img src=\"../images/mirrors/" + E3image + ".png\" />";
	console.log(document.getElementById("E3").innerHTML); //debug
}, false);

var E4state = 0;
var E4image = "blank";
document.getElementById("E4").addEventListener("click", function() { //to be called onclick
	console.log(E4state); //debug
	++E4state;
	console.log(E4state); //debug
	if (E4state > 2 || E4state < 0) { //keeps state looping around from 0-2
		E4state = 0;
	}
	console.log(E4state); //debug
	switch (E4state) {
		case 0: E4image = "blank"; break;
		case 1: E4image = "slash"; break;
		case 2: E4image = "backstroke"; break;
		default: E4image = "blank"; alert("state out of bounds"); break; //should never happen, hence why i have it tell me if so
	}
	console.log(E4image); //debug
	document.getElementById("E4").innerHTML = "<img src=\"../images/mirrors/" + E4image + ".png\" />";
	console.log(document.getElementById("E4").innerHTML); //debug
}, false);

var E5state = 0;
var E5image = "blank";
document.getElementById("E5").addEventListener("click", function() { //to be called onclick
	console.log(E5state); //debug
	++E5state;
	console.log(E5state); //debug
	if (E5state > 2 || E5state < 0) { //keeps state looping around from 0-2
		E5state = 0;
	}
	console.log(E5state); //debug
	switch (E5state) {
		case 0: E5image = "blank"; break;
		case 1: E5image = "slash"; break;
		case 2: E5image = "backstroke"; break;
		default: E5image = "blank"; alert("state out of bounds"); break; //should never happen, hence why i have it tell me if so
	}
	console.log(E5image); //debug
	document.getElementById("E5").innerHTML = "<img src=\"../images/mirrors/" + E5image + ".png\" />";
	console.log(document.getElementById("E5").innerHTML); //debug
}, false);

var E6state = 0;
var E6image = "blank";
document.getElementById("E6").addEventListener("click", function() { //to be called onclick
	console.log(E6state); //debug
	++E6state;
	console.log(E6state); //debug
	if (E6state > 2 || E6state < 0) { //keeps state looping around from 0-2
		E6state = 0;
	}
	console.log(E6state); //debug
	switch (E6state) {
		case 0: E6image = "blank"; break;
		case 1: E6image = "slash"; break;
		case 2: E6image = "backstroke"; break;
		default: E6image = "blank"; alert("state out of bounds"); break; //should never happen, hence why i have it tell me if so
	}
	console.log(E6image); //debug
	document.getElementById("E6").innerHTML = "<img src=\"../images/mirrors/" + E6image + ".png\" />";
	console.log(document.getElementById("E6").innerHTML); //debug
}, false);

var F2state = 0;
var F2image = "blank";
document.getElementById("F2").addEventListener("click", function() { //to be called onclick
	console.log(F2state); //debug
	++F2state;
	console.log(F2state); //debug
	if (F2state > 2 || F2state < 0) { //keeps state looping around from 0-2
		F2state = 0;
	}
	console.log(F2state); //debug
	switch (F2state) {
		case 0: F2image = "blank"; break;
		case 1: F2image = "slash"; break;
		case 2: F2image = "backstroke"; break;
		default: F2image = "blank"; alert("state out of bounds"); break; //should never happen, hence why i have it tell me if so
	}
	console.log(F2image); //debug
	document.getElementById("F2").innerHTML = "<img src=\"../images/mirrors/" + F2image + ".png\" />";
	console.log(document.getElementById("F2").innerHTML); //debug
}, false);

var F3state = 0;
var F3image = "blank";
document.getElementById("F3").addEventListener("click", function() { //to be called onclick
	console.log(F3state); //debug
	++F3state;
	console.log(F3state); //debug
	if (F3state > 2 || F3state < 0) { //keeps state looping around from 0-2
		F3state = 0;
	}
	console.log(F3state); //debug
	switch (F3state) {
		case 0: F3image = "blank"; break;
		case 1: F3image = "slash"; break;
		case 2: F3image = "backstroke"; break;
		default: F3image = "blank"; alert("state out of bounds"); break; //should never happen, hence why i have it tell me if so
	}
	console.log(F3image); //debug
	document.getElementById("F3").innerHTML = "<img src=\"../images/mirrors/" + F3image + ".png\" />";
	console.log(document.getElementById("F3").innerHTML); //debug
}, false);

var F4state = 0;
var F4image = "blank";
document.getElementById("F4").addEventListener("click", function() { //to be called onclick
	console.log(F4state); //debug
	++F4state;
	console.log(F4state); //debug
	if (F4state > 2 || F4state < 0) { //keeps state looping around from 0-2
		F4state = 0;
	}
	console.log(F4state); //debug
	switch (F4state) {
		case 0: F4image = "blank"; break;
		case 1: F4image = "slash"; break;
		case 2: F4image = "backstroke"; break;
		default: F4image = "blank"; alert("state out of bounds"); break; //should never happen, hence why i have it tell me if so
	}
	console.log(F4image); //debug
	document.getElementById("F4").innerHTML = "<img src=\"../images/mirrors/" + F4image + ".png\" />";
	console.log(document.getElementById("F4").innerHTML); //debug
}, false);

var F5state = 0;
var F5image = "blank";
document.getElementById("F5").addEventListener("click", function() { //to be called onclick
	console.log(F5state); //debug
	++F5state;
	console.log(F5state); //debug
	if (F5state > 2 || F5state < 0) { //keeps state looping around from 0-2
		F5state = 0;
	}
	console.log(F5state); //debug
	switch (F5state) {
		case 0: F5image = "blank"; break;
		case 1: F5image = "slash"; break;
		case 2: F5image = "backstroke"; break;
		default: F5image = "blank"; alert("state out of bounds"); break; //should never happen, hence why i have it tell me if so
	}
	console.log(F5image); //debug
	document.getElementById("F5").innerHTML = "<img src=\"../images/mirrors/" + F5image + ".png\" />";
	console.log(document.getElementById("F5").innerHTML); //debug
}, false);

var F6state = 0;
var F6image = "blank";
document.getElementById("F6").addEventListener("click", function() { //to be called onclick
	console.log(F6state); //debug
	++F6state;
	console.log(F6state); //debug
	if (F6state > 2 || F6state < 0) { //keeps state looping around from 0-2
		F6state = 0;
	}
	console.log(F6state); //debug
	switch (F6state) {
		case 0: F6image = "blank"; break;
		case 1: F6image = "slash"; break;
		case 2: F6image = "backstroke"; break;
		default: F6image = "blank"; alert("state out of bounds"); break; //should never happen, hence why i have it tell me if so
	}
	console.log(F6image); //debug
	document.getElementById("F6").innerHTML = "<img src=\"../images/mirrors/" + F6image + ".png\" />";
	console.log(document.getElementById("F6").innerHTML); //debug
}, false);
