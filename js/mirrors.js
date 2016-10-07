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
		case 2: B2image = "backslash"; break;
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
		case 2: B3image = "backslash"; break;
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
		case 2: B4image = "backslash"; break;
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
		case 2: B5image = "backslash"; break;
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
		case 2: B6image = "backslash"; break;
		default: B6image = "blank"; alert("state out of bounds"); break; //should never happen, hence why i have it tell me if so
	}
	console.log(B6image); //debug
	document.getElementById("B6").innerHTML = "<img src=\"../images/mirrors/" + B6image + ".png\" />";
	console.log(document.getElementById("B6").innerHTML); //debug
}, false);


