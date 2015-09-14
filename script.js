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
	var aboutmeclick = false;
	var pagesclick = false;
	var sayhiclick = false;
	var projectsclick = false;
	$("#aboutme").click(
		function() {
			$("#pagescontent").fadeOut(0);
			$("#sayhibtncontent").fadeOut(0);
			$("#projectscontent").fadeOut(0);
			$("#aboutmecontent").slideToggle(400);
			document.getElementById('pages').innerHTML = "pages";
			document.getElementById('projects').innerHTML = "projects";
			document.getElementById('sayhi').innerHTML = "say hi";

			if(aboutmeclick == false) {
				document.getElementById('aboutme').innerHTML = "about me &#9776;";
				aboutmeclick = true;
				pagesclick = false;
				sayhiclick = false;
				projectsclick = false;
			} else {
				document.getElementById('aboutme').innerHTML = "about me";
				aboutmeclick = false;				
			}			
		}
	);
	$("#pages").click(
		function() {
			$("#aboutmecontent").fadeOut(0);
			$("#sayhibtncontent").fadeOut(0);
			$("#projectscontent").fadeOut(0);
			$("#pagescontent").slideToggle(400);
			document.getElementById('aboutme').innerHTML = "about me";
			document.getElementById('projects').innerHTML = "projects";
			document.getElementById('sayhi').innerHTML = "say hi";
			
			if(pagesclick == false) {
				document.getElementById('pages').innerHTML = "pages &#9776;";
				pagesclick = true;
				aboutmeclick = false;
				sayhiclick = false;
				projectsclick = false;
			} else {
				document.getElementById('pages').innerHTML = "pages";
				pagesclick = false;				
			}
		}
	);
	$("#sayhi").click(
		function() {
			$("#aboutmecontent").fadeOut(0);
			$("#pagescontent").fadeOut(0);
			$("#projectscontent").fadeOut(0);
			$("#sayhibtncontent").slideToggle(400);
			document.getElementById('pages').innerHTML = "pages";
			document.getElementById('projects').innerHTML = "projects";
			document.getElementById('aboutme').innerHTML = "about me";
			
			if(sayhiclick == false) {
				document.getElementById('sayhi').innerHTML = "say hi &#9776;";
				sayhiclick = true;
				aboutmeclick = false;
				sayhiclick = false;
				projectsclick = false;
			} else {
				document.getElementById('sayhi').innerHTML = "say hi";
				sayhiclick = false;				
			}
		}
	);
	$("#projects").click(
		function() {
			$("#aboutmecontent").fadeOut(0);
			$("#pagescontent").fadeOut(0);
			$("#sayhibtncontent").fadeOut(0);
			$("#projectscontent").slideToggle(400);
			document.getElementById('pages').innerHTML = "pages";
			document.getElementById('aboutme').innerHTML = "about me";
			document.getElementById('sayhi').innerHTML = "say hi";

			if(projectsclick == false) {
				document.getElementById('projects').innerHTML = "projects &#9776;";
				projectsclick = true;
				pagesclick = false;
				sayhiclick = false;
				aboutmeclick = false;				
			} else {
				document.getElementById('projects').innerHTML = "projects";
				projectsclick = false;				
			}
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
	
