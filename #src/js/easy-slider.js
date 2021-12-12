
var left = document.getElementsByClassName("slider__nav-left")[0];
var right = document.getElementsByClassName("slider__nav-right")[0];
// Беруться стрелочки
var slideIndex = 1;


// Это номер слайда
showSlides(slideIndex);



// Функция при нажатии левой стрелочки
left.onclick = function() {
  showSlides(slideIndex -= 1);
}

// Функция при нажатии правой стрелочки
right.onclick = function() {
  showSlides(slideIndex += 1);
}




// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

function showSlides(n) {
  var slides = document.getElementsByClassName('slider__item');
  // var dots= document.getElementsByClassName('dot');

  // Если количество слайдов кончаеться в плюс переходит на первый
  if (n> slides.length) {
    slideIndex = 1;
  }
  // Если количество слайдов кончаеться в минус переходит на последний
  if (n < 1) {
    slideIndex = slides.length;
  }
  // Отключает все слайды
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // for (var i = 0; i < dots.length; i++) {
  //   dots[i].classList.remove("dot_active")
  // }
  //Включае нужный
  slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].classList.add("dot_active");
}
