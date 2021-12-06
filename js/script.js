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

//SLIDERSHOW
const salesmanbtn = document.querySelector('.salesmans-btn');
const manufacturerbtn = document.querySelector('.manufacturers-btn');
const onlineStorebtn = document.querySelector('.online-stores-btn');
const salesmanContent = document.querySelector('.container--salersmans');
const manufacturerContent = document.querySelector('.container--manufacturer');
const onlineStoreContent = document.querySelector('.container--online-store');

function slideSalesman() {
  salesmanContent.style.display = "flex";
  manufacturerContent.style.display = "none";
  onlineStoreContent.style.display = "none";
}

function slideManufacturer() {
  manufacturerContent.style.display = "flex";
  salesmanContent.style.display = "none";
  onlineStoreContent.style.display = "none";
}

function slideOnlineStore() {
  manufacturerContent.style.display = "none";
  salesmanContent.style.display = "none";
  onlineStoreContent.style.display = "flex";
}
salesmanbtn.addEventListener('click', slideSalesman);
manufacturerbtn.addEventListener('click', slideManufacturer);
onlineStorebtn.addEventListener('click', slideOnlineStore);

//TARIFF

const month = document.getElementById('month');
const threeMonths = document.getElementById('threeMonths');
const sixMonths = document.getElementById('sixMonths');
const year = document.getElementById('year');
const ligthPrice = document.getElementById('light');
const profiPrice = document.getElementById('profi');
const guruPrice = document.getElementById('guru');
const allTariffBtns = document.querySelectorAll('.tariff__term-item');


function tariffRadio(i) {

  let lightStartPrice = 2400;
  let profiStartPrice = 4800;
  let guruStartPrice = 9600;

  if (i === 1) {
    lightStartPrice = lightStartPrice * 2.5;
    profiStartPrice = profiStartPrice * 5;
    guruStartPrice = guruStartPrice * 10;

  } else if (i === 2) {
    lightStartPrice = lightStartPrice * 5;
    profiStartPrice = profiStartPrice * 10;
    guruStartPrice = guruStartPrice * 20;
  } else if (i === 3) {
    lightStartPrice = lightStartPrice * 10;
    profiStartPrice = profiStartPrice * 20;
    guruStartPrice = guruStartPrice * 40;
  }
  ligthPrice.innerHTML = lightStartPrice;
  profiPrice.innerHTML = profiStartPrice;
  guruPrice.innerHTML = guruStartPrice;

}

for (let i = 0; i < allTariffBtns.length; i++) {
  allTariffBtns[i].addEventListener('click', () => tariffRadio(i));
}

//MAILINE

const emailInput = document.querySelector('.email-input');
const emailSub = document.querySelector('.email-sub');

emailSub.addEventListener('click', () => {
  emailInput.value = '';
});