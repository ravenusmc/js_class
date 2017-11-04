/* 
  Author: Mike Cuddy
  Date started: 11/4/2017
  
  Description: This file will contain the work for Mike Cuddy's JS class final project. 
*/

//Global Variables 
user = {};

//This function will fire when the radio button is checked to fill in the shipping address area. 
//If the box is checked, 
function fillShipping(){

  //Declaring variables 
  var address = document.getElementById('address').value;
  var city = document.getElementById('city').value;
  var state = document.getElementById('state').value;
  var zip = document.getElementById('zip').value;

  var shipAddress = document.getElementById('ship_address');
  var shipCity = document.getElementById('ship_city');
  var shipState = document.getElementById('ship_state');
  var shipZip = document.getElementById('ship_zip');

  //Conditional statement as to what the radio button is checked or not. 
  if (document.getElementById('shippingBox').checked){

    shipAddress.value = address;
    shipCity.value = city;
    shipState.value = state;
    shipZip.value = zip;

  }else {
    shipAddress.value = "";
    shipCity.value = "";
    shipState.value = "";
    shipZip.value = "";
  }
}