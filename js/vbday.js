document.getElementById("container").style.backgroundColor = randomColour();
document.getElementById("H").style.color = randomColour();
document.getElementById("A").style.color = randomColour();
document.getElementById("P").style.color = randomColour();
document.getElementById("P1").style.color = randomColour();
document.getElementById("Y").style.color = randomColour();
document.getElementById("B").style.color = randomColour();
document.getElementById("I").style.color = randomColour();
document.getElementById("R").style.color = randomColour();
document.getElementById("T").style.color = randomColour();
document.getElementById("H1").style.color = randomColour();
document.getElementById("D").style.color = randomColour();
document.getElementById("A1").style.color = randomColour();
document.getElementById("Y1").style.color = randomColour();
document.getElementById("V").style.color = randomColour();
document.getElementById("I1").style.color = randomColour();
document.getElementById("N").style.color = randomColour();
document.getElementById("C").style.color = randomColour();
document.getElementById("E").style.color = randomColour();
document.getElementById("N1").style.color = randomColour();
document.getElementById("T1").style.color = randomColour();
document.getElementById("2").style.color = randomColour();
document.getElementById("5").style.color = randomColour();
document.getElementById("/").style.color = randomColour();
document.getElementById("1").style.color = randomColour();
document.getElementById("11").style.color = randomColour();
document.getElementById("/1").style.color = randomColour();
document.getElementById("21").style.color = randomColour();
document.getElementById("0").style.color = randomColour();
document.getElementById("12").style.color = randomColour();
document.getElementById("6").style.color = randomColour();
document.getElementById("go").style.color = randomColour();
document.getElementById("go").style.backgroundColor = randomColour();
document.getElementById("go").style.borderColor = randomColour();
var loops = 31;
var i = 0;
function colourLoop(){
	setTimeout(function(){
		colourAssign();
		i++;
		console.log("looped " + i);
		if (i < 31) {
		colourLoop();
		}
	}, 333);
}
colourLoop();

function colourAssign() {
	document.getElementById("container").style.backgroundColor = randomColour();
	document.getElementById("H").style.color = randomColour();
	document.getElementById("A").style.color = randomColour();
	document.getElementById("P").style.color = randomColour();
	document.getElementById("P1").style.color = randomColour();
	document.getElementById("Y").style.color = randomColour();
	document.getElementById("B").style.color = randomColour();
	document.getElementById("I").style.color = randomColour();
	document.getElementById("R").style.color = randomColour();
	document.getElementById("T").style.color = randomColour();
	document.getElementById("H1").style.color = randomColour();
	document.getElementById("D").style.color = randomColour();
	document.getElementById("A1").style.color = randomColour();
	document.getElementById("Y1").style.color = randomColour();
	document.getElementById("V").style.color = randomColour();
	document.getElementById("I1").style.color = randomColour();
	document.getElementById("N").style.color = randomColour();
	document.getElementById("C").style.color = randomColour();
	document.getElementById("E").style.color = randomColour();
	document.getElementById("N1").style.color = randomColour();
	document.getElementById("T1").style.color = randomColour();
	document.getElementById("2").style.color = randomColour();
	document.getElementById("5").style.color = randomColour();
	document.getElementById("/").style.color = randomColour();
	document.getElementById("1").style.color = randomColour();
	document.getElementById("11").style.color = randomColour();
	document.getElementById("/1").style.color = randomColour();
	document.getElementById("21").style.color = randomColour();
	document.getElementById("0").style.color = randomColour();
	document.getElementById("12").style.color = randomColour();
	document.getElementById("6").style.color = randomColour();
	document.getElementById("go").style.color = randomColour();
	document.getElementById("go").style.backgroundColor = randomColour();
	document.getElementById("go").style.borderColor = randomColour();
}

function randomColour() {
	return '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
}

function go(){
	if (i == 31){
		i = 0;
		colourLoop()
	}
	else{
		console.log('running')
	}
}