// Regular Expressions регулярные выражения
// const str = "ssZzzSabHSs";

// const regExp = new RegExp("s", "gi");

// ES6
// const regExp = /s/gi;

// console.log(str.match(regExp));
// console.log(str.replace(regExp, "*"));

// Practice
const input = document.getElementById("phone");
const checkbtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const phoneRegExp = /^\+996\d{3} \d{2}-\d{2}-\d{2}$/;

checkbtn.addEventListener("click", () => {
    if (phoneRegExp.test(input.value)) {
        result.textContent = "Success";
        result.style.color = "green";
    } else {
        result.textContent = "Fail";
        result.style.color = "red";
    }
});



// Recursions
// for (let i = 0; i < 100; i++) {
//     console.log(i);
// }

let num = 0;
let field = ``;

function rec1() {
    console.log(num);
    num++;
    if (num <= 100) {
        rec1();
    }
}
// rec1();

function rec2() {
    field += `${num} `;
    console.log(field);
    num++;
    if (num <= 30) {
        rec2();
    }
}
// rec2();


const people = {
    "John": {
        age: 45,
        parents: {
            "Fred": {
                age: 65,
            },
            "Mary": {
                age: 63,
                parents: {
                    "Mark": {
                        age: 83,
                    },
                    "Lisa": {
                        age: 80,
                    }
                }
            }
        },
    },
    "Sam": {
        age: 18,
        parents: {
            "Alex": {
                age: 40,
            },
            "April": {
                age: 39,
            }
        },
    },
};

function peopleList(object) {
    for (const key in object.parents) {
        console.log(key);
        peopleList(object.parents[key]);
    }
}

for (const key in people) {
    console.log(key);
    peopleList(people[key]);
}
