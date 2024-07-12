const menuBtn = document.querySelector(".menu-btn");
const closeMenu = document.querySelector(".menu-close");
const openMenu = document.querySelector(".menu-open");

menuBtn.addEventListener("click", () => {
    openMenu.classList.toggle("inactive");
    closeMenu.classList.toggle("active");
});