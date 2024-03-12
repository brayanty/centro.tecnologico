// Cuando el usuario se desplaza por la página, ejecuta scrollVerify
window.onscroll = function() {scrollVerify()};
// Obtener la barra de navegación
const navbar = document.querySelector(".nav");

// Obtener la posición de desplazamiento de la barra de navegación
var sticky = navbar.offsetTop;
// Agrega la clase fija a la barra de navegación cuando llegues a su posición de desplazamiento. Elimina "stiky" 
// cuando sales de la posición de desplazamiento

function scrollVerify() {

  window.scrollY >= 200 ?
    navbar.classList.add("nav--stiky-black") : 
    navbar.classList.remove("nav--stiky-black");


  if(window.scrollY >= 400){
    nav_items.classList.remove('nav__link-contain-active');
    nav_items.classList.add('nav__link-contain-disable');
  }
}