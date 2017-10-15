//Mike Cuddy, 10/15/2017
//Hands-on Practice 9-1

'use strict';

function populateInfo() {
  if (location.search){
    var greeting = location.search;
    greeting = greeting.replace("+", " ");
    greeting = greeting.substring(greeting.lastIndexOf("=") + 1);
    document.getElementById('greetingtext').innerHTML = decodeURIComponent(greeting);
  }
}

if (window.addEventListener){
  window.addEventListener("load", populateInfo, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", populateInfo)
}
