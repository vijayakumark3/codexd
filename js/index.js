// navbar

document.addEventListener("DOMContentLoaded", function () {
	var navbar = document.getElementById("navSec");

	window.onscroll = function () {
	    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
	        navbar.style.backgroundColor = "#000";

			var navlinks = document.querySelectorAll('.navlinks');
	        
	        navlinks.style.backgroundColor = "#fff";
	        navlinks.style.color = "#000";
	    } else {
	        navbar.style.backgroundColor = "transparent";
	    }
	};
});






// var navTop = document.querySelector(".navSec");
// // // var nav0 = navTop.style.top = 0;
// // // if (navTop.style.top != 0) {
// // // 	navTop.style.background = "yellow";
// // // }

// navTop.style.background="red";

// // alert("hi");