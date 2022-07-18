var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("randomBtn");

// Call the function to match the background generated on the first page load and display css property
setGradient();

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

// Create a fuction to generate random hex codes of color (formula from geeksforgeeks)
function randomColors() {
	var letters = "0123456789ABCDEF";
	var color = '#';
	for (var i = 0; i < 6; i++)
	color += letters[(Math.floor(Math.random() * 16))];
	return color;
}

// Function to set randomColors to the color1 and color2 value. Call fanction setGradient to display it
function setRandomInput() {
	color1.value = randomColors();
	color2.value = randomColors();
	body.style.background = setGradient();
	css.textContent = body.style.background + ";";
  }


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomBtn.addEventListener("click", setRandomInput);

