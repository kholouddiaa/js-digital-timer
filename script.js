// get elements
const out = document.getElementById("out");
const title = document.getElementById("title");
const start = document.getElementById("start");
const reset = document.getElementById("reset");

const minutesInput = document.getElementById("m");
const secondsInput = document.getElementById("s");
const houreInput = document.getElementById("h");

// start state

let timerId = null;
let seconds = 0;
let minutes = 0;
let houre = 0;

function pad(n) {
  return n.toString().padStart(2, "0");
}

function render() {
  out.textContent = `Time ${pad(houre)}:${pad(minutes)}:${pad(seconds)}`;
}

function normalizeTime() {
  while (seconds >= 60) {
    seconds -= 60;
    minutes++;
  }
  while (minutes >= 60) {
    minutes -= 60;
    houre++;
  }
}

start.addEventListener("click", () => {
  if (timerId !== null) return;

  minutes = parseInt(minutesInput.value) || 0;
  seconds = parseInt(secondsInput.value) || 0;
  houre   = parseInt(houreInput.value) || 0;

  normalizeTime();
  render();

  timerId = setInterval(() => {
    seconds++;
    normalizeTime();
    render();
  }, 1000);
});
reset.addEventListener("click", () => {
  if (timerId !== null) {
    clearInterval(timerId);
    timerId = null;
  }
  title.textContent = "Enter time";
    seconds = 0;    
    minutes = 0;            
    houre = 0;
  secondsInput.value = "";
  minutesInput.value = "";
  houreInput.value = "";

  
  render();
});
