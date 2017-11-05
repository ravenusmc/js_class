/* 
  Author: Mike Cuddy
  Date started: 11/4/2017
  
  Description: This file will contain the work for Mike Cuddy's JS class final project. 
*/

//Global Variables 
order = {
  firstName:  '',
  lastName: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  thin: 0,
  Do: 0,
  lemon: 0, 
  sand: 0,
  choc: 0
};

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

//This function will collect all of the data when the user hits the submit button. 
function submit() {

    //pulling the values for the first and last names. 
    firstName = document.getElementById('firstName').value;
    lastName = document.getElementById('lastName').value;

    //This conditional statement will get the shipment address based on whether or not the 
    //radio button is checked or not. 
    if (document.getElementById('shippingBox').checked){
        address = document.getElementById('ship_address').value;
        city = document.getElementById('ship_city').value;
        state = document.getElementById('ship_state').value;
        zip = document.getElementById('ship_zip').value;
    }else {
        address = document.getElementById('address').value;
        city = document.getElementById('city').value;
        state = document.getElementById('state').value;
        zip = document.getElementById('zip').value;
    }

    //Here I get the amount of each type of cookie. 
    var thin = document.getElementById('thin').value;
    var Do = document.getElementById('do').value;
    var lemon = document.getElementById('lemon').value;
    var sand = document.getElementById('sand').value;
    var choc = document.getElementById('choc').value;


    order.firstName = firstName;
    order.lastName = lastName;
    order.address = address;
    order.city = city;
    order.state = state;
    order.zip = zip;
    order.thin = thin;
    order.Do = Do;
    order.lemon = lemon;
    order.sand = sand;
    order.choc = choc; 

    console.log(order.firstName);
    console.log(order.lastName);
    console.log(order.address);
    console.log(order.city);
    console.log(order.state);
    console.log(order.zip);
    console.log(order.thin);
    console.log(order.Do);
    console.log(order.lemon);
    console.log(order.sand);
    console.log(order.choc);

}