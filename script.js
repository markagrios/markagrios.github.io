console.log("script.js");


var aclick = false;
var pclick = false;
var sclick = false;

$(".about").click(
	function() {
		if(aclick == true) {
			return;
		}

		if(aclick == false) {
			$("#projects-content").fadeOut(0);
			$("#sayhi-content").fadeOut(0);
			$("#about-content").fadeToggle(700);
			//$(".lookdown").fadeIn(700);

			aclick = true;
			pclick = false;
			sclick = false;
		}



	}
);

$(".projects").click(
	function() {
		if(pclick == true) {
			return;
		}

		if(pclick == false) {
			$("#about-content").fadeOut(0);
			$("#sayhi-content").fadeOut(0);
			$("#projects-content").fadeToggle(700);
			//$(".lookdown").fadeIn(700);

			aclick = false;
			pclick = true;
			sclick = false;
		}
	}
);

$(".sayhi").click(
	function() {
		if(sclick == true) {
			return;
		}

		if(sclick == false) {
			$("#about-content").fadeOut(0);
			$("#projects-content").fadeOut(0);
			$("#sayhi-content").fadeToggle(700);
			//$(".lookdown").fadeIn(700);

			aclick = false;
			pclick = false;
			sclick = true;
		}
	}
);

$("#oldprojects").click(
	function() {
		if(sclick == false) {
			$("#oldprojects-content").fadeToggle(700);
		}
	}
);
