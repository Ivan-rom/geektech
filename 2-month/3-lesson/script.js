function someCalc (word) {
    return console.log(word);
}

function someCalculate(a, b) {
    return console.log(a + b);
}

// function declaration                                         |
// sayHi(); => может вызваться но не по структуре               |
// function sayHi() {                                           |
//     console.log("Hi");                                       |
// }                                                            |
// sayHi(); => может вызваться                                  |

// function expression                                          |
// helloWorld(); => не можем вызвать                            |
// var helloWorld = function () { .                             | более правильный вариант
//      console.log("hello world");                             | так как по структуре нельзя 
// }                                                            | вызывать функцию до ее объявления
// helloWorld(); => можем вызвать функцию                       |

// arrow function                                               |
// var doSomething = () => {                                    | то же самое что и
//     console.log("Hello I`m arrow function");                 | function expression 
// }                                                            | но более локанично
// doSomething();                                               |

// замыкания
// function init() {                                            |
//     let name = "name";                                       | используется для предотвращений ошибок
//     function dipslayName() {                                 | так как  переменная  name видна только в пределах
//         console.log(name);                                   | функции init
//     }                                                        |
//     dipslayName();                                           |
// }                                                            |


// var userAge = Number(prompt("Введите возраст: "));           | конструкция switch case по сути замена  if else
// switch (userAge) {                                           | ее проблема в том что данные должны только строго
//     case 18:                                                 | совпадать
//         alert("Вход разрешен");                              |
//         break;                                               |
//     case 16:                                                 |
//         alert("Доступ запрещен, ты еще подросток");          |
//         break;                                               |
//     case 12:                                                 |
//         alert("Ты еще малыш");                               |
//         break;                                               |
//     default:                                                 |
//         alert("Доступ запрещен");                            |
//         break;                                               |
// }                                                            |

var checkAge = () => {
    var userAge = Number(prompt("Введите Ваш возраст:"));

    if (userAge >= 18) {
        alert("Вход разрешен");
    } else if (userAge > 0 && userAge < 18) {
        alert("Вход запрещен, ты еще слишком мал");
    } else {
        alert("Неправильно введен возраст");
        checkAge();
    }
}

// ES5
var a;

// ES6
let b;
const c = 0;

function inner() {
    let some = 0;
}
console.log(some);