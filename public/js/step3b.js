var i = 0;
function move() {
document.getElementById("startbtn").style.display="none";
document.getElementById("donebtn").style.display="block";
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 0;
    var minutes = 0;
    var seconds = 0;
    var id = setInterval(frame, 1200);
    console.log(width)
    function frame() {
        console.log(width);
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        minutes = Math.floor(width*1.2/60);
        console.log(minutes);
        seconds= parseInt(width*1.2);
        console.log(seconds);
        elem.style.width = width + "%";
        elem.innerHTML = minutes+"min"+seconds+"sec";
      }
    }
  }
}