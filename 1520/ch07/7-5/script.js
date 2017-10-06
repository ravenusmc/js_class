//Code for Hands on Project 7-5

'use strict';

var delivInfo = {};
var delivSummary = document.getElementById('deliverTo');
var foodInfo = {};
var foodSummary = document.getElementById('order');

//This function adds the value of each input field to the delivInfo object as a property value.
function processDeliveryInfo() {

  var prop; 

  delivInfo.name = document.getElementById('nameinput').value;
  delivInfo.addr = document.getElementById('addrinput').value;
  delivInfo.city = document.getElementById('cityinput').value;
  delivInfo.email = document.getElementById('emailinput').value;
  delivInfo.phone = document.getElementById('phoneinput').value;

  for (prop in delivInfo) {
    delivSummary.innerHTML += "<p>" + delivInfo[prop] + "</p>";
  }
}

//This function adds the value of each input field to the foodInfo object as a property value. 
function processFood() {

  var prop;
  var crustOpt = document.getElementsByName('crust');
  var toppings = 0;
  var toppingsBoxes = document.getElementsByName('toppings');
  var instr = document.getElementById('instructions').value;

  //Getting the value for the crust. 
  if (crustOpt[0].checked) {
    foodInfo.crust = "Thin Crust";
  }else {
    foodInfo.crust = "Deep Dish";
  }

  //Getting the value for the pizza size.
  var size = document.getElementById('size');
  size = size.options[size.selectedIndex].value;
  foodInfo.size = size;

  //Geting the values for the pizza toppings
  for (var i = 0; i < toppingsBoxes.length; i++){

    if (toppingsBoxes[i].checked) {
      toppings += 1;
      foodInfo["topping" + i] = toppingsBoxes[i].value;
    } 
  }

  //Getting the value for the special instructions
  if (instr != " " ) {
    foodInfo.instructions = instr;
  }
  
  //Displaying the information to the HTML screen
  foodSummary.innerHTML += "<p><span>Crust</span>: " + foodInfo.crust + "</p>";
  foodSummary.innerHTML += "<p><span>Size</span>: " + foodInfo.size + "</p>";
  foodSummary.innerHTML += "<p><span>Topping(s)</span>: " + "</p>";

  foodSummary.innerHTML += "<ul>";
  for (var i = 0; i < 6; i++){
    if (foodInfo["topping" + i]){
      foodSummary.innerHTML += "<li>" + foodInfo["topping" + i] + "</li>";
    }
  }
  foodSummary.innerHTML += "<ul>";

  foodSummary.innerHTML += "<p><span>Instructions</span>: " + foodInfo.instructions + "</p>";
}

function previewOrder() {
  processDeliveryInfo();
  processFood();
  document.getElementsByTagName("section")[0].style.display = 'block';
}

document.getElementById('previewBtn').onclick = previewOrder;



///// SCRAP CODE ///////

//var topArray = [];

// if (toppingsBoxes[0].checked){
//     topArray[0] = toppingsBoxes[0].value;
//     foodInfo.topping = topArray;
//     //foodInfo.topping = toppingsBoxes[0].value;
// }

// if (toppingsBoxes[1].checked){
//     topArray[1] = toppingsBoxes[1].value;
//     foodInfo.topping = topArray;
//   //foodInfo.topping = toppingsBoxes[1].value;
// }


// if (window.addEventListener){
//   window.addEventListener('onclick', previewOrder, false);
// }else if (window.attachEvent){
//   window.attachEvent("onload", previewOrder);
// }

//document.getElementById('previewBtn').addEventListener('click', previewOrder, false);

