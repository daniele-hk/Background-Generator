var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("randomBtn");

// Call the function to match the background generated on the first page load and display css property
setGradient();

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

// Create a fuction to generate random rgb value (Math.floor from stack overflow, and I re-adapted it as I could by my current knowledge)
function randomColors() {
	const r1 = Math.floor(Math.random() * 256);
  	const g1 = Math.floor(Math.random() * 256);
  	const b1 = Math.floor(Math.random() * 256);
	const r2 = Math.floor(Math.random() * 256);
  	const g2 = Math.floor(Math.random() * 256);
  	const b2 = Math.floor(Math.random() * 256);
	var color1 = "rgb(" + r1 + ", " + g1 + ", " + b1 + ")";
	var color2 = "rgb(" + r2 + ", " + g2 + ", " + b2 + ")";
	body.style.background = "linear-gradient(to right, " + color1 + ", " + color2 + ")";
	css.textContent = body.style.background + ";";
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomBtn.addEventListener("click", randomColors);