function update(sender) { //to be called onclick at each cell where sender is the cell's ID
	state++; //TODO make this the state of a given cell, preferable without making 25 vars and functions
	if (state > 2 || state < 0) { //keeps state looping around from 0-2
		state = 0;
	}
	switch (state) {
		case 0: var image = "blank"; break;
		case 1: var image = "slash"; break;
		case 2: var image = "backslash"; break;
		default: var image = "blank"; alert("state out of bounds"); break; //should never happen, hence why i have it tell me if so
	}
	document.getElementByID(sender).innerHTML = "<img src=\"../images/mirrors/" + image + ".png\" />"; 