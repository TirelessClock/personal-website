function scroll_funct(){
    window.removeEventListener("scroll", scroll_funct);
    setTimeout(funct, 1000);
    clearTimeout(timeoutID);


    function funct(){
        window.open("index.html", "_top");
    }
}

window.addEventListener("scroll", scroll_funct);