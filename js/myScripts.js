//jquery script
//
$(document).ready(function(){
  $('#previous').on('click', function(){
    $('#im_' + currentImage).stop().fadeOut(1);
    decreaseImage();
    $('#im_'+currentImage).stop().fadeIn(1);
  });
  $('#next').on('click', function(){
    $('#im_' + currentImage).stop().fadeOut(1);
    increaseImage();
    $('#im_' + currentImage).stop().fadeIn(1);
  });

  var currentImage = 1;
  var totalImages = 6;

  function increaseImage() {
    ++currentImage;
    if (currentImage > totalImages){
      currentImage = 1;
    }
  }

  function decreaseImage() {
    --currentImage;
    if (currentImage < 1){
      currentImage = totalImages;
    }
  }
});

// var slideIndex = 0;
// showSlides();   //js function to show slides one by one.
//
// // function plusSlides(n){
// //   showSlides(slideIndex += n);
// // }
// //
// // function currentSlide(n){
// //   showSlides(slideIndex = n);
// // }
//
// function showSlides(n){
//   var i;
//   var slides = document.getElementByClassName("mySlide"); //this returns the collection of all "mySlide" as node object.
//   var dots = document.getElementsByClassName("dots");//get dots
//   // if (n > slides.length){
//   //   slideIndex = 1;
//   // }
//   // if (n < 1){
//   //   slideIndex = slides.length;
//   // }
//   for (i = 0; i < slides.length; i++){
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length){
//     slideIndex = 1;
//   }
//   for (i = 0; i < dots.length; i++){
//     dots[i].className = dots[i].className.replace("active", "")
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides,2000);
// }
