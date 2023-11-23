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
darkMode.addEventListener("click", disableDarkMode)
function disableDarkMode(){
    html.classList.toggle("dark-off");
}