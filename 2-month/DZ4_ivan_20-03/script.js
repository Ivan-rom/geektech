// counter /////////////////////////////////////////////////
const btnPlus = document.querySelector(".counter-plus");  //
const btnMinus = document.querySelector(".counter-minus");//
const counterText = document.querySelector(".counter");   //
btnPlus.addEventListener("click", () => {                 //
    counterText.style.color = "green";                    //
    counterText.textContent++;                            //
});                                                       //
btnMinus.addEventListener("click", () => {                //
    counterText.style.color = "red";                      //
    counterText.textContent != 0 ? counterText.textContent-- : false;
});                                                       //
////////////////////////////////////////////////////////////

// mouseChecker ////////////////////////////////////////////
const xCords = document.querySelector(".x-cords");        //
const yCords = document.querySelector(".y-cords");        //
const mouseBlock = document.querySelector(".mouse");      //
mouseBlock.addEventListener("mousemove", e => {           //
    xCords.textContent = e.x;                             //
    yCords.textContent = e.y;                             //
});                                                       //
////////////////////////////////////////////////////////////

// traffic light ///////////////////////////////////////////
const red = document.querySelector(".red");               //
const yellow = document.querySelector(".yellow");         //
const green = document.querySelector(".green");           //
const form = document.querySelector("form");              //
const message = document.querySelector(".message");       //
form.addEventListener("submit", e => {                    //
    // отмена отправки формы                              //
    e.preventDefault();                                   //
    // установка дефолтного цвета                         //
    red.style.backgroundColor = "#2d2d2d";                //
    yellow.style.backgroundColor = "#2d2d2d";             //
    green.style.backgroundColor = "#2d2d2d";              //
    // получение значения из инпута со всеми вариантами   //
    const input = document.querySelector(".color-input").value.toUpperCase().trim();
    // логика программы                                   //
    switch (input) {                                      //
        case "КРАСНЫЙ":                                   //
            red.style.backgroundColor = "red";            //
            message.textContent = "STOP";                 //
            break;                                        //
        case "ЖЕЛТЫЙ":                                    //
            yellow.style.backgroundColor = "yellow";      //
            message.textContent = "WAIT";                 //
            break;                                        //
        case "ЗЕЛЕНЫЙ":                                   //
            green.style.backgroundColor = "green";        //
            message.textContent = "GO";                   //
            break;                                        //
        default:                                          //
            message.textContent = "Не правильный цвет";   //
    }                                                     //
});                                                       //
////////////////////////////////////////////////////////////