const header = document.getElementById('header');
const header2 = document.getElementById('header2');
const additional = document.getElementById('additional');
// get plus and minus buttons
const plus = document.querySelectorAll('.plus');
const minus = document.querySelectorAll('.minus');

// get set time button
const set = document.getElementById('set');

// get controls div
const controls = document.getElementById('controls');

// get button controls
const play = document.getElementById('play');
const pause = document.getElementById('pause');
//const rewriting = document.getElementById('rewriting');

// get time paragraph
//const hoursDiv = document.getElementById('hours').children[2];
const minutesDiv = document.getElementById('minutes').children[2]
const secondsDiv = document.getElementById('seconds').children[2];

additional.style.display = 'none';
// plus the time
plus.forEach((elem) => {

    elem.onclick = () => {

        let value = elem.parentElement.children[2];

        if (elem.parentElement.className === 'minutes') {
            if (value.textContent == 99) {
                value.textContent = window.parseInt(value.textContent);
            } else {
              value.textContent = window.parseInt(value.textContent) + 1;
            }

            if (value.textContent <= 9) {
                value.textContent = '0' + window.parseInt(value.textContent);
            }
        }

        if (elem.parentElement.className === 'seconds') {
            if (value.textContent == 59) {
                value.textContent = window.parseInt(value.textContent);
            } else {
                value.textContent = window.parseInt(value.textContent) + 1;
            }

            if (value.textContent <= 9) {
                value.textContent = '0' + window.parseInt(value.textContent);
            }
        }


    }

});

// minus the time
minus.forEach((elem) => {

    elem.onclick = () => {

        let value = elem.parentElement.children[2];

        if (value.textContent == 0) {
          value.textContent = window.parseInt(value.textContent);
        } else {
          value.textContent = window.parseInt(value.textContent) - 1;
        }

        if (value.textContent <= 9) {
            value.textContent = '0' + window.parseInt(value.textContent);
        }

    }

});

// set the time
set.onclick = () => {

    //const hou = window.parseInt(hoursDiv.textContent) * 60;
    const min = (window.parseInt(minutesDiv.textContent)) * 60;
    let sec = min + window.parseInt(secondsDiv.textContent);

    let saveSec = sec;
    var duration = '';
    var date = new Date();
    var currentTime='';
    if (sec === 0) {

        alert('you should set a value');

    } else {

        set.style.display = 'none';
        header.style.display = 'none';
        header1.style.display = 'none';
        additional.style.display = 'none';
        header2.style.display = 'block';
        controls.style.display = 'block';

        plus.forEach((elem) => {
            elem.style.display = 'none';
        });

        minus.forEach((elem) => {
            elem.style.display = 'none';
        });

        var setIn = setInterval(countdown, 1000);
    }

    // countdown function
    function countdown() {
        if(sec<0){
            header2.style.display = 'none';
            additional.style.display = 'block';
        }
        let minutes = Math.floor(sec / 60);
        //let hours = Math.floor(minutes / 60);
        let seconds = sec % 60;
        if (sec<0){minutes = Math.floor(-1*sec / 60);seconds = -1*sec%60} ;
        
        

        minutes %= 60;

        //if (hours <= 9) hours = '0' + hours;
        if (minutes <= 9&&sec>0) minutes = '0' + minutes;
        if (seconds <= 9&&sec>0) seconds = '0' + seconds;
        if (sec <= 0&&minutes <= 9) minutes = '0' + minutes;
        if (sec <= 0&&seconds <= 9) seconds = '0' + seconds;

        //hoursDiv.textContent = hours;
        minutesDiv.textContent = minutes;
        secondsDiv.textContent = seconds;

        sec--;

        // if(minutes==0&&seconds == 0) {
        //     duration = saveSec;
        //     currentTime = date.getHours();
        // console.log(duration);
        // $.ajax({
        //     type: "POST",
        //     url: '/rate',
        //     data: {
        //         duration,
        //         currentTime
        //     },
        //     success: function (res) {
        //         console.log("success");
        //     }
        // });
        // //window.location.replace("finish");
        // }

    }

    countdown();

    // paused the count down timer
    pause.onclick = () => {
        duration = saveSec-sec;
        currentTime = date.getHours();
        console.log(duration);
        $.ajax({
            type: "POST",
            url: '/rate',
            data: {
                duration,
                currentTime
            },
            success: function (res) {
                console.log(res);
            }
        });
        location.href = "finish";
        //play.style.display = 'inline-block';
        //pause.style.display = 'none';
        clearInterval(setIn);
    };
    
    

};
