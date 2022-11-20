const list = document.getElementById("todo_list");
const input = document.getElementById("input");
const form = document.querySelector("form");

createTask = value => {
    const li = document.createElement("li");
    const h3 = document.createElement("h3");
    const button = document.createElement("button");
    const changeButton = document.createElement("button");

    h3.textContent = value;

    button.textContent = "Delete";
    button.classList.add("made_button");
    button.onclick = () => list.removeChild(li);
    
    changeButton.textContent = "Edit";
    changeButton.onclick = () => {
        const newText = prompt(`Editing\n${h3.textContent}:`).trim();
        newText != "" ? h3.textContent = newText : false;
    };

    li.append(h3, changeButton, button);
    list.append(li);
}

form.onsubmit = (e) => {
    e.preventDefault();
    input.value.trim() != "" ? createTask(input.value.trim()) : false;
    input.value = "";
}