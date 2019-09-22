console.log("script.js");

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

// $(".link").hover(
// 	function() {
// 			$(".link").innerHTML.style.color = 'blue';
// 	}
// );
