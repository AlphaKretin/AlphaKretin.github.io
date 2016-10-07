var B2state = 0;
var B2image = "blank";
document.getElementById("B2").addEventListener("click", updateB2(), false);

function updateB2() { //to be called onclick
	alert("butts"); //testing when called
	B2state++;
	if (B2state > 2 || B2state < 0) { //keeps state looping around from 0-2
		B2state = 0;
	}
	switch (B2state) {
		case 0: B2image = "blank"; break;
		case 1: B2image = "slash"; break;
		case 2: B2image = "backslash"; break;
		default: B2image = "blank"; alert("state out of bounds"); break; //should never happen, hence why i have it tell me if so
	}
	document.getElementById("B2").InnerHTML = "<img src=\"../images/mirrors/" + B2image + ".png\" />"; 
	document.getElementById("links").InnerHTML = B2state;
}
	