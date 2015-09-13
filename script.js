	function startTime() {
	    var today=new Date();
	    var h=today.getHours() % 12;
	    if(h == 0) {h = 12;}
	    var m=today.getMinutes();
	    m = checkTime(m);
	    document.getElementById('time').innerHTML = h+":"+m;
	    var t = setTimeout(function(){startTime()},500);
	}
	
	function checkTime(i) {
	    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
	    return i;
	}
	
	<!-- DOCK BUTTONS -->
	$("#aboutme").click(
		function() {
			$("#pagescontent").fadeOut(0);
			$("#sayhibtncontent").fadeOut(0);
			$("#projectscontent").fadeOut(0);
			$("#aboutmecontent").slideToggle(400);
		}
	);
	$("#pages").click(
		function() {
			$("#aboutmecontent").fadeOut(0);
			$("#sayhibtncontent").fadeOut(0);
			$("#projectscontent").fadeOut(0);
			$("#pagescontent").slideToggle(400);
		}
	);
	$("#sayhi").click(
		function() {
			$("#aboutmecontent").fadeOut(0);
			$("#pagescontent").fadeOut(0);
			$("#projectscontent").fadeOut(0);
			$("#sayhibtncontent").slideToggle(400);
		}
	);
	$("#projects").click(
		function() {
			$("#aboutmecontent").fadeOut(0);
			$("#pagescontent").fadeOut(0);
			$("#sayhibtncontent").fadeOut(0);
			$("#projectscontent").slideToggle(400);
		}
	);
	<!-- ------------ -->
	
	<!------SAY HI------>
	$("#inboxicon").mouseover(
		function() {
			$("#mygithub").hide(0);
			$("#mymusic").hide(0);
			$("#starcat").hide(0);
			$("#myemail").fadeIn();
		}

	)
	.mouseleave(
		function() {
			$("#myemail").hide();
		}
	);
	$("#inboxicon").click(
		function() {
			$("#sayhibtncontent").slideToggle();
		}
	);
	$("#githublogo").mouseover(
		function() {
			$("#myemail").hide(0);
			$("#mymusic").hide(0);
			$("#starcat").hide(0);
			$("#mygithub").fadeIn();
		}

	)
	.mouseleave(
		function() {
			$("#mygithub").hide();
		}
	);
	$("#musicicon").mouseover(
		function() {
			$("#myemail").hide(0);
			$("#mygithub").hide(0);
			$("#starcat").hide(0);
			$("#mymusic").fadeIn();
		}

	)
	.mouseleave(
		function() {
			$("#mymusic").hide();
		}
	);
	$("#starcatlogo").mouseover(
		function() {
			$("#myemail").hide(0);
			$("#mygithub").hide(0);
			$("#mymusic").hide(0);
			$("#starcat").fadeIn();
		}

	)
	.mouseleave(
		function() {
			$("#starcat").hide();
		}
	);
	<!-- ------------ -->
	<!-- PAGES BUTTON -->
	var sclick = false;
	var aclick = false;
	$("#artsbtn").click(
		function() {
			$("#sciences").fadeOut(0);
			$("#arts").slideToggle(300);
			if(aclick == false) {
				document.getElementById('artsbtn').innerHTML = "Arts &#8673;";
				aclick = true;
			} else {
				document.getElementById('artsbtn').innerHTML = "Arts &#8675;";
				aclick = false;				
			}
		}
	);
	$("#sciencesbtn").click(
		function() {
			$("#arts").fadeOut(0);
			$("#sciences").slideToggle(300);
			if(sclick == false) {
				document.getElementById('sciencesbtn').innerHTML = "Sciences &#8673;";
				sclick = true;
			} else {
				document.getElementById('sciencesbtn').innerHTML = "Sciences &#8675;";
				sclick = false;				
			}
		}
	);
	<!-- ------------ -->
	<!-- TOPIC BUTTONS -->
	$("#topic-design").click(
		function() {
			$("#page-design").slideToggle(300);
		}
	);
	$("#topic-hatemath").click(
		function() {
			$("#page-hatemath").slideToggle(300);
		}
	);	
	$("#topic-starcat").click(
		function() {
			$("#page-starcat").slideToggle(300);
		}
	);	

	<!-- ------------ -->
	
