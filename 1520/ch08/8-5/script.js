//Hands-on Project 8-5
//Mike Cuddy
//10/11/2017
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
    //Creating the span element that will contain what the user typed in
    var newItem = "<span class='first'>first</span>" + "<span class='last'>last</span>" + list[i];
    //Creating an li node
    var newListItem = document.createElement("li");
    console.log(newListItem)
    //attaching the text to the node
    newListItem.innerHTML = newItem;
    //appending the node to the screen
    document.getElementsByTagName('ol')[0].appendChild(newListItem); //issue appears here.


    var firstButtons = document.querySelectorAll('.first');
    var lastFirstButton = firstButtons[firstButtons.length - 1];

    var lastButtons = document.querySelectorAll('.last');
    var lastLastButton = lastButtons[lastButtons.length -1];
    

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




































