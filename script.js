console.log("script.js");

//alert("markagrios.net's marverlous makeover is taking place so bear with me as I rebuild my website over the next few weeks.");

$(".about").click(
	function() {
		$("#about-content").fadeToggle(700);
		$(".lookdown").fadeToggle(700);
	}
);
