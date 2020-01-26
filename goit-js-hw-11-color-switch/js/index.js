import {
    colors
} from './colors.js';

const body = document.querySelector('body');
const startButton = document.querySelector('button[data-action="start"');
const stopButton = document.querySelector('button[data-action="stop"');

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const colorChanger = {
    isActive: true,

    start() {
        if (this.isActive) {
            return
        };

        console.log('tt');

        this.isActive = true;
        this.intervalColorChanger = setInterval(() => {
            body.setAttribute(
                'style',
                'background-color:' + `${colors[randomIntegerFromInterval(0, 5)]}`,
            );
        }, 1000);
    },

    stop() {
        console.log('yo');

        clearInterval(this.intervalColorChanger);
        this.isActive = false;
    }
};

startButton.addEventListener('click', colorChanger.start);

stopButton.addEventListener('click', colorChanger.stop);