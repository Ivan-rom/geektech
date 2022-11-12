// counter /////////////////////////////////////////////////
var btnPlus = document.querySelector(".counter-plus");    //
var btnMinus = document.querySelector(".counter-minus");  //
var counterText = document.querySelector(".counter");     //
btnPlus.addEventListener("click", () => {                 //
    counterText.style.color = "green";                    //
    counterText.textContent++;                            //
});                                                       //
btnMinus.addEventListener("click", () => {                //
    counterText.style.color = "red";                      //
    if (counterText.textContent != 0) {                   //
        counterText.textContent--;                        //
    }                                                     //
});                                                       //
////////////////////////////////////////////////////////////

// mouseChecker ////////////////////////////////////////////
var xCords = document.querySelector(".x-cords");          //
var yCords = document.querySelector(".y-cords");          //
var mouseBlock = document.querySelector(".mouse");        //
mouseBlock.addEventListener("mousemove", (evt) => {       //
    xCords.textContent = evt.x;                           //
    yCords.textContent = evt.y;                           //
});                                                       //
////////////////////////////////////////////////////////////

// traffic light ///////////////////////////////////////////
var red = document.querySelector(".red");                 //
var yellow = document.querySelector(".yellow");           //
var green = document.querySelector(".green");             //
var form = document.querySelector("form");                //
var message = document.querySelector(".message");         //
form.addEventListener("submit", (evt) => {                //
    // отмена отправки формы                              //
    evt.preventDefault();                                 //
    // установка дефолтного цвета                         //
    red.style.backgroundColor = "#2d2d2d";                //
    yellow.style.backgroundColor = "#2d2d2d";             //
    green.style.backgroundColor = "#2d2d2d";              //
    // получение значения из инпута со всеми вариантами   //
    var input = document.querySelector(".color-input").value.toUpperCase().trim();
    // логика программы                                   //
    if (input === "КРАСНЫЙ") {                            //
        red.style.backgroundColor = "red";                //
        message.textContent = "STOP";                     //
    } else if (input === "ЖЕЛТЫЙ") {                      //
        yellow.style.backgroundColor = "yellow";          //
        message.textContent = "WAIT";                     //
    } else if (input === "ЗЕЛЕНЫЙ") {                     //
        green.style.backgroundColor = "green";            //
        message.textContent = "GO";                       //
    } else {                                              //
        message.textContent = "Не правильный цвет";       //
    }                                                     //
});                                                       //
////////////////////////////////////////////////////////////