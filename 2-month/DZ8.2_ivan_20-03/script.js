const buttons = document.querySelectorAll("main button");
const circle = document.querySelector("#circle");
const cross = document.querySelector("#cross");
const reset = document.querySelector(".reset");
var activeObj = cross;
let clickCounter = 0;
const pcStatus = document.querySelector(".pc-status");
const main = document.querySelector("main");
const pcModecheckbox = document.querySelector("#vs-pc");
let isWon = false;
const draw = document.querySelector(".draw");
const win = document.querySelector(".win");

pcModecheckbox.addEventListener('change', () => {
    if (pcModecheckbox.checked) {
        circle.disabled = false;
    } else {
        circle.disabled = true;
    }
});

const selectActiveObj = element => {
    cross.classList.remove("active");
    circle.classList.remove("active");
    element.classList.add("active");
    activeObj = element;
};

circle.addEventListener('click', () => {
    cross.disabled = true;
    circle.disabled = true;
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true; 
    }
    pcStatus.textContent = "Please wait...";
    setTimeout(() => {
        pcDoesStep();
    }, 500);
});
cross.addEventListener('click', () => {selectActiveObj(cross);cross.disabled = true;circle.disabled = true;});

const changeObj = () => activeObj == circle ? selectActiveObj(cross) : selectActiveObj(circle);

const addClickToButton = element => {
    element.addEventListener('click', () => {
        clickOnButton(element);
        if (pcModecheckbox.checked) {
            if (!isWon) {
                for (let i = 0; i < buttons.length; i++) {
                    buttons[i].disabled = true; 
                }
                pcStatus.textContent = "Please wait...";
                setTimeout(() => {
                    pcDoesStep();
                }, 500);
            }
        }
        changeObj();
    });
};

const clickOnButton = element => {
    cross.disabled = true;
    circle.disabled = true;
    pcModecheckbox.disabled = true;
    element.classList.add(activeObj.dataset.obj);
    element.disabled = true;
    element.innerHTML = activeObj.innerHTML;
    clickCounter++;
    checkForWin(activeObj.dataset.obj);
};

reset.addEventListener('click', () => clear());

const clear = () => {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("circle");
        buttons[i].classList.remove("cross");
        buttons[i].disabled = false;
        buttons[i].innerHTML = "";
    }
    isWon = false;
    clickCounter = 0;
    cross.disabled = false;
    if (pcModecheckbox.checked) {
        circle.disabled = false;
    } else {
        circle.disabled = true;
    }
    pcModecheckbox.disabled = false;
    selectActiveObj(cross);
};

const checkForWin = obj => {
    const i = buttons;
    //horizontal
    if (i[0].className == i[1].className && i[0].className == i[2].className && i[0].className == obj) {roundEnds(); isWon = true;}
    else if (i[3].className == i[4].className && i[3].className == i[5].className && i[3].className == obj) {roundEnds(); isWon = true;}
    else if (i[6].className == i[7].className && i[6].className == i[8].className && i[6].className == obj) {roundEnds(); isWon = true;}

    //vertical
    else if (i[0].className == i[3].className && i[0].className == i[6].className && i[0].className == obj) {roundEnds(); isWon = true;}
    else if (i[1].className == i[4].className && i[1].className == i[7].className && i[1].className == obj) {roundEnds(); isWon = true;}
    else if (i[2].className == i[5].className && i[2].className == i[8].className && i[2].className == obj) {roundEnds(); isWon = true;}

    //diagonal
    else if (i[0].className == i[4].className && i[0].className == i[8].className && i[0].className == obj) {roundEnds(); isWon = true;}
    else if (i[2].className == i[4].className && i[2].className == i[6].className && i[2].className == obj) {roundEnds(); isWon = true;}

    // draw
    else if (clickCounter === 9) {
        roundEnds(clickCounter);
        isWon = true;
    } else {
        isWon = false;
    }
};

const roundEnds = clickCounter => {
    if (clickCounter === 9) {
        draw.style.display = "block";
        restartGame(draw);
    } else {
        win.children[0].children[0].innerHTML = activeObj.innerHTML;
        document.querySelector("#"+activeObj.dataset.obj+"-score").textContent++;
        win.style.display = "block";
        restartGame(win);
    }
};

const restartGame = element => {
    element.addEventListener('click', () => {
        element.style.display = "none";
        clear();
    });
};

const pcDoesStep = () => {
    const availableButtons = [];
    const allButtons = Array.from(buttons);
    for (let i = 0; i < allButtons.length; i++) {
        if (!allButtons[i].className) {
            availableButtons.push(allButtons[i]);
            allButtons[i].disabled = true;
        }
    }
    const chosenButton = availableButtons[Math.floor(Math.random() * availableButtons.length)];
    clickOnButton(chosenButton);
    changeObj();
    pcStatus.textContent = "";
    for (let i = 0; i < availableButtons.length; i++) {
        availableButtons[i].disabled = false;
    }
    chosenButton.disabled = true;
};

for (let i = 0; i < buttons.length; i++) {
    addClickToButton(buttons[i]);
};