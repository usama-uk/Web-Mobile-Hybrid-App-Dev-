var min =0
var sec =0;
var msec =0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var interval ;
function timer(){
    msec++;
    msecHeading.innerHTML= msec;
    if(msec>=100){
        sec++;
        secHeading.innerHTML = sec;
        msec =0;
    }
    else if(sec>= 60){
        min++;
        sec =0;
        minHeading.innerHTML = min;
    }
}
var e= document.getElementById("start")
var d= document.getElementById("stop")

function start(){
    interval = setInterval(timer,10)
    e.disabled=true
}
function stop(){
    clearInterval(interval);
    e.disabled=false
}
function reset(){
    min=0;
    sec=0;
    msec=0;
    minHeading.innerHTML = 0
    secHeading.innerHTML = 0
    msecHeading.innerHTML = 0
    stop()
    e.disabled=false
}
