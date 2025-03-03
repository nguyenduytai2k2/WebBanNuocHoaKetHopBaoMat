/*
   * Hàm xử lý phần header
   * Author: tai(18/11/2024)
*/

const menuBtn = document.querySelector('.navbar__icons');
const menuNav = document.querySelector('.header__nav');
const overlay = document.querySelector('.header-nav-overlay');
const subnavItems = document.querySelectorAll('.nav__items');
const body = document.querySelector('body');

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('open');
  menuNav.classList.toggle('active');
  overlay.classList.toggle('open');
  body.classList.toggle('hidden');
});

overlay.addEventListener('click', function () {
  menuBtn.classList.toggle('open');
  menuNav.classList.toggle('active');
  overlay.classList.toggle('open');
  body.classList.toggle('hidden');
});

for (i = 0; i < subnavItems.length; i++) {
  subnavItems[i].addEventListener('click', function () {
    this.classList.toggle('open');
  });
}