/*
This file will hold all of the javascript code for the midterm project. 

Author: Mike Cuddy
JS 1520 Midterm Project

Please note that on the HTML I was using the type=number but decided to pull it out. 
Although keeping it may have made this easier!

*/


//Global Variables 
numbers = []; //This array will hold the numbers. 


//This funcion will ensure that the users enter a number. 
function validation(value, numbers, num){
  if (value == ""){
    alert('Please enter a number on line ' + num);
  }else if (isNaN(value)){
    alert('Please enter a number on line ' + num);
  }else {
    value = Number(value);
    numbers.push(value);
  }
}

//This function will ensure that the array has exactly 5 elements in it. 
function arrayShort(){
  alert('You need to enter in five numbers!');
  //Here I clear the array so that it does not contain numbers everytime the submit form is hit. 
  numbers = [];
}

//This function is what will get the numbers from the input, add them together and then 
//display them on the page. 
function addNumbers() {

  //Here I am getting the numbers from the user input and placing each number into an array.
  first = document.getElementById('num_one').value;
  num = 1;
  validation(first, numbers, num);
  second = document.getElementById('num_two').value;
  num = 2;
  validation(second, numbers, num);
  third = document.getElementById('num_three').value;
  num = 3;
  validation(third, numbers, num);
  fourth = document.getElementById('num_four').value;
  num = 4;
  validation(fourth, numbers, num);
  fifth = document.getElementById('num_five').value;
  num = 5;
  validation(fifth, numbers, num);

  if (numbers.length != 5){
    arrayShort()
  }else {

    //This variable will hold the total of all the elements in the array. 
    var total = 0;
    //Using a for loop to sum up the numbers in the array and getting the total
    for (var i = 0; i < numbers.length; i++){
      total = numbers[i] + total;
    }

    //Getting the id for where the total will be displayed.
    answer = document.getElementById('answer')
    //Setting the total to the innerHTML
    answer.innerHTML = total;

    //These lines will simply display the numbers entered to the screen
    document.getElementById('one').innerHTML = first;
    document.getElementById('two').innerHTML = second;
    document.getElementById('three').innerHTML = third;
    document.getElementById('four').innerHTML = fourth;
    document.getElementById('five').innerHTML = fifth;

    //I use the reset method to set the form back to blank values.
    document.getElementById("form").reset();
  }
}


