let totalSecond = 0;
let countDown;
let isPaused = false;

document.getElementById("set").addEventListener("click", () => {
    let hour = parseInt(document.getElementById("hours").value) || 0;
    let minute = parseInt(document.getElementById("minutes").value) || 0;

    totalSecond = (hour * 3600) + (minute * 60);

    if (totalSecond < 0) {
        alert('Please enter a valid time');
        return;
    }

    document.getElementById("hours").value = '';
    document.getElementById("minutes").value = '';

    isPaused = false;
    startCountDown();

    //to stop the timer
    document.getElementById("stop").addEventListener("click", () => {
        isPaused = true;
        clearInterval(countDown); //by doing this very wipe out the setInterval further call, means no progress now
    })

    //to resume the timer
    document.getElementById("start").addEventListener("click", () => {
        if (isPaused && totalSecond > 0) {
            isPaused = false;
            startCountDown();
        }
    });

    //to reset
    document.getElementById("reset").addEventListener("click", () => {
        clearInterval(countDown);
        document.getElementById("timerDisplay").innerText = "00 : 00 : 00";
    });
});

function startCountDown() {
    clearInterval(countDown);
    
    countDown = setInterval(() => {
        totalSecond--;
        if (totalSecond > 0) {
            updateDisplay(totalSecond);
        }
    }, 1000);
}

function updateDisplay(totalSecond) {
    let hrs = Math.floor(totalSecond / 3600);
    let min = Math.floor((totalSecond % 3600) / 60);
    let sec = Math.floor(totalSecond % 60);

    document.getElementById("timerDisplay").innerText = 
    `${String(hrs).padStart(2, '0')} : ${String(min).padStart(2, '0')} : ${String(sec).padStart(2, '0')} `;
}
//we included isPaused variable so that when user click multiple time on resume button, multiple interval not get start running, it only make setInterval run or pause according to variable boolean value 