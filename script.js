const headerBurger = document.querySelector('.header__burger')
const headerNav = document.querySelector('.header__nav')
const headerClose = document.querySelector('.header__close')
const headerLinks = document.querySelectorAll('.header__link')

function openMenu(){
    headerNav.classList.add('header__nav-active');
    document.body.classList.add('body-disabled');
}

function closeMenu(){
    headerNav.classList.remove('header__nav-active');
    document.body.classList.remove('body-disabled');
}

headerBurger.onclick = openMenu;
headerClose.onclick = closeMenu;

headerLinks.forEach(link => {
    link.onclick = closeMenu;
});