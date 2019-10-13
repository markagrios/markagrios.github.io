console.log("script.js");

images = ['img/cloud2.gif',
					'img/cloud1.gif',
					'img/cloud3.gif',
					'img/cloud4.gif',
					'img/cloud5.gif',
					'img/cloud6.gif',
					'img/expanding-cloud.gif'];

// var i = 0;
// var changer = document.getElementById("body");
// setInterval(function() {
//       changer.style.backgroundImage = "url(" + images[i] + ")";
//       i = i + 1;
//       if (i == images.length) {
//         i =  0;
//       }
// }, 3000);





$("#sig_black").mouseenter(
	function() {
			$("#sig_c").fadeIn(400);
			$("#sig_m").fadeIn(600);
			$("#sig_y").fadeIn(800);
	}
);

$("#sig_black").mouseleave(
	function() {
			$("#sig_c").fadeOut(800);
			$("#sig_m").fadeOut(600);
			$("#sig_y").fadeOut(400);
	}
);

$("#sig_black").click(
	function() {
			$("#bar").fadeIn(500);
	}
);

$("#about").click(
	function() {
			$("#contact-content").fadeOut(0);
			$("#about-content").fadeIn(700);
	}
);

$("#contact").click(
	function() {
			$("#about-content").fadeOut(0);
			$("#contact-content").fadeIn(700);
	}
);

i = 0;
j = 0;
$("#button-clicker").click(
	function() {
		document.getElementById("body").style.backgroundImage = "url(" + images[i] + ")";
		// document.getElementById("button").style.backgroundImage = "url(" + images[j] + ")";
		i = (i+1) % images.length;
		j = (j+2) % images.length;

		console.log(i)
	}
);
