/*  JavaScript 6th Edition
    Chapter 10
    Hands-on Project 10-5

    Author: Mike Cuddy
    Date:   10/26/2017

    Filename: script.js


*/

"use strict";

var waitForUser;

function setUpPage(){

  var buttons = document.getElementById('cities');
  buttons = buttons.getElementsByTagName("div");

  debugger;
  
  buttons[0].addEventListener("click", function(){
    console.log('Yay');
  });

}

function geoTest() {

  waitForUser = setTimeout(fail, 10000);

  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(createMap, fail, {timeout: 10000});
  }else {
    fail();
  }
}

function createMap(position) {

  //Coordinates for cities:
  //Paris, France: 48.866885, 2.348444
  //Beijing, China: 39.918645, 116.376526
  //Rio de Janeiro, Brazil: -22.838703, -43.264965

  clearTimeout(waitForUser);
  if (position.coords) {
    var Lat = position.coords.latitude;
    var Lng = position.coords.longitude;
  }else {
    var city = "Beijing";
    var Lat = 39.918645;
    var Lng = 116.376526;
    document.getElementById('caption').innerHTML = city;
  }

  var mapOptions = {
    center: new google.maps.LatLng(Lat, Lng),
    zoom: 10
  };
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
} 

function fail() {
  document.getElementById('map').innerHTML = 'Unable to access your current location';
}

if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false);
}else if (window.attachEvent){
  window.attachEvent('onload', setUpPage);
}
