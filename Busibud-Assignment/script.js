
var menuItems = document.getElementById("menuItems");
var bars = document.getElementById("bars");
var xmark = document.getElementById("xmark");

function toggleNavigation() {
	menuItems.classList.toggle("active");
}

bars.addEventListener("click", function(){
	xmark.classList.toggle("switchIcon");
	bars.classList.toggle("switchIcon");
});

xmark.addEventListener("click", function(){
	bars.classList.toggle("switchIcon");
	xmark.classList.toggle("switchIcon");
	
});
