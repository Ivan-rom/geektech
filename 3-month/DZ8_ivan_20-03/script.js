const link = "http://localhost:3000/todos";

const addValue = document.querySelector("#add-value");
const addForm = document.querySelector("form");
const todoList = document.querySelector(".list");

const deleteTodo = async id => {
    try {
        await fetch(`${link}/${id}`, {method: "DELETE"});
    } catch (error) {
        console.log(error.message);
    }
}

const updateTodo = async (id, status) => {
    try {
        await fetch(`${link}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                completed: !status
            })
        })
    } catch (error) {
        console.log(error.message);
    }
}

const showTodos = todos => {
    todos.forEach(todo => {
        const li = document.createElement("li");
        li.classList.add("todo");
        todo.completed && li.classList.add("done");
        li.innerHTML = `
            <h2>${todo.title}</h2>
            <div class="todo-buttons">
                <button onclick="updateTodo(${todo.id}, ${todo.completed})">Done</button>
                <button onclick="deleteTodo(${todo.id})">Delete</button>
            </div>
        `;
        todoList.append(li);
    });
}

const getAllTodos = async url => {
    try {
        const response = await fetch(url);
        const todos = await response.json();
        showTodos(todos);
    } catch (error) {
        console.log(error.message);
    }
}

getAllTodos(link);

const addTodo = async () => {
    try {
        console.log(link);
        await fetch(link, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: addValue.value,
                completed: false
            })
        })
    } catch (error) {
        console.log(error.message);
    }
}

addForm.addEventListener("submit", e => {
    e.preventDefault();
    addTodo();
})