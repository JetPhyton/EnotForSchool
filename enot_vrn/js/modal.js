// var modal = document.getElementsByClassName("modal")[0];
// var btn = document.getElementsByClassName("modalBtn")[0];
// var span = document.getElementsByClassName("close")[0];
// var cont = document.getElementsByClassName('modal-content')[0];
//
// btn.onclick = function () {
//   modal.style.display = "block";
// }
// span.onclick = function () {
//   modal.style.display = "none";
// }

if (e.target.classList.contains("modalBtn")) {
  var modalBtns = document.getElementsByClassName('modalBtn')
  var modal = document.getElementsByClassName("modal");
  for (var i = 0; i < modal.length; i++) {
    if (e.target.classList == modalBtns[i].classList) {
        modal[i].style.display = "block";
    }
  }
}
if (e.target.classList == "modal-close" || e.target.classList == "modal" ) {
  var closeBtns = document.getElementsByClassName('modal-close');
  var closeModalBack = document.getElementsByClassName('modal');
  var modal = document.getElementsByClassName("modal");
  for (var i = 0; i < closeBtns.length; i++) {
    if (e.target.classList == closeBtns[i].classList) {
        modal[i].style.display = "none";
    }
  }
  for (var i = 0; i < closeModalBack.length; i++) {
    if (e.target.classList == closeModalBack[i].classList) {
        modal[i].style.display = "none";
    }
  }
}
