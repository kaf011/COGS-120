var i = 0;
var sec=0;
var date = new Date();
var currentTime = date.getHours();
var newMin = date.getMinutes();
if(newMin<=9){newMin="0"+newMin;}
var newTime;
var newDate = (date.getMonth() + 1) + "/" + date.getDate();
    if(currentTime>12){
        newTime = date.getHours()-12 + ":" + newMin+"PM";
    }
    else{
        newTime = date.getHours() + ":" + newMin+"AM";
    }
    var healthrate = 1;
    if(currentTime>=7&&currentTime<=9){healthrate++;}
    if(currentTime>=11&&currentTime<=13){healthrate++;}
    if(currentTime>=17&&currentTime<=19){healthrate++;}

function move() {
document.getElementById("startbtn").style.display="none";
document.getElementById("donebtn").style.display="block";
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 0;
    
    var id = setInterval(frame, 12000);
    var setIn = setInterval(countdown, 1000);
    function countdown(){
        sec++;
        let minutes = Math.floor(sec / 60);
        let seconds = sec % 60;
        elem.innerHTML = minutes+"min"+seconds+"sec";
    }
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

function done(){
    duration = sec;
    if(duration>=900&&duration<=1500){
        healthrate++;
    }
    duration = Math.floor(sec / 60)+"min"+duration%60+"sec";
    
    $.ajax({
        type: "POST",
        url: '/rate',
        data: {
            newDate,
            newTime,
            duration,
            healthrate
        },
        success: function (res) {
            console.log(res);
        }
    });
    window.location.replace("finish");
}
