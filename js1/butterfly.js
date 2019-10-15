window.onscroll = function(){myFunc()};


function myFunc(){
  var myTopnav = document.getElementById("myTopnav");
  var sticky = myTopnav.offsetTop;
  if (window.pageYOffset >= sticky){
    myTopnav.classList.add("sticky");
  }else{
    myTopnav.classList.remove("sticky");
  }
}

// function leftSticky(){
//   var leftCol = document.getElementById("leftCol");
//   var sticky = leftCol.offsetTop;
//   if (window.pageYOffset >= sticky){
//     leftCol.classList.add("sticky");
//   }else{
//     leftCol.classList.remove("sticky");
//   }
// }
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function switchPage(){
  var x = document.getElementById("ro");
  var y = document.getElementById("ro1");
//  console.log(x.style.display);
  if (x.style.display === "none"){
    x.style.display = "flex";
    y.style.display = "none";
  }
  else{
    x.style.display = "none";
    y.style.display = "block";
  }
//  console.log(x.style.display);
//  console.log(y.style.display);
}

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
