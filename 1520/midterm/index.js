//This file will hold all of the javascript code for the midterm project. 

//Global Variables 
numbers = []; //This array will hold the numbers. 

//This function is what will get the numbers from the input, add them together and then 
//display them on the page. 
function addNumbers() {

  //Here I am getting the numbers from the user input and placing each number into an array.
  one = Number(document.getElementById('num_one').value);
  numbers.push(one);
  two = Number(document.getElementById('num_two').value);
  numbers.push(two);
  three = Number(document.getElementById('num_three').value);
  numbers.push(three);
  four = Number(document.getElementById('num_four').value);
  numbers.push(four);
  five = Number(document.getElementById('num_five').value);
  numbers.push(five);

  //This variable will hold the total of all the elements in the array. 
  var total = 0;

  //Using a for loop to sum up the numbers in the array and getting the total
  //debugger;
  for (var i = 0; i < numbers.length; i++){
    total = numbers[i] + total;
  }

  answer = document.getElementById('answer')

  answer.innerHTML = total;

}



// document.querySelector("#submit").addEventListener('click', addNumbers);

//This is the event listener
//Event listener for the button. 
// function createEventListener() {

//   var addButton = document.getElementById('button');
//   if (addButton.addEventListener){
//     addButton.addEventListener("click", addNumbers, false);
//   } else if (addButton.attachEvent) {
//     addButton.attachEvent("onclick", addNumbers);
//   }
// }


// //This code is executed when the page loads.
// if (window.addEventListener) {
//   window.addEventListener("load", createEventListener, false);
// }else if (window.attachEvent){
//   window.attachEvent("onload", createEventListener);
// }
