// declare constants

const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const ampmEl = document.getElementById("ampm");

// updateClock function

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

// if else rule for AM/PM

    if(h > 12){
        h = h - 12; 
        ampm = "PM";
    } else{
        ampm = "AM";
    }

// extra 0's on timeline

h = h < 10 ? "0" + h : h;
m = m < 10 ? "0" + m : m;
s = s < 10 ? "0" + s : s;

//print time on html

hourEl.innerText = h; 
minuteEl.innerText = m;
secondEl.innerText = s;
ampmEl.innerText = ampm;

//set timeout function

setTimeout(()=>{
    updateClock()
}, 1000)
}

updateClock();