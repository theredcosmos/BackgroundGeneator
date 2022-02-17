var h3 = document.getElementById("heading3");
var color1= document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("body");
 

function gradient() {
 var store = body.style.background= "linear-gradient(to right,"
	   + color1.value + ", "
	    + color2.value +")";
	   h3.textContent = body.style.background +";"
}

color1.addEventListener("input", gradient)

color2.addEventListener("input", gradient)