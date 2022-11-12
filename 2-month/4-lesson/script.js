// console.dir(document);
// console.log(document);

// window.alert("HI");
// window.confirm("Hello");

// document.body.style.background = "red";

// const hello = document.getElementById("hello");
// hello.textContent = "Hello from JS";


// const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//     alert("Hello from click");
// });

// const x = document.querySelector("#posX");
// const y = document.querySelector("#posY");

// window.addEventListener("mousemove", (evt) => {
//     x.textContent = evt.screenX
//     y.textContent = evt.screenY
// })

// const text = document.getElementsByClassName("div");
// console.log(text); => HTMLcollection

// const text = document.querySelector(".div");
// console.log(text); => element

// const text = document.querySelectorAll(".div");
// for (let i = 0; i < text.length; i++) {
//     const element = text[i];
//     element.addEventListener("click", () => {
//         document.body.style.background = element.textContent;
//     })
// }





// flter() ///////////////////////////
// const fruits = ['apple', 'banana', 'pineapple', 'pear', 'peach', 'grape'];

// const result = fruits.filter(fruit => fruit.length > 4);

// console.log(fruits);
// console.log(result);
// Возврщает массив подходящй под условия в скобках



// map() //////////////////////////////
// const numbers = [1, 2, 5, 23, 53, 3, 7, 5];

// const newNumbers = numbers.map(num => num * 2);

// console.log(numbers);
// console.log(newNumbers);
// Производит манипуляции с каждым элементом и возвращает в новый массив


// forEach() //////////////////////////
// const numbers = [1, 2, 5, 23, 53, 3, 7, 5];

// let count = 0;

// numbers.forEach(element => {
//     console.log(element);
//     count++;
// });
// с каждым элементом производит манипуляции записанные в функцию


// slice() /////////////////////////////
// const animals = ['ant', 'bison', 'dog', 'cat', 'duck'];

// let slicedAnimals = animals.slice(2, 3);

// console.log(animals);
// console.log(slicedAnimals);
// Обрезает массивы начиная