const refs = {
  daysRef: document.querySelector("[data-value='days']"),
  hoursRef: document.querySelector("[data-value='hours']"),
  minsRef: document.querySelector("[data-value='mins']"),
  secsRef: document.querySelector("[data-value='secs']"),
};

const targetDate = new Date("Mar 7, 2021");

const timer = {
  start() {
    setInterval(() => {
      const timeA = updateClockface(targetDate - Date.now());
      setTime(timeA);
    }, 1000);
  },
};

timer.start();

function updateClockface(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  return { days, hours, mins, secs };
}

function pad(value) {
  return String(value).padStart(2, "0");
}

function setTime({ days, hours, mins, secs }) {
  refs.daysRef.textContent = days;
  refs.hoursRef.textContent = hours;
  refs.minsRef.textContent = mins;
  refs.secsRef.textContent = secs;
}

// new CountdownTimer({
//   selector: "#timer-1",
//   targetDate: new Date("Mar 7, 2021"),
// });
