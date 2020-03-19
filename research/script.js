console.log("script.js");

function get_by_class(this_class) {
  var c = document.getElementsByClassName(this_class);
  return(c)
}


// randomize links
link_options = ["subtle-link", "line-link", "flashy-link"];
links = get_by_class("link");

for (i=0;i<links.length;i++) {
  choice = Math.floor(Math.random()*(link_options.length));
  links[i].classList.add(link_options[choice]);
}


// console.log(get_by_class("content"))
// get_by_class("content")
