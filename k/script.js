console.log("script.js");


var i = 0;
var txt = ' /keɪʔ • sanbɹg/';
var wait = 200;
var speed = 70;

function type() {
  console.log(i)
  if (i < txt.length) {
    document.getElementById("k").innerHTML += txt.charAt(i);
    i++;
    setTimeout(type, speed);
  }
}
