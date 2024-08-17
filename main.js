// //! Task-1
// let arr = ["Hello World", "Ураа"];
// let num = 0;
// const elem = document.querySelector(".text");
// let inst = setInterval(change, 10000);
// console.log(inst);

// function change() {
//   elem.innerHTML = arr[num];
//   num++;
//   if (num > arr.length) {
//     num = 0;
//   }
// }
// setTimeout(() => {
//   clearInterval(inst);

// }, 20000);
// //!Task-2
// let i = 0;
// function change() {
//   let doc = document.getElementById("divdance");
//   var color = ["aqua", "red", "orange", "yellow", "pink","blue","indigo", "blueviolet"];
//   doc.style.backgroundColor = color[i];
//   i = (i + 1) % color.length;};
//   let inst = setInterval(change, 1000);
// setTimeout(() => {
//     clearInterval(inst);

//   }, 60000);

//!Task-3.1
// let timeoutId = null;
// let hasStarting = false;
// function start() {
//   if (hasStarting) {
//     return;
//   }
//   hasStarting = true;
//   const startTime = new Date().getTime();
//   const run = () => {

//     const time = new Date().getTime() - startTime;

//     document.querySelector('.seconds').textContent = (time / 1000).toFixed(1);
//     timeoutId =setTimeout(run, 50);
//   }
//   run();
// }

// function stop() {
//   if (timeoutId) {
//     clearTimeout(timeoutId);
//     timeoutId = null;
//     hasStarting = 0;
//   }

//!Task-3.2
// let timerElement = document.getElementById("timer");
// let startButton = document.getElementById("start");
// let stopButton = document.getElementById("stop");
// let restartButton = document.getElementById("restart");
// let resumeButton=document.getElementById("resume");
// let resetButton=document.getElementById("reset");
// let inputOne = document.getElementById("min").value.trim();;
// let inputTwo = document.getElementById("sec").value.trim();;
// let seconds = 0;
// let intervalId = null;

// function updateTimer() {
//   let minutes = Math.round(seconds / 60);
//   let remainingSeconds = seconds % 60;
//   let minutesDisplay = minutes < 10 ? "0" + minutes : minutes;
//   let secondsDisplay =
//     remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;
//   timerElement.textContent = ${minutesDisplay}:${secondsDisplay};

const Clock = {
  totalSeconds: 0,
  start: function () {
    if (!this.interval) {
      const self = this;
      function pad(val) {
        return val > 9 ? val : "0" + val;
      }
      this.interval = setInterval(function () {
        self.totalSeconds += 1;

        document.getElementById("min").innerHTML = pad(
          Math.floor((self.totalSeconds / 60) % 60)
        );
        document.getElementById("sec").innerHTML = pad(
          parseInt(self.totalSeconds % 60)
        );
      }, 1000);
    }
  },

  reset: function () {
    Clock.totalSeconds = null;
    clearInterval(this.interval);
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    delete this.interval;
  },
  pause: function () {
    clearInterval(this.interval);
    delete this.interval;
  },

  resume: function () {
    this.start();
  },

  restart: function () {
    this.reset();
    Clock.start();
  },
};

document.getElementById("start").addEventListener("click", function () {
  Clock.start();
});
document.getElementById("pause").addEventListener("click", function () {
  Clock.pause();
});
document.getElementById("resume").addEventListener("click", function () {
  Clock.resume();
});
document.getElementById("reset").addEventListener("click", function () {
  Clock.reset();
});
document.getElementById("restart").addEventListener("click", function () {
  Clock.restart();
});
