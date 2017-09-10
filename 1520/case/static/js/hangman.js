//This file will contain all of my code for the hangman game 

//Global variables for use in the program. 
var gameStart = false;
var word; 
var right_count = 0; 
var bodyPartCount = 0;
var wordCount = 6;


//This function will start the game and choose a word at random. 
function chooseWord(){

  //This is only to alert the user that the game has started. 
  alert('Game Started! Word Choosen! Save the man!');

  //This array contains the words that will be used in the program. They are all 6 letter 
  //words because the hanging man has six body parts. 
  wordList = ["Mike", "abroad", "active", "afraid", "eleven", "lawyer", "prison"];

  //This variable here will be what will choose a random value from the wordList array.
  random_value = Math.floor((Math.random() * 6) + 1);

  //I am using the random_value to pull a word out of the array. 
  word = wordList[random_value];

  //I am only showing the word in production mode. 
  // alert(word)

  //This variable will ensure that the user starts the game.
  gameStart = true;
}

//This function will control what the user enters into the program. It is really the main function of the 
//program. Every time the user submits a letter, this function will see if the letter is valid or not, 
//and also see if the user has won the game. 
function getValue(word){

  if (gameStart && right_count <= 5){

    //I take the main word and put it into an array using the split method. 
    wordArray = word.split("");

    //These array's will hold all of the positions for where a letter will appear
    //When it is the wrong answer. The wrong_count will increment by one 
    wrong = ['one', 'two', 'three', 'four', 'five', 'six'];
    right = ['one', 'two', 'three', 'four', 'five', 'six'];

    //This array will hold all of the body parts for the hanging man. I will use the values in 
    //this array to change the id of a body part so that it appears on the screen 
    //when the player makes a mistake. 
    bodyParts = ['head', 'body', 'l_arm', 'r_arm', 'r_leg', 'l_leg'];

    //This is getting the value that the user enters. 
    let target = document.querySelector('#guessValue').value;

    //Conditional statement to determine when the character made a right or wrong choice. 
    if (word.includes(target)){

      //Here I just let the user know that they guessed a right letter. 
      alert('Right Guess!');

      //I use those for look to not only place values on the screen if they are in the array but 
      //also to place values if a word has a duplicate. 
      right_count = correctGuess(target, wordArray, right, right_count);

      //This function will check to see if the player won. 
      win(right_count, word);

    }else {
      alert('Wrong Guess!')

      //This line is what will place the wrong letter in the used areas location. 
      document.getElementById(wrong[bodyPartCount]).innerHTML = target;

      //This line I make one of the body parts appear on the screen. 
      document.getElementById(bodyParts[bodyPartCount]).setAttribute("style", "display: inline;");

      if (bodyPartCount >= 2 && bodyPartCount < 4){
        document.getElementById('used_word_area').setAttribute("style", "background-color: yellow;");
      }else if (bodyPartCount >= 4){
        document.getElementById('used_word_area').setAttribute("style", "background-color: orange;");
      }else if (bodyPartCount >= 5){
        document.getElementById('used_word_area').setAttribute("style", "background-color: red;");
      }

      //This variable essentially keeps track of each wrong guess that the player makes. 
      bodyPartCount += 1;

      //Calling the function to alert the user that they lost. 
      lose(bodyPartCount);
    }
  }else {
    alert('You must hit game start button!');
  }
}

/////// FUNCTIONS TO HELP OUT THE MAIN CODE HERE ////////////

//This function will reset the game if clicked.
function reset(){
  //This code will reload the page. That is how my reset button works! 
  location.reload();
}

//This function will alert the player that they lost. 
function lose(bodyPartCount){
  if (bodyPartCount == 6){
    alert('You Lose!');
    alert('The game will now reset');
    location.reload();
  }
}

//This function will determine where the correct letters will be placed. 
function correctGuess(target, wordArray, right, right_count){
  for (var i = 0; i < wordArray.length; i++){
    if (wordArray[i] == target){
      document.getElementById(right[i] + "_correct").innerHTML = target;
      right_count += 1; 
    }
  }
  return right_count;
}

//This function will tell the player that they won. 
function win(right_count, word){
  if (right_count >= 6){
      alert('You won and saved the hanging man!!!');
      alert('The word was: ' + word);
      alert('The game will now reset!');
      location.reload();
  }
}




//Scrap Code-this is code that I was using in my project at one point but decided to take it out. 

//This function will control what the user enters into the program. 
// document.querySelector('#enteredValue').addEventListener('click', function(){

//   let target = document.querySelector('#guessValue').value;

//   count = 0

//   if (target !=  'b'){
//     document.getElementById("one").innerHTML = target;
//   }

//   alert(count);
//   count += 1;

// })

  // debugger;
  // if (target != 'a'){
  //   document.getElementById("one").innerHTML = target;
  // }else if (target != 'b'){
  //   document.getElementById("two").innerHTML = target;
  // }


// usedLetters = [];

// usedLetters.push(letterSpot);

// if (usedLetters.includes(letterSpot)){
//   alert('you have used that value!');
// }

//I then user the variable letterSpot to place the wrong letter in the correct location. 
// document.getElementById(right[letterSpot] + "_correct").innerHTML = target;


//I look for the index of the letter in the array. 
//letterSpot = wordArray.indexOf(target);
