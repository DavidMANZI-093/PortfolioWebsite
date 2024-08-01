const menuBtn = document.querySelector(".menu-btn");
const closeMenu = document.querySelector(".menu-close");
const openMenu = document.querySelector(".menu-open");

menuBtn.addEventListener("click", () => {
    openMenu.classList.toggle("inactive");
    closeMenu.classList.toggle("active");
});

// ----------------------------------------------------hh

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

const navs = document.querySelectorAll(".nav-c");

function paginate(event) {
    navs.forEach(nav => {
        nav.classList.remove('active');
    });
    event.target.closest('.nav-c').classList.add('active');
}

navs.forEach(nav => {
    nav.addEventListener('click', (event) => {
        paginate(event);
    });
});