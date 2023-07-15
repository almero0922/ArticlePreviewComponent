const inactive = document.getElementById("share-inactive");
const active = document.getElementById("share-active");
const activeContainer = document.getElementById("share-active-container");
const mediaQuery = window.matchMedia('(min-width: 1281px)');

active.addEventListener("click", function displayShareContainer() {
    if(!mediaQuery.matches){ 
        activeContainer.classList.add("display-none");
    }
});

inactive.addEventListener("click", function displayShareContainer() {
    if(mediaQuery.matches){
        if(activeContainer.classList.contains("display-none")){
            activeContainer.classList.remove("display-none");
        }else{
            activeContainer.classList.add("display-none");
        }
    }else{
        activeContainer.classList.remove("display-none");
    }
    
});


