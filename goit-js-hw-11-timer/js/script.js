class CountdownTimer {
    constructor({
        selector,
        targetDate
    }) {
        this.selector = selector;
        this.targetDate = targetDate;

        this.refs = {
            daysValue: document.querySelector(`${this.selector} [data-value="days"]`),
            hoursValue: document.querySelector(`${this.selector} [data-value="hours"]`),
            minsValue: document.querySelector(`${this.selector} [data-value="mins"]`),
            secsValue: document.querySelector(`${this.selector} [data-value="secs"]`),
        };

        this.timerId = setInterval(() => {
            const nowTime = Date.now();
            this.remainTime = this.targetDate - nowTime;

            this.updateClockFace(this.remainTime);
        }, 1000);

    };

    updateClockFace(time) {
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);

        this.refs.daysValue.textContent = `${days}`;
        this.refs.hoursValue.textContent = `${hours}`;
        this.refs.minsValue.textContent = `${minutes}`;
        this.refs.secsValue.textContent = `${secs}`;
    }
};

new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('March 26, 2020, 20:20'),
});