const form = document.querySelector("form");
const input = document.querySelector("#input");
const list = document.querySelector("ul");
const listOfStrings = [];

const reverseString = () => {
    const inputValue = input.value;
    const value = [];
    for (let i = 0; i < inputValue.length; i++) {
        value.push(inputValue[i]);
    }
    const reverseValue = value.reverse();
    let text = "";
    reverseValue.map(symbol => {
        text += symbol;
    })
    return text;
};

const printStrings = () => {
    list.innerHTML = "";
    listOfStrings.map(string => {
        const li = document.createElement("li");
        li.textContent = string;
        list.prepend(li);
    })
};

form.addEventListener("submit", e => {
    e.preventDefault();
    listOfStrings.push(reverseString());
    printStrings();
    input.value = "";
})