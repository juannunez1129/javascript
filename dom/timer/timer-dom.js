console.log("time to start the timer!");

const startClock = document.getElementById('start');
const stopClock = document.getElementById('stop');
const clock = document.getElementById('clock');
const resetClock = document.getElementById('reset');
let hrs = 00;
let secs = 00;
let mins = 00;
var time;

function timeConversion(){
    secs++;
    if (secs >= 60){
        secs = 0;
        mins++;
        if (mins >= 60){
            minutes = 0;
            hours++;
        }
    }
clock.textContent = (hrs ? (hrs > 9 ? hrs : "0" + hrs) : "00") + ":" + (mins ? (mins > 9 ? mins : "0" + mins) : "00") + ":" + (secs > 9 ? secs : "0" + secs);
timer();

}
function timer() {
time = setTimeout(timeConversion, 1000);
}

startClock.onclick = function(){
    timer();
}

stopClock.onclick = function() {
clearTimeout(time);
}

resetClock.onclick = function() {
clock.textContent = "00:00:00";
secs = 0; mins = 0; hrs = 0;
}