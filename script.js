let startTime = document.getElementById("clock");
const play = document.getElementById("start");
const pauseTime = document.getElementById("end");
const resetTime = document.getElementById("reset");
const plusThirtyMin = document.getElementById("thirtyMin");
const plusFiveMin = document.getElementById("fiveMin");
const plusThirtySec = document.getElementById("thirtySec");
const alarmSound = new Audio("Quack.mp3");

let interval
let timeLeft

function updateTimer(){
    let minutes = Math.floor(timeLeft/60);
    let seconds = timeLeft%60

    startTime.textContent = 
        String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
    
}

play.addEventListener("click", unpause)
pauseTime.addEventListener("click", stopTime)
resetTime.addEventListener("click", restartTime)

plusThirtyMin.addEventListener("click", function(){
    timeLeft = 10;
    // alert("30min of study time")
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if(timeLeft === 0){
            clearInterval(interval);
            startTime.textContent = "DONE!";
            alarmSound.play();
        }
    }, 1000)
})

plusFiveMin.addEventListener("click", function(){
    timeLeft = 5*60;
    // alert("5min of study time starts now")
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if(timeLeft === 0){
            clearInterval(interval);
            startTime.textContent = "DONE!";
            alarmSound.play();
        }
    }, 1000)
})

plusThirtySec.addEventListener("click", function(){
    timeLeft = 30;
    // alert("30sec of study time starts now")
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if(timeLeft === 0){
            clearInterval(interval);
            startTime.textContent = "DONE!";
            alarmSound.play();
        }
    }, 1000)
})

function stopTime(){
    clearInterval(interval);
}

function unpause(){
    setInterval(interval);
}

function restartTime(){
    clearInterval(interval);
    timeLeft = 0;
    updateTimer();
}