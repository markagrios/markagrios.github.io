
var canvas = document.getElementById('canvas_1');
var ctx = canvas.getContext("2d");
var height = canvas.height;
var width = canvas.width;
var prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0,
    color = "black",
    dot_flag = false;
var totalpath = 0;

function init() {	      
	canvas.addEventListener("mousemove", function (e) {
        var mousePos = displayCoord(canvas, event);
		var message = mousePos.x + ',' + mousePos.y;
		color = getPixel(imageData,mousePos.x,mousePos.y);
		document.getElementById("coord").innerHTML = message;
		document.getElementById("color").innerHTML = color;
		findxy('move', e)
    }, false);
    canvas.addEventListener("mousedown", function (e) {
        findxy('down', e)
    }, false);
    canvas.addEventListener("mouseup", function (e) {
        findxy('up', e)
    }, false);
    canvas.addEventListener("mouseout", function (e) {
        findxy('out', e)
    }, false);
}

function draw() {
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.closePath();
    document.getElementById("drawn").innerHTML = totalpath++;
}


function displayCoord(canvas, event) {
	var rect = canvas.getBoundingClientRect();
	return {
        x: event.clientX - rect.left,
		y: event.clientY - rect.top	
	}
}

function findxy(res, e) {
    if (res == 'down') {
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvas.offsetLeft;
        currY = e.clientY - canvas.offsetTop;

        flag = true;
        dot_flag = true;
        if (dot_flag) {
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.fillRect(currX, currY, 2, 2);
            ctx.closePath();
            dot_flag = false;
        }
    }
    if (res == 'up' || res == "out") {
        flag = false;
    }
    if (res == 'move') {
        if (flag) {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - canvas.offsetLeft;
            currY = e.clientY - canvas.offsetTop;
            draw();
        }
    }
}

/******ARRAY MANIPULATION******/
imageData = ctx.createImageData(width,height);
imageData.width;
imageData.height;
imageData.data;

function toMatrix(imageData) { //put imageData into a 2D array  of rgba values instead of a list
	var matrix = []
	for(i = 0; i < imageData.width; i++) {
		matrix[i] = [];
	}
	for(i = 0; i < imageData.width; i++) {
		for(j = 0; j < imageData.height; j++) {
			matrix[i][j] = getPixel(imageData,i,j);
		}
	}
	return matrix;
}

function setPixel(imageData,x,y,r,g,b,a) {
	index = ((x + y * imageData.width) * 4);
	imageData.data[index+0] = r;
	imageData.data[index+1] = g;
	imageData.data[index+2] = b;
	imageData.data[index+3] = a;
}
function getPixel(imageData,x,y) { // why is it not always 6 digits?...
	index = ((x + y * imageData.width) * 4);
	var value = (imageData.data[index+0].toString(16) + imageData.data[index+1].toString(16) + imageData.data[index+2].toString(16)); 
	//var value = imageData.data[index+0].toString(16).concat(imageData.data[index+1].toString(16)).concat(imageData.data[index+2].toString(16)).concat(imageData.data[index+3].toString(16))
	return value;
}

function distance(x1,y1,x2,y2) {
	return Math.sqrt(((x2-x1)*(x2-x1)) + ((y2-y1)*(y2-y1)));
}
/******************************/

/*******BUTTONS****************/
function clear() {
	ctx.clearRect(0,0,width,height);
	imageData = ctx.createImageData(width,height);
	document.getElementById("drawn").innerHTML = 0;
}

function generate() {
	center = document.getElementById("center").value.split(",");
	red = document.getElementById("red").value;
	green = document.getElementById("green").value;
	blue = document.getElementById("blue").value;
	
	for(i = 0; i < imageData.width; i++) {
		for(j = 0; j < imageData.height; j++) {		
			d = (distance(center[0],center[1],i,j));
			t = Math.sin(d/7);
			
			r = (red + t * 20) % t;
			g = (t * green);
			b = (100 + t * blue);
			a = 200
			setPixel(imageData,i,j,r,g,b,a);
		}
	}
	
	ctx.putImageData(imageData,0,0);		
}
/******************************/
/*
for(i = 0; i < imageData.width; i++) {
	for(j = 0; j < imageData.height; j++) {		
		r = Math.random() * 256 | 0;
		g = Math.random() * 256 | 0;
		b = Math.random() * 256 | 0;
		a = Math.random() * 256 | 0;
		setPixel(imageData,i,j,r,g,b,a);
	}
}	
*/

/****CORRECTION********************************************************************************/
/*function find_start(array) {
	
	
	return
		x: ,
		y:
}*/

function straighten(array,x,y) { // space it is acting on and starting coordinates
	
}

function smooth(array,x,y) { // space it is acting on and starting coordinates
		
}

/**********************************************************************************************/

ctx.putImageData(imageData,0,0);
console.log(getPixel(imageData,26,26));
console.log(toMatrix(imageData)[26][26]);
//console.log(imageData);


/******JQUERY******/
$("#clear").click(function() {
	clear();
});

genclick = false;
document.getElementById("generate").innerHTML = "generate"; // &#9662 for arrow
$("#generate").click(function() {
	if(genclick == true) {
		generate();
	}
	if(genclick == false) {
		$("form").slideDown(300);
		document.getElementById("generate").innerHTML = "go";
		genclick = true;
	}
});












