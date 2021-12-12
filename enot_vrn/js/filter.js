window.addEventListener("keyup",e=>{
  if (e.target.classList.contains("myInput")) {
    var input = document.getElementsByClassName('myInput')[0];
     var filter = input.value.toUpperCase();
    var li  = document.getElementsByTagName('li');

    for (var i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName('a')[0];
      if (a.innerHTML.toUpperCase().indexOf(filter)>-1) {
          li[i].style.display = "";
      }
      else {
        li[i].style.display = "none";
      }
    }
  }
})
