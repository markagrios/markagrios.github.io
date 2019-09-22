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
