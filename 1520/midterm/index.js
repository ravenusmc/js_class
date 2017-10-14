//This file will hold all of the javascript code for the midterm project. 

//Global Variables 
numbers = []; //This array will hold the numbers. 

//This funcion will ensure that the users enter a number. 
function validation(value, numbers, num){
  if (isNaN(value)){
    alert('Please enter a number on line ' + num);
  }else {
    numbers.push(value);
  }
}

//This function is what will get the numbers from the input, add them together and then 
//display them on the page. 
function addNumbers() {

  //Here I am getting the numbers from the user input and placing each number into an array.
  one = Number(document.getElementById('num_one').value);
  num = 1;
  validation(one, numbers, num);
  two = Number(document.getElementById('num_two').value);
  num = 2;
  validation(two, numbers, num);
  three = Number(document.getElementById('num_three').value);
  num = 3;
  validation(three, numbers, num);
  four = Number(document.getElementById('num_four').value);
  num = 4;
  validation(four, numbers, num);
  five = Number(document.getElementById('num_five').value);
  num = 5;
  validation(five, numbers, num);

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

}


