class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = document.querySelector(selector);
    this.targetDate = targetDate;

    this.refs = {
      fieldDays: this.selector.querySelector('[data-value="days"]'),
      fieldHours: this.selector.querySelector('[data-value="hours"]'),
      fieldMins: this.selector.querySelector('[data-value="mins"]'),
      fieldSecs: this.selector.querySelector('[data-value="secs"]'),
    };

    this.updateTimer();
  }
  updateTimer() {
    setInterval(() => {
      this.startTime = Date.now();
      this.endTime = this.targetDate.getTime() - this.startTime;

      this.days = pad(Math.floor(this.endTime / (1000 * 60 * 60 * 24)));
      this.hours = pad(
        Math.floor((this.endTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      );
      this.mins = pad(
        Math.floor((this.endTime % (1000 * 60 * 60)) / (1000 * 60)),
      );
      this.secs = pad(Math.floor((this.endTime % (1000 * 60)) / 1000));

      this.refs.fieldDays.textContent = this.days;
      this.refs.fieldHours.textContent = this.hours;
      this.refs.fieldMins.textContent = this.mins;
      this.refs.fieldSecs.textContent = this.secs;
    }, 1000);
    function pad(value) {
      return String(value).padStart(2, '0');
    }
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Mar 27, 2021'),
});
