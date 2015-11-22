// Create a new scene
var scene = new THREE.Scene();
// Set the initial perspective of the camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Instantiate the renderer and give it a transparent background
var renderer = new THREE.WebGLRenderer({alpha:true});
// Set parameters for the renderer
renderer.setSize( window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0);
document.body.appendChild(renderer.domElement);

var mouse = new THREE.Vector2();

function onMouseMove( event ) {

	// calculate mouse position in normalized device coordinates
	// (-1 to +1) for both components

	mouse.x = ( (event.clientX * -1) + window.innerWidth/2 );
	mouse.y = ( (event.clientY * -1) + window.innerHeight/2 );	

}

var geometry = new THREE.BoxGeometry(Math.PI,Math.PI,Math.PI);
var geometry2 = new THREE.BoxGeometry( Math.pow(Math.PI,0.5), Math.pow(Math.PI,0.5),Math.pow(Math.PI,0.5) );
var geometry3 = new THREE.BoxGeometry( Math.PI,Math.PI,Math.PI);
var geometry4 = new THREE.SphereGeometry(Math.PI/2, 36, 36);
var geometry5 = new THREE.SphereGeometry(25, 100, 100);

var material = new THREE.MeshLambertMaterial( {
	linewidth: 1,
	dashSize: 1,
	wireframe: true,
	color: 0x000000,
	// linewidth: 0.1,
	vertexColors: 0xadfe98
});

var material2 = new THREE.PointCloudMaterial( {
	// wireframe: true,
	// linewidth: 5,
	opacity: 0.5,
	color: 0xadfe98,
	vertexColors: 0xadfe98
});

var basicMat = new THREE.MeshDepthMaterial({
	color: 0x000000,
	transparent: true

});

var cube = new THREE.Mesh( geometry, material );
var cube2 = new THREE.Mesh(geometry2, material);
// var cube3 = new THREE.Mesh(geometry3, material);
var sphere = new THREE.Mesh(geometry4, material2);
var sphere2 = new THREE.Mesh(geometry5, material);

scene.add(cube);
scene.add(cube2);
// scene.add(cube3);
scene.add(sphere);
scene.add(sphere2);
camera.position.z = 10;
var cameraIncrement = 0;

var render = function() {
	requestAnimationFrame( render );

	
	cube.rotation.x += mouse.x*0.0001;
	cube.rotation.y += mouse.x*0.00005;
	cube.rotation.z += mouse.x*0.00005;

	cube2.rotation.x += mouse.y*0.00005;
	cube2.rotation.y += mouse.y*0.0001;
	cube.rotation.z += mouse.y*0.00005;

	// cube3.rotation.x += 0.005;
	// cube3.rotation.y += 0.005;
	// cube3.rotation.z += 0.01;

	sphere.rotation.z += 0.01;
	sphere2.rotation.y -= 0.001;
	// if(camera.position.z < 1 || camera.position.z > 10) {
	// 	cameraZIncrement *= -1;
	// }
	// if(camera.position.z > 10) {
	// 	cameraZIncrement = 0;
	// }
	// console.log(cameraZIncrement);
	// console.log(camera.position.z)
	camera.position.z = 10;
	// camera.position.y = ;
	// camera.position
	cameraIncrement += 0.01;

	// camera.position.x += Math.abs(cameraZIncrement*0.13);
	// camera.position.y += cameraZIncrement*0.75;
	renderer.render( scene, camera );
}

window.addEventListener('mousemove', onMouseMove, false);

render();




