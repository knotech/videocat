var capture;
var contWidth = document.getElementById('canvas-wrapper').offsetWidth/2;
var contHeight = document.getElementById('canvas-wrapper').offsetHeight;

var lowerThreshold = $('#lower-threshold').val();
var upperThreshold = $('#upper-threshold').val();
var colorToggle = $('#color-toggle').val();
console.log(colorToggle);

// Create listeners for DOM changes
function getLowerThresholdValue() {
	return $('#lower-threshold').change(function(newValue) {
		lowerThreshold = newValue.target.value;
		console.log(lowerThreshold);
	})
};

function getUpperThresholdValue() {
	return $('#upper-threshold').change(function(newValue) {
		upperThreshold = newValue.target.value;
		console.log(upperThreshold);
	})
};

function getColorToggle() {
	return $('#color-toggle').change(function(newValue) {
		colorToggle = this.checked;
		console.log(colorToggle);
	});
};

var w = document.body.offsetWidth*0.3;
var h = 3*(w/4);



function setup() {
	// Setup canvas width & image size
	var canvas = createCanvas(w, h);
	canvas.parent('canvas-wrapper');
	capture = createCapture(VIDEO);
	capture.size(w, h);
	capture.hide();
	$('#lower-threshold').defaultValue = 24;

	// Call functions that return
	getLowerThresholdValue();
	getUpperThresholdValue();
	getColorToggle();
}


function draw() {
	// tint(255,127);
	push();
	scale(-1.0, 1.0);
	image(capture, 0,0,-w, h);
	pop();
	
	loadPixels();
	for (var i=0; i < pixels.length; i+= 4) {
		if((pixels[i] < lowerThreshold || pixels[i] > upperThreshold) && (pixels[i+1] < lowerThreshold || pixels[i+1] > upperThreshold) && (pixels[i+2] < lowerThreshold || pixels[i+2] > upperThreshold))
		pixels[i+3] = 0;
	}
	updatePixels();
	if(!colorToggle) filter(GRAY);
	// if(posterizeToggle === 1) 
	// filter(POSTERIZE, 4);


	
	



	/* NOTES:
	// setTimeout(function() {
	// 	console.log(document.body);
	// },3000);
	// console.log(pixels[100]);
	// filter('INVERT');
	*/
}