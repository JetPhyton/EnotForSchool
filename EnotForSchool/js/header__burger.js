document.querySelector('.header__burger').onclick = function () {
  // Активирует анимацию бургера
  document.querySelector('.header__burger').classList.toggle("active");
  // Включает меню
  document.querySelector('.burger_menu').classList.toggle("active");
  document.querySelector('body').classList.toggle("lock");
}
