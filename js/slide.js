let slideIndex = 0;
slideshow();

//create the function for the slideshow
function slideshow() {
    let i;
    //create the variable for the next image to be displayed
    let x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    //change image every 5 seconds
    setTimeout(slideshow, 5000);
}
