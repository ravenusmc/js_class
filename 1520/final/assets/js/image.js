//Declaring variables
var sliderImages = document.querySelectorAll('.slide');
var arrowLeft = document.querySelector('#arrow-left');
var arrowRight = document.querySelector('#arrow-right');
var current = 0; 

//Clear all images 
function reset() {

  for(var i = 0; i < sliderImages.length; i++){
    sliderImages[i].style.display = 'none';
  }
}

//Starts slider
function startSlide() {
  reset();
  sliderImages[0].style.display = 'block';
}

startSlide();

window.onload = function(){
   setInterval(function(){
      reset();
      if (current === 0){
        sliderImages[current].style.display = 'block';
        current++;
      }else if (current === 1){
        sliderImages[current].style.display = 'block';
        current++;
      }else if (current === 2){
        sliderImages[current].style.display = 'block';
        current = 0;
      }

   }, 4000);
};



// old code using arrows
// //show previous 
// function slideLeft() {
//   reset();
//   sliderImages[current - 1].style.display = 'block';
//   current--;
// }

// //show previous 
// function slideRight() {
//   reset();
//   sliderImages[current + 1].style.display = 'block';
//   current++;
// }

//Event Listeners for arrows
// arrowLeft.addEventListener('click', function(){
//   if(current === 0){
//     current = sliderImages.length;
//   }
//   slideLeft();
// });

// arrowRight.addEventListener('click', function(){
//   if(current === sliderImages.length -1){
//     current = -1;
//   }
//   slideRight();
// });




