// FADE SCREEN 

var bleh = document.getElementById("front-screen-stuff");
var scrollButton = document.getElementById("scroll-object");
let a; 

scrollButton.addEventListener("click", temp);

function temp(){
    if(!a){
        a = setInterval(opac, 10);
    }
}

function opac(){
    
    var opa = Number(window.getComputedStyle(bleh).getPropertyValue("opacity"));
    if(opa != 0){
        opa -= 0.01;
        bleh.style.opacity = opa; 
    } else{
        clearInterval(a);
        a = null;
        document.getElementById("front-screen-stuff").remove();
    }
}

// SLIDESHOW

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
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