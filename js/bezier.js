//initialise vars
var p1;
var p2;
var c1;
var c2;
//^points for curve, left undefined by design
var drawnYet = false;
var ctx = document.getElementById("lessonCanvas").getContext("2d"); //canvas
function getMousePos(canvas, evt) { //gets mouse position relative to canvas
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
	}
}

function setupCanvas(e) { //called onclick
	if (p1 == undefined) { //if point one doesn't exist yet, create point one at mouse pos
		p1 = getMousePos(lessonCanvas, e);
		ctx.beginPath()
		ctx.fillStyle = 'rgb(255,0,0)';
		ctx.arc(p1.x,p1.y,5,Math.PI * 2, false); //draw arc, 2pi is full circle
		ctx.fill();
		document.getElementById("inst").innerHTML = "Click where you want to place the first control point for the curve.";
		document.getElementById("coord1").innerHTML = "The coordinates of the starting point are (" + p1.x + ", " + p1.y +")"
	} //if p1 didn't exist, if statement ends here
	else if (c1 == undefined) { //moves on one further if each time the function is called
		c1 = getMousePos(lessonCanvas, e);
		ctx.beginPath()
		ctx.fillStyle = 'rgb(255,0,0)';
		ctx.arc(c1.x,c1.y,5,Math.PI * 2, false);
		ctx.fill();
		document.getElementById("inst").innerHTML="Click where you want to place the second control point for the curve.";
		document.getElementById("coord2").innerHTML = "The coordinates of the first control point are (" + c1.x + ", " + c1.y +")"
	}
	else if (c2 == undefined) {
		c2 = getMousePos(lessonCanvas, e);
		ctx.beginPath()
		ctx.fillStyle = 'rgb(255,0,0)';
		ctx.arc(c2.x,c2.y,5,Math.PI * 2, false);
		ctx.fill();
		document.getElementById("inst").innerHTML="Click where you want to place the end point of the curve.";
		document.getElementById("coord3").innerHTML = "The coordinates of the second control point are (" + c2.x + ", " + c2.y +")"
	}
	else if (p2 == undefined) {
		p2 = getMousePos(lessonCanvas, e);
		ctx.beginPath()
		ctx.fillStyle = 'rgb(255,0,0)';
		ctx.arc(p2.x,p2.y,5,Math.PI * 2, false);
		ctx.fill();
		document.getElementById("inst").innerHTML="Click once more to generate the curve!";
		document.getElementById("coord4").innerHTML = "The coordinates of the end point are (" + p2.x + ", " + p2.y +")"
	}
	else if (drawnYet == false){//after all points set, will happen only once...
		ctx.beginPath();
		ctx.moveTo(p1.x, p1.y);
		ctx.bezierCurveTo(c1.x, c1.y, c2.x, c2.y, p2.x, p2.y);
		ctx.stroke();
		drawnYet = true;//...because this is set
		document.getElementById("inst").innerHTML="The curve has now been drawn! Click again to reset.";
	}
	else { //clears canvas and resets all vars to how they were defined at top of script
		p1 = undefined;
		c1 = undefined;
		c2 = undefined;
		p2 = undefined;
		drawnYet = false;
		ctx.clearRect(0, 0, document.getElementById("lessonCanvas").width, document.getElementById("lessonCanvas").height);
		document.getElementById("inst").innerHTML = "Click where you want to place the starting point of the curve.";
		document.getElementById("coord1").innerHTML = ""
		document.getElementById("coord2").innerHTML = ""
		document.getElementById("coord3").innerHTML = ""
		document.getElementById("coord4").innerHTML = ""
	}
}