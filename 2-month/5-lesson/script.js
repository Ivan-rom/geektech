const list = document.getElementById("todo_list");
const input = document.getElementById("input");
const form = document.querySelector("form");

removeTask = (button) => {
    button.addEventListener("click", (e) => {
        list.removeChild(e.target.parentElement);
    });
}

changeSubmit = (element, form, input) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const h3 = document.createElement("h3");
        h3.textContent = input.value;
        element.removeChild(form);
        element.prepend(h3);

    });
}

changeTask = (button, element, textElement) => {
    button.addEventListener("click", () => {
        const changeForm = document.createElement("form");
        const changeInput = document.createElement("input");
        const submitButton = document.createElement("input");

        changeForm.setAttribute("method", "#");
        changeInput.setAttribute("type", "text");
        submitButton.setAttribute("type", "submit");

        element.removeChild(textElement);
        changeInput.value = textElement.textContent;

        changeForm.append(changeInput);
        changeForm.append(submitButton);

        changeSubmit(element, changeForm, changeInput);

        element.prepend(changeForm);
    })
}

createTask = (value) => {
    const li = document.createElement("li");
    const h3 = document.createElement("h3");
    const button = document.createElement("button");
    const changeButton = document.createElement("button");

    h3.textContent = value;

    button.textContent = "Made!";
    button.setAttribute("class", "made_button");
    removeTask(button);
    
    changeButton.textContent = "Change";
    changeTask(changeButton, li, h3);

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