// ES5
// undefined
// var variable; => undefined

// null
// var someVar = null;

// number
// var number = 32;
// console.log(typeof number); => number
// typeof - оператор для пыявления типа данных

// Array (Массив)
// var arr = [1, "string", true, 4, ["inner", "array"], "end"];

// ES6
// var arr2 = [1, 2, 3, 4]

// var obj = {
//     name: "Ivan",
//     id: 1,
// };

// ES5
// var arr3 = new Array([1, 2, 3, 4]);
// var obj = new Object({
//     name: "Ivan",
//     id: 1,
// });
// console.log("Имя пользователя: " + obj.name + "\nID пользователя: " + obj.id);       // конкатенация строк


var count = 0;
var array = [2, 4, 45, 2, 3, 5];
// loops

// 1 while
// while (count < 10) {
//     console.log(count++);
// }

// 2 do while
// do {
//     console.log(count++);
// } while (count <= 10);

// 3 for
// ES5
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// 4 for of
// ES6
// for (const item of array) {
//     console.log(item);
// }

// переопределение
// var someone = 0;
// console.log(someone);

// someone = 10;
// console.log(someone);

//методы массивов
// var newArr = [2, 3];

// newArr.push(1);       // добавляет элемент в конец массива
// newArr.unshift(12);   // добавляет элемент в начало массива

// console.log(newArr);

// newArr.pop();         // извлекает элемент из конца массива
// newArr.shift();       // извлекает элемент из начала массива
// delete newArr[2];     // заменят эелемент на empty  ES5
// console.log(newArr);




var obj = {
    string: "some str",
    "key": 42,
    21: false,
    sayHi() {
        console.log("hi");
    },
    about: ["1", 23],
    [null]: {
        name: "Ivan"
    },
};

// console.log(obj["null"].name);


// 5 for in
for (const key in obj) {
    // console.log(obj[key]);       // вызов всех элементов объекта
    console.log(`Ключ объекта: ${key} \nЗначение ключа: ${obj[key]}`);     // интерполяция строк
}