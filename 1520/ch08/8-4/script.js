//Hands-on Project 8-4
//Mike Cuddy
//10/10/2017
//script.js

'use strict';

var list = [];

function generateList() {

  var listItems = document.getElementsByTagName("li");

  for (var i = listItems.length - 1; i >= 0; i--) {

    document.getElementsByTagName("ol")[0].removeChild(listItems[i]);

  }

  for (var i = 0; i < list.length; i++){

    //This block of code makes the items in the array appear on the page.
    var newItem = "<span class='first'>first</span>" + list[i];
    var newListItem = document.createElement("li");
    newListItem.innerHTML = newItem;
    document.getElementsByTagName('ol')[0].appendChild(newListItem); //issue

    var firstButtons = document.querySelectorAll('.first');
    var lastFirstButton = firstButtons[firstButtons.length - 1];

    if (lastFirstButton.addEventListener){
      lastFirstButton.addEventListener('click', moveToTop, false);
    } else if (lastFirstButton.attachEvent) {
      lastFirstButton.attachEvent("onclick", moveToTop);
    }

  }
};

function addItem(){
  var newItem = document.getElementById('newItem');
  list.push(newItem.value);
  newItem.focus();
  newItem.value = "";
  generateList();
}

function moveToTop(evt) {
  if (evt === undefined){
    evt = window.event;
  }

  var callerElement = evt.target || evt.srcElement;
  var listItems = document.getElementsByTagName("li");
  var parentItem = callerElement.parentNode;
  for (var i = 0; i < list.length; i++){
    if (parentItem.innerHTML.search(list[i]) !== -1) {
      var itemToMove = list.splice(i, 1);
      list.unshift(itemToMove);
    }
  }

  generateList();
}

//Event listener for the button. 
function createEventListener() {

  var addButton = document.getElementById('button');
  if (addButton.addEventListener){
    addButton.addEventListener("click", addItem, false);
  } else if (addButton.attachEvent) {
    addButton.attachEvent("onclick", addItem);
  }
}

//This code is executed when the page loads.
if (window.addEventListener) {
  window.addEventListener("load", createEventListener, false);
}else if (window.attachEvent){
  window.attachEvent("onload", createEventListener);
}




































