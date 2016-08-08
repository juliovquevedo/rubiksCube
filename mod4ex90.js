var canvas = document.getElementById("demoCanvas");
var context = canvas.getContext("2d");

var height = 800;
var width = 1600;
var squareSide = 450;
var offset = 150;
var centerOfCanvasX = width / 2;
var centerOfCanvasY = height / 2;


var vertexAX = (centerOfCanvasX - ((squareSide - offset) / 2));
var vertexAY = (centerOfCanvasY - ((squareSide - offset) / 2));
var vertexBX = (centerOfCanvasX + ((squareSide + offset) / 2));
var vertexBY = (centerOfCanvasY - ((squareSide - offset) / 2));
var vertexCX = (centerOfCanvasX + ((squareSide + offset) / 2));
var vertexCY = (centerOfCanvasY + ((squareSide + offset) / 2));
var vertexDX = (centerOfCanvasX - ((squareSide - offset) / 2));
var vertexDY = (centerOfCanvasY + ((squareSide + offset) / 2));

var vertexEX = (centerOfCanvasX - ((squareSide + offset) / 2));
var vertexEY = (centerOfCanvasY - ((squareSide + offset) / 2));
var vertexFX = (centerOfCanvasX + ((squareSide - offset) / 2));
var vertexFY = (centerOfCanvasY - ((squareSide + offset) / 2));
var vertexGX = (centerOfCanvasX + ((squareSide - offset) / 2));
var vertexGY = (centerOfCanvasY + ((squareSide - offset) / 2));
var vertexHX = (centerOfCanvasX - ((squareSide + offset) / 2));
var vertexHY = (centerOfCanvasY + ((squareSide - offset) / 2));

var drawCube = function() {
	context.moveTo(vertexAX, vertexAY);
	context.lineTo(vertexBX, vertexBY);
	context.lineTo(vertexCX, vertexCY);
	context.lineTo(vertexDX, vertexDY);
	context.lineTo(vertexAX, vertexAY);
	context.stroke();

	context.moveTo(vertexEX, vertexEY);
	context.lineTo(vertexFX, vertexFY);
	context.lineTo(vertexGX, vertexGY);
	context.lineTo(vertexHX, vertexHY);
	context.lineTo(vertexEX, vertexEY);
	context.stroke();

	context.moveTo(vertexAX, vertexAY);
	context.lineTo(vertexEX, vertexEY);
	context.stroke();

	context.moveTo(vertexBX, vertexBY);
	context.lineTo(vertexFX, vertexFY);
	context.stroke();

	context.moveTo(vertexCX, vertexCY);
	context.lineTo(vertexGX, vertexGY);
	context.stroke();

	context.moveTo(vertexDX, vertexDY);
	context.lineTo(vertexHX, vertexHY);
	context.stroke();
}

drawCube();

/* Cross-hairs */
context.moveTo(width / 2 - 10, height / 2);
context.lineTo(width / 2 + 10, height / 2);
context.stroke();
context.moveTo(width / 2, height / 2 -10);
context.lineTo(width / 2, height / 2 + 10);
context.stroke();
/*
context.fillStyle = "#0000ff";
context.fillRect(660, 260, 400, 400);
*/