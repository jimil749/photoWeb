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
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
