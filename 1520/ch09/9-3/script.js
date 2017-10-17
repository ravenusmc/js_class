// Hands-on Project 9-3
// Mike Cuddy
// 10/16/2017

//PLEASE NOTE-THIS CODE WORKS IN FIREFOX BUT NOT SURE IF IT WAS WORKING IN CHROME. 
//https://stackoverflow.com/questions/15385641/javascript-code-for-cookie-not-working-in-chrome

'use strict';

function processCookie() {
  if (document.getElementById("rememberinput").checked) {
    document.cookie = "username=" + document.getElementById("usernameinput").value;
  }else {
    var expiresDate = new Date();
    console.log(expiresDate);
    expiresDate.setDate(expiresDate.getDate() -7);
    document.cookie = "username=null; expires=" + expiresDate.toUTCString();
  }
  
}

function populateInfo() {
  debugger;
  if (document.cookie){
    var uname = document.cookie;
    uname = uname.substring(uname.lastIndexOf("=") +1);
    document.getElementById("usernameinput").value = uname;
  }
}

function handleSubmit(evt) {
  if (evt.preventDefault) {
    evt.preventDefault();
  }else {
    evt.returnValue = false;
  }
  debugger;
  processCookie();
  document.getElementsByTagName('form')[0].submit();
}

function createEventListener(){
  var loginForm = document.getElementsByTagName("form")[0];
  if (loginForm.addEventListener){
    loginForm.addEventListener("submit", handleSubmit, false);
  }else if (loginForm.attachEvent){
    loginForm.attachEvent("onsubmit", handleSubmit);
  }
}

function setUpPage(){
  populateInfo();
  createEventListener();
}

if (window.addEventListener){
  window.addEventListener("load", setUpPage, false);
}else if (window.attachEvent){
  window.attachEvent("onload", setUpPage);
}