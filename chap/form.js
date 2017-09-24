"use strict";

//Global variables
var twentyNine = document.createDocumentFragment();
var thirty = document.createDocumentFragment();
var thirtyOne = document.createDocumentFragment();

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
  }else if (selectedMonth === "1" || selectedMonth === "3" || selectedMonth === "5" || selectedMonth === "7" || 
    selectedMonth === "10" || selectedMonth === "12"){
    deliveryDay.appendChild(thirtyOne.cloneNode(true));
  }

};

function removeSelectDefaults() {
  var emptyBoxes = document.getElementsByTagName("select");

  for (var i = 0; i < emptyBoxes.length; i++){
    emptyBoxes[i].selectedIndex = -1;
  }
};

function autocheckCustom() {
  var messageBox = document.getElementById('customText');

  if (messageBox.vale !== "" && messageBox.value !== messageBox.placeholder){
    document.getElementById('custom').checked = "checked";
  }
}

function createEventListeners() {
  var deliveryMonth = document.getElementById("delivMo");
  if (deliveryMonth.addEventListener){
    deliveryMonth.addEventListener("change", updateDays, false);
  }else if (deliveryMonth.attachEvent){
    deliveryMonth.attachEvent('onchange', updateDays);
  }

  var deliveryYear = document.getElementById('delivYr');
  if (deliveryYear.addEventListener){
    deliveryYear.addEventListener('Change', updateDays, false)
  }else if (deliveryYear.attachEvent){
    deliveryYear.attachEvent("onchange", updateDays);
  }

  var messageBox = document.getElementById('customText');
  if (messageBox.addEventListener){
    messageBox.addEventListener('blur', autocheckCustom, false)
  }else if (messageBox.attachEvent){
    messageBox.attachEvent('onblur', autocheckCustom);
  }
}

function setUpPage() {
  removeSelectDefaults();
  setupDays();
  createEventListeners();
}

if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false);
}else if (window.attachEvent){
  window.attachEvent("onload", setUpPage);
}