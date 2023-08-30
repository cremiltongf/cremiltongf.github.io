window.addEventListener("load", function(){

    let toogleMenu = document.querySelectorAll(".toggle");
    for (let i = 0; i < toogleMenu.length; i++){
        toogleMenu[i].addEventListener("click", menuAction);
    }


    let menuContainer = document.querySelector(".mobile");      
    function menuAction() {
        if(menuContainer.classList.contains("show-menu")){
            menuContainer.classList.remove("show-menu");
        }
        else {
            menuContainer.classList.add("show-menu");
        }
    }


    document.addEventListener('keydown', function(event){
        if(event.keyCode === 27){
            menuAction();
        }
    });
    
});