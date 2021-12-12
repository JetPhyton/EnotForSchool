if (e.target.classList == "popup") {
  var popUp = document.getElementsByClassName('popup');
  var popUpContent = document.getElementsByClassName('popup__text')
  for (var i = 0; i < popUp.length; i++) {
    if (e.target.classList == popUp[i].classList) {
      popUpContent[i].classList.toggle("active");
    }
  }
}
