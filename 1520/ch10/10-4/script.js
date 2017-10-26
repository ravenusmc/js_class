/*  JavaScript 6th Edition
    Chapter 10
    Hands-on Project 10-4

    Author: Mike Cuddy
    Date:   10/26/2017

    Filename: script.js
*/

"use strict";

var waitForUser;

function geoTest() {

  waitForUser = setTimeout(fail, 10000);

  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(createMap, fail);
  }else {
    fail();
  }
}

function createMap(position) {
  clearTimeout(waitForUser);
  var Lat = position.coords.latitude;
  var Lng = position.coords.longitude;
  var mapOptions = {
    center: new google.maps.LatLng(Lat, Lng),
    zoom: 10
  };
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
} 

function fail() {
  document.getElementById('map').innerHTML = 'Unable to access your current location';
}
