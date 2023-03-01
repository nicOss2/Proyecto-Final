const menuIcon = document.querySelector(".menu-icon");
const subMenu = document.querySelector(".sub-menu");

let isClicked = false;

menuIcon.addEventListener("click", function() {
    menuIcon.classList.toggle("open");
    subMenu.classList.toggle("open");
    if (isClicked) {
        menuIcon.style.backgroundColor = "";
    } else {
        menuIcon.style.backgroundColor = "#2947a1";
    }
    isClicked = !isClicked;
});