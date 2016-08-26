var p1 = {x: 5, y: 5};
var p2 = {x: 495, y: 495};
var c1 = {x: 5, y: 495};
var c2 = {x: 495, y: 5};
var pointSelect = 1;
var ctx = document.getElementById("lessonCanvas").getContext("2d");

ctx.beginPath()
ctx.fillStyle = 'rgb(255,0,0)';
ctx.arc(p1.x,p1.y,5,Math.PI * 2, false);
ctx.fill();
ctx.beginPath()
ctx.arc(p2.x,p2.y,5,Math.PI * 2, false);
ctx.fill();
ctx.beginPath()
ctx.arc(c1.x,c1.y,5,Math.PI * 2, false);
ctx.fill();
ctx.beginPath()
ctx.arc(c2.x,c2.y,5,Math.PI * 2, false);
ctx.fill();
ctx.beginPath();
ctx.moveTo(p1.x, p1.y);
ctx.bezierCurveTo(c1.x, c1.y, c2.x, c2.y, p2.x, p2.y);
ctx.stroke();
document.getElementById("coord1").innerHTML = "The coordinates of the starting point are (" + p1.x + ", " + p1.y +")"
document.getElementById("coord2").innerHTML = "The coordinates of the first control point are (" + c1.x + ", " + c1.y +")"
document.getElementById("coord3").innerHTML = "The coordinates of the second control point are (" + c2.x + ", " + c2.y +")"
document.getElementById("coord4").innerHTML = "The coordinates of the end point are (" + p2.x + ", " + p2.y +")"

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
	}
}

function initOne() {
	pointSelect = 1;
	document.getElementById("inst").innerHTML = "Click where you want to place the starting point for the curve.";
}
function initTwo() {
	pointSelect = 2;
	document.getElementById("inst").innerHTML = "Click where you want to place the first control point for the curve.";
}
function initThree() {
	pointSelect = 3;
	document.getElementById("inst").innerHTML = "Click where you want to place the second control point for the curve.";
}
function initFour() {
	pointSelect = 4;
	document.getElementById("inst").innerHTML = "Click where you want to place the end point for the curve.";
}

function drawOne(e) {
	ctx.clearRect(0, 0, document.getElementById("lessonCanvas").width, document.getElementById("lessonCanvas").height);
	ctx.beginPath()
	ctx.arc(c2.x,c2.y,5,Math.PI * 2, false);
	ctx.fill();
	ctx.beginPath()
	ctx.arc(c1.x,c1.y,5,Math.PI * 2, false);
	ctx.fill();
	ctx.beginPath()
	ctx.arc(p2.x,p2.y,5,Math.PI * 2, false);
	ctx.fill();
	p1 = getMousePos(lessonCanvas, e);
	ctx.beginPath()
	ctx.arc(p1.x,p1.y,5,Math.PI * 2, false);
	ctx.fill();
	ctx.beginPath();
	ctx.moveTo(p1.x, p1.y);
	ctx.bezierCurveTo(c1.x, c1.y, c2.x, c2.y, p2.x, p2.y);
	ctx.stroke();
	document.getElementById("coord1").innerHTML = "The coordinates of the starting point are (" + p1.x + ", " + p1.y +")"
}

function drawTwo(e) {
	ctx.clearRect(0, 0, document.getElementById("lessonCanvas").width, document.getElementById("lessonCanvas").height);
	ctx.beginPath()
	ctx.arc(c2.x,c2.y,5,Math.PI * 2, false);
	ctx.fill();
	ctx.beginPath()
	ctx.arc(p1.x,p1.y,5,Math.PI * 2, false);
	ctx.fill();
	ctx.beginPath()
	ctx.arc(p2.x,p2.y,5,Math.PI * 2, false);
	ctx.fill();
	c1 = getMousePos(lessonCanvas, e);
	ctx.beginPath()
	ctx.arc(c1.x,c1.y,5,Math.PI * 2, false);
	ctx.fill();
	ctx.beginPath();
	ctx.moveTo(p1.x, p1.y);
	ctx.bezierCurveTo(c1.x, c1.y, c2.x, c2.y, p2.x, p2.y);
	ctx.stroke();
	document.getElementById("coord2").innerHTML = "The coordinates of the first control point are (" + c1.x + ", " + c1.y +")"
}

function drawThree(e) {
	ctx.clearRect(0, 0, document.getElementById("lessonCanvas").width, document.getElementById("lessonCanvas").height);
	ctx.beginPath()
	ctx.arc(p2.x,p2.y,5,Math.PI * 2, false);
	ctx.fill();
	ctx.beginPath()
	ctx.arc(p1.x,p1.y,5,Math.PI * 2, false);
	ctx.fill();
	ctx.beginPath()
	ctx.arc(c1.x,c1.y,5,Math.PI * 2, false);
	ctx.fill();
	c2 = getMousePos(lessonCanvas, e);
	ctx.beginPath()
	ctx.arc(c2.x,c2.y,5,Math.PI * 2, false);
	ctx.fill();
	ctx.beginPath();
	ctx.moveTo(p1.x, p1.y);
	ctx.bezierCurveTo(c1.x, c1.y, c2.x, c2.y, p2.x, p2.y);
	ctx.stroke();
	document.getElementById("coord3").innerHTML = "The coordinates of the second control point are (" + c2.x + ", " + c2.y +")"
}

function drawFour(e) {
	ctx.clearRect(0, 0, document.getElementById("lessonCanvas").width, document.getElementById("lessonCanvas").height);
	ctx.beginPath()
	ctx.arc(c2.x,c2.y,5,Math.PI * 2, false);
	ctx.fill();
	ctx.beginPath()
	ctx.arc(p1.x,p1.y,5,Math.PI * 2, false);
	ctx.fill();
	ctx.beginPath()
	ctx.arc(c1.x,c1.y,5,Math.PI * 2, false);
	ctx.fill();
	p2 = getMousePos(lessonCanvas, e);
	ctx.beginPath()
	ctx.arc(p2.x,p2.y,5,Math.PI * 2, false);
	ctx.fill();
	ctx.beginPath();
	ctx.moveTo(p1.x, p1.y);
	ctx.bezierCurveTo(c1.x, c1.y, c2.x, c2.y, p2.x, p2.y);
	ctx.stroke();
	document.getElementById("coord4").innerHTML = "The coordinates of the end point are (" + p2.x + ", " + p2.y +")"
}

function setupCanvas(e) {
	switch (pointSelect) {
		default:
		case 1:
		{
			drawOne(e);
			break;
		}
		case 2: 
		{
			drawTwo(e);
			break;
		}
		case 3:
		{
			drawThree(e);
			break;
		}
		case 4:
		{
			drawFour(e);
			break;
		}
	}
}