console.log("script.js");

alert("markagrios.net's marvelous makeover is taking place so bear with me as I rebuild my website over the next few weeks.");

$(".about").click(
	function() {
		$("#projects-content").fadeOut(0);
		$("#sayhi-content").fadeOut(0);
		$("#about-content").fadeToggle(700);
		$(".lookdown").fadeIn(700);
	}
);

$(".projects").click(
	function() {
		$("#about-content").fadeOut(0);
		$("#sayhi-content").fadeOut(0);
		$("#projects-content").fadeToggle(700);
		$(".lookdown").fadeIn(700);
	}
);

$(".sayhi").click(
	function() {
		$("#about-content").fadeOut(0);
		$("#projects-content").fadeOut(0);
		$("#sayhi-content").fadeToggle(700);
		$(".lookdown").fadeIn(700);
	}
);