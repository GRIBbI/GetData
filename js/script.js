// HEADER
//BURGER

const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-menu');
const body = document.querySelector('body');
function burgerShow() {
  burger.classList.toggle('burger-active');
  burgerMenu.classList.toggle('menu__active');
  body.classList.toggle('menu-body');
}
burger.addEventListener('click', burgerShow);