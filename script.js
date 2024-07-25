const menuBtn = document.querySelector(".menu-btn");
const closeMenu = document.querySelector(".menu-close");
const openMenu = document.querySelector(".menu-open");

menuBtn.addEventListener("click", () => {
    openMenu.classList.toggle("inactive");
    closeMenu.classList.toggle("active");
});

// ----------------------------------------------------

const header = document.querySelector('#header');
const contentBoxes = document.querySelectorAll('.content-box');function updateContentBoxMargin () {
    contentBoxes.forEach(contentBox => {
        contentBox.style.marginTop = header.clientHeight + 'px';
    });
}

updateContentBoxMargin();
window.addEventListener('DOMContentLoaded', updateContentBoxMargin);
window.addEventListener('resize', updateContentBoxMargin);

// ----------------------------------------------------