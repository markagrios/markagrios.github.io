console.log("script.js");

function get_by_class(this_class) {
  var c = document.getElementsByClassName(this_class);
  return(c)
}


// randomize links
link_options = ["subtle-link", "line-link", "chaotic-link", "gradient-link", "move-link"];
links = get_by_class("link");

for (i=0;i<links.length;i++) {
  choice = Math.floor(Math.random()*(link_options.length));
  links[i].classList.add(link_options[choice]);
}


/******* Cool Scrolling Bar on Socket.io ********/
bar_pics = ["dekooning1.jpg", "dekooning2.jpg", "dekooning3.jpg"];
choice = Math.floor(Math.random()*(bar_pics.length));
$('#bar').css({"background": "url(img/" + bar_pics[choice] + ")"});

$(document).scroll(function() {
  $('#bar').css({'background-position': '0% ' + ($('body').scrollTop()/$(document).height())*100 + '%'});
})
