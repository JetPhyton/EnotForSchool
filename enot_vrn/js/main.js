// Подключение основных модулей

// ----------------------------------------------------

// alert(window.navigator.platform);

function trackScroll() {
  var scrolled = window.scrollY;

  if (scrolled > 150) {
    goTopBtn.classList.add('back_to_top-show');
  } else {
    goTopBtn.classList.remove('back_to_top-show');
  }
}

function backToTop() {
    window.scroll(0, 0);
}



var goTopBtn = document.querySelector('.back_to_top');

window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);
;
params = "";

function addData(params) {
    var data = document.getElementsByTagName('img').getAttribute("src");
    var element = document.getElementsByTagName('img');
    for (var i = 0; i < data.length; i++) {
      element[i].setAttribute("src",params+data[i]);
    }
}
function ibg() {
  $each($('ibg'),function(index,val) {
    if($(this).find('img').length>0){
      $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
    }
  })
}
;

// ----------------------------------------------------

// Подключение дополнительных модулей

// Для справки

// if (e.target.classList.contains("")) {
//   var a = getElementsByClassName('');
//   for (var i = 0; i < a.length; i++) {
//
//     if (e.target.classList == a[i].classList) {
//
//
//
//     }
//
//   }
// }

// Для справки

//Для подключение дописать @

//Одиночные

// ----------------------------------------------------
  // import "#src/js/easy-slider.js";
  //import "#src/js/filter.js";
  document.querySelector('.header__burger').onclick = function () {
  // Активирует анимацию бургера
  document.querySelector('.header__burger').classList.toggle("active");
  // Включает меню
  document.querySelector('.burger_menu').classList.toggle("active");
  document.querySelector('body').classList.toggle("lock");
}
;
// ----------------------------------------------------

//Повторяющиеся

// ----------------------------------------------------
  window.addEventListener("click",e =>{
    //import "#src/js/popup.js";
    //import "#src/js/modal.js";
    //import "#src/js/modal-img.js";
    //import "#src/js/progress-line.js";
  })
// ----------------------------------------------------
