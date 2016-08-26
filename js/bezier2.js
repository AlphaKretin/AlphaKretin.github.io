//see bezier.js for additional comments
var p1;
var p2;
var c1;
var c2;
var drawnYet = false;
var readyYet = false;
var ctx = document.getElementById("lessonCanvas").getContext("2d");
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
	}
}

function setupCanvas(e) {
	if (p1 == undefined) {
		p1 = getMousePos(lessonCanvas, e);
		ctx.beginPath()
		ctx.fillStyle = 'rgb(255,0,0)';
		ctx.arc(p1.x,p1.y,5,Math.PI * 2, false);
		ctx.fill();
		document.getElementById("inst").innerHTML = "Click where you want to place the first control point for the curve.";
		document.getElementById("coord1").innerHTML = "The coordinates of the starting point are (" + p1.x + ", " + p1.y +")"
	}
	else if (c1 == undefined) {
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
		document.getElementById("inst").innerHTML="Move the mouse to define the end point of the curve.";
		document.getElementById("coord3").innerHTML = "The coordinates of the second control point are (" + c2.x + ", " + c2.y +")"
		readyYet = true;
	}
//does nothing if all 3 points are there, which is fine	
}

function drawCurve(e) {//called onmousemove
	if (readyYet == true) {//won't execute until all three points are placed
		ctx.clearRect(0, 0, document.getElementById("lessonCanvas").width, document.getElementById("lessonCanvas").height); //clears canvas, but not point vars..
		ctx.beginPath()
		ctx.fillStyle = 'rgb(255,0,0)';
		ctx.arc(p1.x,p1.y,5,Math.PI * 2, false); //...so they can be redrawn immediately. this is necessary to clear any previous curve, since this script will execute repeatedly as the mouse moves
		ctx.fill();
		ctx.beginPath()
		ctx.fillStyle = 'rgb(255,0,0)';
		ctx.arc(c1.x,c1.y,5,Math.PI * 2, false);
		ctx.fill();
		ctx.beginPath()
		ctx.fillStyle = 'rgb(255,0,0)';
		ctx.arc(c2.x,c2.y,5,Math.PI * 2, false);
		ctx.fill();
		p2 = getMousePos(lessonCanvas, e);
		document.getElementById("coord4").innerHTML = "The coordinates of the end point are (" + p2.x + ", " + p2.y +")" //p2 is not drawn as a small circle, the location of the mouse is sufficient indication
		ctx.beginPath();
		ctx.moveTo(p1.x, p1.y);
		ctx.bezierCurveTo(c1.x, c1.y, c2.x, c2.y, p2.x, p2.y);
		ctx.stroke();
		drawnYet = true;
		document.getElementById("inst").innerHTML="The curve is being drawn with your mouse as the end point!";
	}	
}

function reset() { //called on the press of a specific button, but same effect as else in bezier.js
	p1 = undefined;
	c1 = undefined;
	c2 = undefined;
	p2 = undefined;
	drawnYet = false;
	readyYet = false;
	ctx.clearRect(0, 0, document.getElementById("lessonCanvas").width, document.getElementById("lessonCanvas").height);
	document.getElementById("inst").innerHTML = "Click where you want to place the starting point of the curve.";
	document.getElementById("coord1").innerHTML = ""
	document.getElementById("coord2").innerHTML = ""
	document.getElementById("coord3").innerHTML = ""
	document.getElementById("coord4").innerHTML = ""
}