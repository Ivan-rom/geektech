const list = document.getElementById("todo_list");
const input = document.getElementById("input");
const form = document.querySelector("form");

removeTask = (button) => {
    button.addEventListener("click", (e) => {
        list.removeChild(e.target.parentElement);
    });
}

changeTask = (button, textElement) => {
    button.addEventListener("click", () => {
        textElement.textContent = prompt();
    })
}

createTask = (value) => {
    const li = document.createElement("li");
    const h3 = document.createElement("h3");
    const button = document.createElement("button");
    const changeButton = document.createElement("button");

    h3.textContent = value;

    button.textContent = "Delete";
    button.setAttribute("class", "made_button");
    removeTask(button);
    
    changeButton.textContent = "Edit";
    changeTask(changeButton, h3);

    li.append(h3);
    li.append(changeButton);
    li.append(button);
    
    return li;
}

form.onsubmit = (e) => {
    e.preventDefault();
    const inputValue = input.value.trim();
    if (inputValue != "") {
        list.append(createTask(inputValue));
    }
    input.value = "";
}