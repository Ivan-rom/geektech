// setTimeout

// let num = 0;

// const interval = setInterval(() => {
//     num++;
//     console.log(num);
//     if (num >= 30) {
//         clearInterval(interval);
//     }
// }, 1000);


const box = document.querySelector(".box");
const wrapper = document.querySelector(".wrapper");

const boxSize = 50;
const wrapperWidth = 530;
const wrapperHeight = 300;

box.style.width = `${boxSize}px`;
box.style.height = `${boxSize}px`;
wrapper.style.width = `${wrapperWidth}px`;
wrapper.style.height = `${wrapperHeight}px`;

let posX = 0,
    posY = 0;
let moveVertival = "bottom",
    moveHorizontal = "right";

function changePosition(x, y) {
    if (x === "left") {
        posX--;
    } else {
        posX++;
    }

    if (y === "top") {
        posY--;
    } else {
        posY++;
    }
}

function moveBlock() {
    if (posX === wrapperWidth - boxSize) {
        moveHorizontal = "left";
    } else if (posX === 0) {
        moveHorizontal = "right";
    }
    if (posY === wrapperHeight - boxSize) {
        moveVertival = "top";
    } else if (posY === 0) {
        moveVertival = "bottom";
    }

    changePosition(moveHorizontal, moveVertival);

    box.style.left = `${posX}px`;
    box.style.top = `${posY}px`;
}
const interval = setInterval(moveBlock, 0);