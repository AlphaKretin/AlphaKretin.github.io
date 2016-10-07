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
	document.getElementById("B2").InnerHTML = "<img src=\"../images/mirrors/" + B2image + ".png\" />";
	console.log(document.getElementById("B2").InnerHTML); //debug
}, false);

