const menuBtn = document.querySelector(".menu-btn");
const closeMenu = document.querySelector(".menu-close");
const openMenu = document.querySelector(".menu-open");
const navBox = document.querySelector(".nav-box");
const menuBox = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {
    openMenu.classList.toggle("inactive");
    closeMenu.classList.toggle("active");

    if(!(navBox.classList.contains('active'))) {
        navBox.classList.toggle('inactive');
        setTimeout(() => {
            navBox.classList.toggle('active');
        }, 100);
        setTimeout(() => {
            menuBox.classList.toggle('inactive');
        }, 50);
    }
    
    if(navBox.classList.contains('active')) {
        menuBox.classList.toggle('inactive');
        navBox.classList.toggle('active');
        setTimeout(() => {
            navBox.classList.toggle('inactive');
        }, 100);
    }
    
});

navBox.addEventListener('click', () => {
    menuBox.classList.toggle('inactive');
    navBox.classList.toggle('active');
    setTimeout(() => {
        navBox.classList.toggle('inactive');
    }, 100);
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

const navs = document.querySelectorAll(".nav-c");

function paginate(event) {
    navs.forEach(nav => {
        nav.classList.remove('active');
    });
    event.target.closest('.nav-c').classList.add('active');
}

function paginate1(page) {
    navs.forEach(nav => {
        nav.classList.remove('active');
    });

    const element = document.querySelector(`.nav-c[page="${page}"]`);
    element.classList.add('active');
}

navs.forEach(nav => {
    nav.addEventListener('click', (event) => {
        paginate(event);
    });
});

// ----------------------------------------------------

const languageLables = document.querySelectorAll(".l-label");

languageLables.forEach((label, index) => {
    const i = index + 1;
    if(i < 10) {
        label.innerText = `0${i}`;
    } else {
        label.innerText = i;
    }
});

// ----------------------------------------------------

document.addEventListener('scroll', () => {
    const viewport = window.scrollY;
    if(viewport >= 0 && viewport < 488) {
        paginate1("home");
    } else if (viewport >= 488 && viewport < 1307) {
        paginate1("about");
    } else if (viewport >= 1307 && viewport < 1980) {
        paginate1("projects");
    } else if (viewport >= 1980) {
        paginate1("contacts");
    } else {
        window.alert("Something is wrong with the paginator!")
    }
});