const SVGMenu = document.querySelector('.nav__menu-img');
const nav_items = document.querySelector('.nav__link-contain');

document.querySelector('.nav__menu').addEventListener('click',()=>{
    nav_items.classList.remove('nav__link-contain-disable');
    nav_items.classList.toggle('nav__link-contain-active');
    SVGMenu.classList.toggle('nav__menu-img-blank');
})
