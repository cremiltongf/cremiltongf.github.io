// menu mobile and scroll hidden window
let hiddenOverflow = document.querySelector("body");
let navMobile = document.querySelector(".nav");
let addAction = document.querySelectorAll(".toggle");

for (let i = 0; i < addAction.length; i++){
    addAction[i].addEventListener("click", navAction);
}

function navAction(){
    navMobile.classList.toggle("nav-show");
    hiddenOverflow.classList.toggle("hidden-scroll");
}

document.addEventListener("keydown", function(e){
    if(e.key === "Escape") () =>  navAction();
});


// dark mode switch
let html = document.querySelector("html");
let darkMode = document.querySelector(".lamp");
function disableDarkMode(){
    html.classList.toggle("dark-off");
}
darkMode.addEventListener("click", disableDarkMode);


//return top and icon scroll hidden
function scrollEvent(){
    window.onscroll = function() { 
        returnTop();
        scrollHidden();
    };
     
     function returnTop() {
        let buttonTop = document.querySelector(".arrow-top");
         if (document.body.scrollTop > 720 || document.documentElement.scrollTop > 720) {
            buttonTop.classList.add("arrow-top-show");
         } else {
            buttonTop.classList.remove("arrow-top-show");
         }
     }

     function scrollHidden(){
        let iconScroll = document.querySelector(".scroll");
        if (document.body.scrollTop > 140 || document.documentElement.scrollTop > 140) {
            iconScroll.classList.add("scroll-hidden");
        } else {
            iconScroll.classList.remove("scroll-hidden");
        }
    }
}
window.addEventListener("load", scrollEvent);
