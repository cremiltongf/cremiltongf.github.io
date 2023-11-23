let overflowHidden = document.querySelector("body");
let menuMobile = document.querySelector(".mobile");
let toogle = document.querySelectorAll(".toggle");

for (let i = 0; i < toogle.length; i++){
    toogle[i].addEventListener("click", menuAction);
}

function menuAction() {
    if(menuMobile.classList.contains("show-menu")){
        menuMobile.classList.remove("show-menu");
        overflowHidden.style.overflow = "auto";
    }
    else {
        menuMobile.classList.add("show-menu");
        overflowHidden.style.overflow = "hidden";
    }
}

document.addEventListener("keydown", function(e){
    if(e.key === "Escape") () =>  menuAction();
});


// dark mode switch
let html = document.querySelector("html");
let darkMode = document.querySelector(".lamp");
darkMode.addEventListener("click", disableDarkMode);
function disableDarkMode(){
    html.classList.toggle("dark-off");
}


//top
window.addEventListener("load", returnTop);
function returnTop(){
     window.onscroll = function() { scrollFunction() };
     function scrollFunction() {
        let buttonTop = document.querySelector(".arrow-top");
         if (document.body.scrollTop > 720 || document.documentElement.scrollTop > 720) {
            buttonTop.classList.add("arrow-top-show");
         } else {
            buttonTop.classList.remove("arrow-top-show");
         }
     }
}
