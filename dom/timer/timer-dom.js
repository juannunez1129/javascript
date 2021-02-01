console.log("time to start the timer!");

const start = document.getElementById('start')
const stop = document.getElementById('stop')
const clock = document.getElementById('clock')
const reset = document.getElementById('reset')
const clock = document.getElementById('clock')
let hrs = 0
let secs = 0
let mins =0

function timeConversion(){
    secs++
    if (secs >= 60){
        secs = 0
        mins++
        if (mins >= 60){
            minutes = 0
            hours++
        }
    }
}







}