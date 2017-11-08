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
  choc: 0,
  total: 0
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
  if (document.getElementById('same').checked){

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

//This function will return the total cost of the order. 
function calculateCost(order) {

    //Declaring a variable to hold the order total amount.
    var orderTotal = 0;

    //Here I'm getting the total number of boxes for all the cookies. 
    boxesTotal = order.thin + order.Do + order.lemon + order.sand + order.choc; 

    //Calculating order total based on number of boxes ordered since that will depend
    //on shipping costs.
    if (boxesTotal < 10){
      orderTotal = boxesTotal * 3.5;
      //calculating for shipping 
      shippingCost = orderTotal * .05;
      orderTotal = orderTotal + shippingCost;
    }else if (boxesTotal >= 10){
      orderTotal = boxesTotal * 3.5;
    }

    order.total = orderTotal;

    return order;
}

//This function will collect all of the data when the user hits the submit button. 
function submit() {

    //pulling the values for the first and last names. 
    firstName = document.getElementById('firstName').value;
    lastName = document.getElementById('lastName').value;

    //This conditional statement will get the shipment address based on whether or not the 
    //radio button is checked or not. 
    if (document.getElementById('same').checked){
        address = document.getElementById('address').value;
        city = document.getElementById('city').value;
        state = document.getElementById('state').value;
        zip = document.getElementById('zip').value;
    }else if (document.getElementById('different').checked) {
        address = document.getElementById('ship_address').value;
        city = document.getElementById('ship_city').value;
        state = document.getElementById('ship_state').value;
        zip = document.getElementById('ship_zip').value;
    }

    //Here I get the amount of each type of cookie. I change the data type to a number
    //to ensure that I have the right data type.
    var thin = Number(document.getElementById('thin').value);
    var Do = Number(document.getElementById('do').value);
    var lemon = Number(document.getElementById('lemon').value);
    var sand = Number(document.getElementById('sand').value);
    var choc = Number(document.getElementById('choc').value);

    //Here I set each value to the order object.
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

    order = calculateCost(order);

    //Here I bring back a div container that is currently hidden.
    document.getElementById("order_info_div").style.display = 'block';

    //I display all the user information. 
    document.getElementById('orderName').innerHTML = order.firstName + ' ' + order.lastName;
    document.getElementById('orderAddress').innerHTML  = order.address;
    document.getElementById('orderCity').innerHTML  = order.city;
    document.getElementById('orderState').innerHTML  = order.state;
    document.getElementById('orderZip').innerHTML  = order.zip;
    document.getElementById('orderTotal').innerHTML  = order.total;
}
