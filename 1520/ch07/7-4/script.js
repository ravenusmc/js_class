'use strict';

var delivInfo = {};
var delivSummary = document.getElementById('deliverTo');

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

function previewOrder() {
  processDeliveryInfo();
  document.getElementsByTagName("section")[0].style.display = 'block';
}

document.getElementById('previewBtn').onclick = previewOrder;

// if (window.addEventListener){
//   window.addEventListener('onclick', previewOrder, false);
// }else if (window.attachEvent){
//   window.attachEvent("onload", previewOrder);
// }

//document.getElementById('previewBtn').addEventListener('click', previewOrder, false);