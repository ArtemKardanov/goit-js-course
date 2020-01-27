import {
    colors
} from './colors.js';

const body = document.querySelector('body');
const startButton = document.querySelector('button[data-action="start"');
const stopButton = document.querySelector('button[data-action="stop"');

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalColorChanger

const colorChanger = {
    isActive: true,

    start() {
        if (this.isActive) {
            return
        };

        this.isActive = true;
        intervalColorChanger = setInterval(() => {
            body.setAttribute(
                'style',
                'background-color:' + `${colors[randomIntegerFromInterval(0, 5)]}`,
            );
        }, 1000);
    },

    stop() {
        clearInterval(intervalColorChanger);
        this.isActive = false;
    }
};

startButton.addEventListener('click', colorChanger.start);
stopButton.addEventListener('click', colorChanger.stop);