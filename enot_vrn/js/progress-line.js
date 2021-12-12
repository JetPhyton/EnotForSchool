if (e.target.classList == "progres-line-btn") {
  var barLine = document.getElementsByClassName('progressbar-line__main')[0];
  var width = 5;
  var id = setInterval(frame,10);
  function frame() {
      if (width >= 100) {
        clearInterval(id);
      }
      else {
        width++;
        barLine.style.width = width + '%';
        document.getElementsByClassName('progressbar-line__label')[0].innerHTML = width + '%';
      }
  }
}
