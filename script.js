console.log("script.js");

images = ['img/cloud2.gif',
					'img/cloud1.gif',
					'img/cloud3.gif',
					'img/cloud4.gif',
					'img/cloud5.gif',
					'img/cloud6.gif',
					'img/expanding-cloud.gif'];


fonts = ['Carter One',
				 'Cinzel',
				 'Gloria Hallelujah',
				 'Modak',
				 'Righteous'
				];

// var i = 0;
// var changer = document.getElementById("body");
// setInterval(function() {
//       changer.style.backgroundImage = "url(" + images[i] + ")";
//       i = i + 1;
//       if (i == images.length) {
//         i =  0;
//       }
// }, 3000);




f1 = 150;
f2 = 300;
f3 = 450;
$("#sig_black").mouseenter(
	function() {
			$("#sig_c").fadeIn(f1,'swing');
			$("#sig_m").fadeIn(f2,'swing');
			$("#sig_y").fadeIn(f3,'swing');
			// $("#sig_c").fadeIn(20);
			// setTimeout(() => {console.log("This message appears after a 2-second delay.");}, 1000);
			// $("#sig_m").fadeIn(20);
			// setTimeout(() => {console.log("This message appears after a 2-second delay.");}, 1000);
			// $("#sig_y").fadeIn(20);
			
	}
);

$("#sig_black").mouseleave(
	function() {
			$("#sig_c").fadeOut(f3,'swing');
			$("#sig_m").fadeOut(f2,'swing');
			$("#sig_y").fadeOut(f1,'swing');
	}
);

$("#sig_black").click(
	function() {
			$("#bar").fadeIn(300);
	}
);


$("#about").click(
	function() {
			$("#publications").fadeOut(0);
			$("#contact-content").fadeOut(0);
			$("#about-content").fadeIn(700);
			
	}
);

$("#contact").click(
	function() {
			$("#about-content").fadeOut(0);
			$("#publications").fadeIn(700);
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


// tell them to click if they don't do anything for 5 seconds
// setInterval(function(){ alert("Hello"); }, 3000);
