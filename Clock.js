

const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

setInterval (myAnalogClock, 1000);

function myAnalogClock(){

    const Time = new Date();
    const secondRatio = Time.getSeconds() / 60;
    const minuteRatio =  + Time.getMinutes() / 60;
    const hourRatio = Time.getHours() / 12;
    rotate(secondHand, secondRatio);
    rotate(minuteHand, minuteRatio);
    rotate(hourHand, hourRatio);
}

function rotate(element, ratio){
    return element.style.setProperty('--move', ratio * 360)
}

myAnalogClock();

// digital part 

const digitalHour = document.querySelector(".digital-hour");
const digitalMinute = document.querySelector(".digital-minute");
const digitalSecond = document.querySelector(".digital-second");
const session = document.querySelector(".session");

setInterval(myDigitalClock, 1000);

function myDigitalClock(){
    const w = new Date();
    let x = w.getSeconds();
    let y = w.getMinutes();
    let z = w.getHours();
    let m = "AM";
    let e = "PM"

    x = x < 10 ? "0" + x : x;
    y = y < 10 ? "0" + y : y;

    //z = z < 10 ? "0" + z : z > 12 ? z - 12 : z; // praticing tenary statement

    if (z < 10){
        session.innerText = "AM";
        z = "0" + z;
    }
    else if ( z < 12){
        session.innerText = "AM";
    }
    else if ( z == 12){
        session.innerText = "PM";
    }
    else if ( z > 12){
        session.innerText = "PM";
        z = (z-12)
    }
    
    digitalHour.innerHTML= z;
    digitalMinute.innerHTML = y;
    digitalSecond.innerHTML = x;

}

myDigitalClock();

// creation of a stop watch

const stopWatchHour = document.querySelector("#stop-hour");
const stopWatchMinute = document.querySelector("#stop-minute");
const stopWatchSecond = document.querySelector("#stop-second");
const Msecond = document.querySelector("#stop-Msecond");

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let tens = 00;
let seconds = 00;
let min = 00;
let hrs = 00;
let myWatch;

startButton.onclick = function(){
    clearInterval(myWatch);
    myWatch =  setInterval(stopwatch, 10);

stopButton.onclick = function(){
    clearInterval(myWatch);
}

resetButton.onclick = function(){
    clearInterval(myWatch);
    tens = "00";
    seconds = "00";
    min = "00";
    hrs = "00";
    Msecond.innerText = tens;
    stopWatchSecond.innerText = seconds;
    stopWatchMinute.innerText = min;
    stopWatchHour.innerText = hrs;
}


function stopwatch() {
    tens++;
    if( tens <= 9 ){
        Msecond.innerText = "0" + tens ;
    }

    if ( tens > 9 ){
        Msecond.innerText = tens ;
    }

    if ( tens > 99 ){
        seconds++
        stopWatchSecond.innerText = "0" + seconds;
        tens = 0;
        Msecond.innerText = "0" + 0 ;
    }

    if ( seconds > 9){
        stopWatchSecond.innerText = seconds ;
    }
    
    if (seconds > 59){
        min++
        stopWatchMinute.innerText = "0" + min;
        seconds = 0;
        stopWatchSecond.innerText = "0" + 0;
    }

    if ( min > 9){
        stopWatchMinute.innerText = min ;
    }

    if (min > 59){
        hrs++
        stopWatchHour.innerText = "0" + hrs;
        min = 0;
        stopWatchMinute.innerText = "0" + 0;
    }

    if ( hrs > 9){
        stopWatchHour.innerText = hrs ;
    }

}
}