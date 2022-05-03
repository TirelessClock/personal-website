var coverPage = document.getElementById("bg");

coverPage.addEventListener("scroll", scroll_funct);

function scroll_funct(){
    
    var opa = Number(window.getComputedStyle(coverPage).getPropertyValue("opacity"));
    console.log("nerf herder");
    
    if(opa != 0){
        opa -= 0.0315;
        coverPage.style.opacity = opa;
    } else{
        coverPage.removeEventListener("scroll", scroll_funct);
    }
}
