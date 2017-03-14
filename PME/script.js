
$(document).scroll(function() {
  $('#bar').css({'background-position': '0% ' + ($('body').scrollTop()/$(document).height())*100 + '%'});
});


/*
$(".lorem").html("Greg exists...barely.")

var lorem = "rem cursus varius. Curabitur porttitor lacinia dictum."


Etiam et ipsum ultricies, blandit leo sed, viverra eros. Fusce non dapibus erat. Duis eu est odio. Donec eros turpis, tempor at ante eu, tristique dapibus nulla. Integer eget consequat nunc.
	Mauris a nibh elementum, semper tellus eu, ultrices lacus. Praesent consectetur magna ante, vel cursus diam convallis sed. Donec condimentum, eros a convallis tincidunt, eros leo posuere nisl, ultricies vulputate augue augue ut lorem. Aenean scelerisque neque at lacus eleifend, nec lacinia arcu faucibus. Sed eros lacus, mollis porttitor fermentum non, tempus et mauris. Aenean finibus ligula eu diam lacinia mollis. Nullam in dolor eros. Phasellus et tortor ex. Etiam odio est, vestibulum non turpis non, tincidunt volutpat tortor. Aliquam erat volutpat. Nunc fermentum laoreet sem, vitae rhoncus nulla venenatis non. Sed placerat fringilla risus a gravida. Fusce eu tempor risus.
	Morbi viverra convallis metus et vestibulum. Nunc suscipit, odio id egestas cursus, ligula libero viverra orci, at ultrices est purus sed leo. Pellentesque malesuada lacus at commodo rutrum. Cras consequat et metus ac pharetra. Aenean non augue nec mauris pulvinar bibendum quis in purus. Mauris euismod turpis eget ex rhoncus lacinia. Proin ut tincidunt risus. Cras feugiat dui eget blandit dictum. Curabitur quis ipsum non lectus rhoncus facilisis et id mauris. Vestibulum eget felis erat. In iaculis elit et nulla scelerisque lacinia.
	Sed a porta enim. Nullam efficitur condimentum quam, eget ornare nulla congue luctus."
*/