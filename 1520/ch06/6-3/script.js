// JavaScript 6th Edition
// Chapter 6
// Hands-on Project 6-3

// Author: Mike Cuddy
// Date:   9/26/2017

// Filename: index.html

'use strict';

var formValidity = true;

// validate required fields 
function validateRequired(){
  var inputElements = document.querySelectorAll("#contactinfo input");
  var errorDiv = document.getElementById('errorText');
  var elementCount = inputElements.length;
  var requiredValidity = true;
  var currentElement;

  try {
    for (var i = 0; i < elementCount; i++){
      //validate all input elements in fieldset
      currentElement = inputElements[i];
      if (currentElement.value === ""){
        currentElement.style.background = "rgb(255,233,233)";
        requiredValidity = false;
      }else {
        currentElement.style.background = 'white';
      }
    }
    if (requiredValidity === false){
      throw "Please complete all fields.";
    }
    errorDiv.style.display = 'none';
    errorDiv.innerHTML = "";
  }
  catch (msg){
    errorDiv.style.display = "block";
    errorDiv.innerHTML = msg;
    formValidity = false;
  }
}


//This function will advance the cursor to the next space as social is being typed.
function advanceSsn(){
  var ssnFields = document.getElementsByClassName("ssn");
  var currentField = document.activeElement;
  if (currentField.value.length === currentField.maxLength){
    if (currentField === ssnFields[0]){
      ssnFields[1].focus();
    }
    if (currentField === ssnFields[1]){
      ssnFields[2].focus();
    }
    if (currentField === ssnFields[2]){
      document.getElementById('submitBtn').focus();
    }
  }
}

//Create an event listener 
function createEventListeners() {

  var form = document.getElementsByTagName('form')[0];
  if (form.addEventListener){
    form.addEventListener("submit", validateForm, false);
  }else if (form.attachEvent) {
    form.attachEvent("onsubmit", validateForm);
  }

  var ssnFields = document.getElementsByClassName("ssn");
  for (var i = 0; i < ssnFields.length; i++){
    if (ssnFields[i].addEventListener){
      ssnFields[i].addEventListener("input", advanceSsn, false);
    }else if (ssnFields[i].attachEvent){
      ssnFields[i].attachEvent('oninput', advanceSsn);
    }
  }

}

//Validate form
function validateForm(evt){
  if (evt.preventDefault){
    evt.preventDefault(); //Prevent form from submitting
  } else {
    evt.returnValue = false;
  }
  formValidity = true; //Reset value for revalidation
  validateRequired();
  validateNumbers();
  if (formValidity === true){
    document.getElementsByTagName("form")[0].submit();
  }
}

//Validate number fields for older browsers 
function validateNumbers(){
  var numberInputs = document.querySelectorAll("#contactinfo input[type=number]");
  var elementCount = numberInputs.length;
  var numErrorDiv = document.getElementById("numErrorText");
  var numbersValidity = true;
  var currentElement;

  try {
    for (var i = 0; i < elementCount; i++){
      //validate all input types
      currentElement = numberInputs[i];
      if (isNaN(currentElement.value) || (currentElement.value === "")){
        currentElement.style.background = 'rgb(255,233,233';
        numbersValidity = false;
      }else {
        currentElement.style.background = "white";
      }
    }
    if (numbersValidity === false){
      throw "Zip and social security values must be numbers";
    }
    numErrorDiv.style.display = 'none';
    numErrorDiv.innerHTML = "";
  }
  catch(msg){
    numErrorDiv.style.display = "block";
    numErrorDiv.innerHTML = msg;
    formValidity = false;
  }
}

//Run setup functions when page finishes loading 
if (window.addEventListener){
  window.addEventListener("load", createEventListeners, false);
}else if (window.attachEvent){
  window.attachEvent("onload", createEventListeners);
}
