// setTimeout(() => {
//     console.log("after 0.5 secong");
// }, 500);

// Context

function log() {
    console.log(this);
}

const arrowFunc = () => console.log(this);

const person = {
    name: "Ivan",
    age: 17,
    log: log,
    arrowFunc: arrowFunc,
    delayLog: function () {
        setTimeout(() => {
            console.log(`${this.name}, ${this.age}`);
        }, 1000);
    }
}


// Дефолтные значения (Default state)

const defaultState = 12;

function compute(a = defaultState, b = 3) {
    return console.log(a + b);
}

// '' "" ``
const title = "Hello";
//          Не DOM ЭЛЕМЕНТ !!!!!!
const template = `
<h1 id="test" style="color: red;">${title}</h1>
` 

const people = [
    {name: "Nurdin", age: 19},
    {name: "Kairat", age: 20},
    {name: "Ivan", age: 17},
    {name: "Aida", age: 20},
    {name: "Milana", age: 15},
];

people.map(person => {
    const p = document.createElement("p");
    document.body.append(p);
    p.append(`Name: ${person.name}, Age: ${person.age}`);
})

const str = "Hello";

console.log(str.trimEnd());
console.log(str.trim());
console.log(str.trimStart());

console.log(str.startsWith("Hel"));
console.log(str.endsWith("llo"));
console.log(str.includes("llo"));

console.log(str.padStart(8, "a"));
console.log(str.padEnd(8, "a"));

console.log(str.repeat(10000));