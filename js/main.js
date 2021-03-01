class CountdownTimer {
  constructor(settings) {
    this.targetDate = settings.targetDate;
    this.selectorRef = document.querySelector(settings.selector),
    this.refs = {
      daysRef: this.selectorRef.querySelector("[data-value='days']"),
      hoursRef: this.selectorRef.querySelector("[data-value='hours']"),
      minsRef: this.selectorRef.querySelector("[data-value='mins']"),
      secsRef: this.selectorRef.querySelector("[data-value='secs']"),
    };
    this.init();
  }

  init() {
    setInterval(() => {
      const timer = this.updateClockface(this.targetDate - Date.now());
      this.render(timer);
    }, 1000);
  }

  updateClockface(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }

  render({ days, hours, mins, secs }) {
    this.refs.daysRef.textContent = days;
    this.refs.hoursRef.textContent = hours;
    this.refs.minsRef.textContent = mins;
    this.refs.secsRef.textContent = secs;
  }
}

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Mar 7, 2021"),
});