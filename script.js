const timerInput = document.querySelector("#timerInput");
const startBtn = document.querySelector("#startButton");
const countDownDisplay = document.querySelector("#countDownDisplay");
const pauseBtn = document.querySelector("#pauseBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const stopTimer = document.querySelector("#stopTimer");
let valueSeconds;


function countDown() {
  valueSeconds = parseInt(timerInput.value);
  console.log(valueSeconds);

  if (isNaN(valueSeconds)) {
    countDownDisplay.innerText = `Please Enter valid Value`;
    // return;
  }
  if (valueSeconds < 0) {
    countDownDisplay.innerText = "Value should be greater than 0";
    // return;
  }

  const timer = setInterval(function () {
    valueSeconds--;
    countDownDisplay.innerText = `Time remaining:${valueSeconds} seconds`;

    if (valueSeconds <= 0) {
      clearInterval(timer);
      countDownDisplay.textContent = `Times Up ⌚`;
    }
  }, 1000);
}
function pauseTimer() {
  clearInterval(valueSeconds);
  countDownDisplay.textContent = valueSeconds;
}
function resumeTimer() {
  console.log("resume timer");
}
function stopTimerForever() {
  clearInterval(timer)
  countDownDisplay.textContent = 0;
}
startBtn.addEventListener("click", countDown);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);
stopTimer.addEventListener('click', stopTimerForever);
