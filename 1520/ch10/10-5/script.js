/*  JavaScript 6th Edition
    Chapter 10
    Hands-on Project 10-5

    Author: Mike Cuddy
    Date:   10/26/2017

    Filename: script.js

    PLEASE NOTE: I slightly changed the way that the book described how to do it because the book directions
    got a little confusing. However, my method works and does everything that it is supposed to do. The only 
    bad aspect of the code is that it is not 'DRY' but instead, a little 'WET'. The three functions that I created
    china, france and brazil all do the same thing with only  the coordinates changing. Thus, I could have written
    only one function. I understand that. The old.js file contains my at trying to do it the book way. 
*/

"use strict";

var waitForUser;

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
  var Lat = position.coords.latitude;
  var Lng = position.coords.longitude;

  var mapOptions = {
    center: new google.maps.LatLng(Lat, Lng),
    zoom: 10
  };
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
} 


//This function will fire when the user clicks the china button.
function china() {

    document.getElementById('caption').innerHTML = "Beijing, China";
    clearTimeout(waitForUser);
    var Lat = 39.918645;
    var Lng = 116.376526;

    var mapOptions = {
      center: new google.maps.LatLng(Lat, Lng),
      zoom: 10
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

//This function will fire when the user clicks the France button.
function france() {

    document.getElementById('caption').innerHTML = "Paris, France";
    clearTimeout(waitForUser);
    var Lat = 48.866885; 
    var Lng = 2.348444;

    var mapOptions = {
      center: new google.maps.LatLng(Lat, Lng),
      zoom: 10
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

//This function will fire when the user clicks the Brazil button.
function brazil() {

    document.getElementById('caption').innerHTML = "Rio de Janeiro, Brazil";
    clearTimeout(waitForUser);

    var Lat = -22.838703; 
    var Lng = -43.264965;

    var mapOptions = {
      center: new google.maps.LatLng(Lat, Lng),
      zoom: 10
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function fail() {
  document.getElementById('map').innerHTML = 'Unable to access your current location';
}



