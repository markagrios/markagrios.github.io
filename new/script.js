console.log("script.js");

$("#sig_black").mouseenter(
	function() {
			$("#sig_c").fadeIn(200);
			$("#sig_m").fadeIn(400);
			$("#sig_y").fadeIn(600);
	}
);

$("#sig_black").mouseleave(
	function() {
			$("#sig_c").fadeOut(600);
			$("#sig_m").fadeOut(400);
			$("#sig_y").fadeOut(200);
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
