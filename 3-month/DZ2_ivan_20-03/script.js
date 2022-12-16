const box = document.querySelector(".box");
const wrapper = document.querySelector(".wrapper");
const animationStart = document.getElementById("animationS");
const animationEnd = document.getElementById("animationE");

let boxSize = 50;
let wrapperWidth = 530;
let wrapperHeight = 300;

box.style.width = `${boxSize}px`;
box.style.height = `${boxSize}px`;
wrapper.style.width = `${wrapperWidth}px`;
wrapper.style.height = `${wrapperHeight}px`;

let posX = 0,
    posY = 0;

function move() {
    box.style.left = `${posX}px`;
    box.style.top = `${posY}px`;

    if (posY >= 0 && posY < wrapperHeight - boxSize && posX === wrapperWidth - boxSize) {
        posY++;
    } else if (posX > 0 && posX <= wrapperWidth - boxSize && posY === wrapperHeight - boxSize) {
        posX--;
    } else if (posY > 0 && posY <= wrapperHeight - boxSize && posX === 0) {
        posY--;
    } else if (posX >= 0 && posY === 0) {
        posX++;
    }
}

let animationInterval;

animationStart.addEventListener("click", () => {
    animationInterval = setInterval(move, 1);
});

animationEnd.addEventListener("click", () => {
    clearInterval(animationInterval);
});
// =============================================================================================
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const timerStart = document.getElementById("timerS");
const timerEnd = document.getElementById("timerE");
const timerReboot = document.getElementById("timerR");

let secondsInterval;
let minutesInterval;
let hoursInterval;

let seconds = 0;
let minutes = 0;
let hours = 0;

timerStart.addEventListener("click", () => {
    secondsInterval = setInterval(() => {
        seconds++;
        seconds < 10 ? secondsElement.textContent = `0${seconds}` : secondsElement.textContent = seconds;
        seconds === 60 ? secondsElement.textContent = `00` : false;
    }, 1_000);
    minutesInterval = setInterval(() => {
        seconds = 0;
        minutes++;
        minutes < 10 ? minutesElement.textContent = `0${minutes}` : minutesElement.textContent = minutes;
        minutes === 60 ? minutesElement.textContent = `00` : false;
    }, 60_000);
    hoursInterval = setInterval(() => {
        seconds = 0;
        minutes = 0;
        hours++;
        hours < 10 ?  hoursElement.textContent = `0${hours}` : hoursElement.textContent = hours;
    }, 3_600_000);
});

timerEnd.addEventListener("click", () => {
    clearInterval(secondsInterval);
    clearInterval(minutesInterval);
    clearInterval(hoursInterval);
});

timerReboot.addEventListener("click", () => {
    clearInterval(secondsInterval);
    clearInterval(minutesInterval);
    clearInterval(hoursInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    secondsElement.textContent = `0${seconds}`;
    minutesElement.textContent = `0${minutes}`;
    hoursElement.textContent = `0${hours}`;
});