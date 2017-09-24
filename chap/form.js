"use strict";

//Global variables
var twentyNine = document.createDocumentFragment();
var thirty = document.createDocumentFragment();
var thiryOne = document.createDocumentFragment();

function setupDays() {
  var dates = document.getElementById('delivDy').getElementsByTagName('option');
  twentyNine.appendChild(dates[28].cloneNode(true));
  //add 29th
  thirty.appendChild(dates[28].cloneNode(true));
  thirty.appendChild(dates[29].cloneNode(true));
  //add 29th and 30th
  thirtyOne.appendChild(dates[28].cloneNode(true));
  thirtyOne.appendChild(dates[29].cloneNode(true));
  thirtyOne.appendChild(dates[30].cloneNode(true));
}

function updateDays(){

  var deliveryDay = document.getElementById('delivDy');
  var dates = deliveryDay.getElementsByTagName('option');
  var deliveryMonth = document.getElementById('delivMo');
  var deliveryYear = document.getElementById('delivYr');
  var selectedMonth = deliveryMonth.options[deliveryMonth.selectedIndex].value;

  while (dates[28]){
    deliveryDay.removeChild(dates[28]);
  }

  if (deliveryYear.selectedIndex === -1){
    deliveryYear.selectedIndex = 0;
  }

  if (selectedMonth === "2" && deliveryYear.options[deliveryYear.selectedIndex].value === "2018"){
    deliveryDay.appendChild(twentyNine.cloneNode(true));
  }else if (selectedMonth === '4' || selectedMonth === '6' || selectedMonth === '9' || selectedMonth === '11'){
    deliveryDay.appendChild(thirty.cloneNode(true));
  }else if (selectedMonth === "1" || selectedMonth === "3" || selectedMonth === "5" || selectedMonth ==== "7" || selectedMonth)

}

function removeSelectDefaults() {
  var emptyBoxes = document.getElementsByTagName("select");

  for (var i = 0; i < emptyBoxes.length; i++){
    emptyBoxes[i].selectedIndex = -1;
  }
}

if (window.addEventListener) {
  window.addEventListener("load", removeSelectDefaults, false);
}else if (window.attachEvent){
  window.attachEvent("onload", removeSelectDefaults);
}