if (e.target.classList == "open-modal-img") {
  var modal = document.getElementsByClassName('modal-img-content');
  var modalImg = document.getElementsByClassName('modal-img');
  var openImg = document.getElementsByClassName('open-modal-img');
  for (var i = 0; i < openImg.length; i++) {
    if (e.target.classList == openImg[i].classList) {
        modal[i].style.display = "block";
        modalImg[i].src = e.target.src;
    }
  }
}
if (e.target.classList == "modal-img-close" || e.target.classList == "modal-img-content") {
  var modal = document.getElementsByClassName('modal-img-content');
  var closeBtn = document.getElementsByClassName('modal-img-close');
  for (var i = 0; i < closeBtn.length; i++) {
    if (e.target.classList == closeBtn[i].classList || e.target.classList == modal[i].classList) {
        modal[i].style.display = "none";
    }
  }
}
// var img = document.getElementById('open-modal-img');
// var modal = document.getElementById('modal-img-block');
// var modalImg = document.getElementById('modal-img');
//
// img.addEventListener("click",function () {
//   modal.style.display = "block";
//   modalImg.src = this.src;
// })
//
// var span = document.getElementById('modal-img-close');
// span.onclick = function () {
//   modal.style.display = "none";
// }
