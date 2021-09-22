var slideIndex = 0;

roleta();

function roleta() {
  var i;
  var x = document.getElementsByClassName("img_logo");

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > x.length) { slideIndex = 1 }
  
  x[slideIndex-1].style.display = "block";
  setTimeout(roleta, 2500);
}