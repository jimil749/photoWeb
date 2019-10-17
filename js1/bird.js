window.onscroll = function(){myFunc()};


let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");
console.log(navBarToggle);
navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});


function myFunc(){
  var myTopnav = document.getElementById("navv");
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


// var y = document.getElementById("rows");
// function changeEle(ele){
//
//     if (ele.id === "imgs"){
//       document.getElementById("rows").innerHTML = "";
//       var x = document.getElementById("check").innerHTML;
//       document.getElementById("rows").innerHTML = x;
//       console.log("HI");
//     }
//     else{
//       console.log("HEY");
//       document.getElementById("rows") = y;
//     }
// }
