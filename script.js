const inactive = document.getElementById("share-inactive");
const active = document.getElementById("share-active");
const activeContainer = document.getElementById("share-active-container");


active.addEventListener("click", function displayShareContainer(){
    activeContainer.classList.add("display-none");
});

inactive.addEventListener("click", function displayShareContainer(){
    activeContainer.classList.remove("display-none");
});
