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
