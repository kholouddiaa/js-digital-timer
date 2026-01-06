const out = document.getElementById("out");
let seconds = 0;
let minutes = 0;
let houre = 0;

if (out) {
  setInterval(() => {


    seconds++;

  
    while (seconds >= 60) {
      seconds -= 60;
      minutes++;
    }

   
    while (minutes >= 60) {
      minutes -= 60;
      houre++;
    }

    out.textContent = ` ${houre}:${minutes}:${seconds}  second `;

  }, 1000);
}
