const link = "https://jsonplaceholder.typicode.com/todos";
const getButton = document.querySelector("#get");
const todoList = document.querySelector("#todo-list");
const modal = document.querySelector(".modal");
const modalBlock = document.querySelector(".modal-block");
const modalText = document.querySelector(".modal-text");
const addButton = document.querySelector("#add");
const form = document.querySelector("form");
const formModal = document.querySelector(".form-modal");
const closeButton = document.querySelector("#close");
const textarea = document.querySelector("#title");

const sendRequest = (url, method = "GET", body, headers = {"Content-Type": "application/json"}) => {
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {
        return response.json()
    })
}

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.classList.add(className);
    return element;
}

const completeTask = li => {
    modalLoading();
    const patchLink = link + "/" + li.id;
    sendRequest(patchLink, "PATCH", {completed: true})
        .then(() => {
            modalSuccess();
            li.classList.remove("unfinished");
            li.classList.add("finished");
        })
        .catch(() => modalError())
        .finally(() => modalHide());
}

const deleteTask = li => {
    modalLoading();
    const patchLink = link + "/" + li.id;
    sendRequest(patchLink, "DELETE")
        .then(() => {
            modalSuccess();
            li.remove();
        })
        .catch(() => modalError())
        .finally(() => modalHide());
}

const modalLoading = () => {
    modal.classList.add("shown");
    modalBlock.classList.add("loading");
    modalText.textContent = "Загрузка...";
}

const modalSuccess = () => {
    modalBlock.classList.add("success");
    modalText.textContent = "Успех!";
}

const modalError = () => {
    modalBlock.classList.add("error");
    modalText.textContent = "Ошибка!";
}

const modalHide = () => {
    setTimeout(() => {
        modalBlock.classList.remove("error");
        modalBlock.classList.remove("success");
        modal.classList.remove("shown");
    }, 2000);
}

const createTask = todo => {
    let li;
    const button = createElement("button", "todo-button");
    const p = createElement("p", "todo-text");
    
    if (todo.completed) {
        li = createElement("li", "finished");
        button.addEventListener("click", () => {
            deleteTask(li);
        })
    } else {
        li = createElement("li", "unfinished");
        button.addEventListener("click", () => {
            completeTask(li);
            button.addEventListener("click", () => {
                deleteTask(li);
            });
        })
    }
    li.id = todo.id;

    p.textContent = todo.title;
    li.append(button, p);

    return li;
}

getButton.addEventListener("click", () => {
    modalLoading();
    todoList.innerHTML = "";
    sendRequest(link)
        .then(todos => {
            modalSuccess();
            addButton.classList.remove("hidden");
            todos.forEach(todo => {
                const task = createTask(todo);
                todoList.append(task);
            });
        })
        .catch(() => {
            modalError();
            addButton.classList.add("hidden");
        })
        .finally(() => {
            modalHide();
        });
})

addButton.addEventListener("click", () => formModal.classList.add("shown"))
closeButton.addEventListener("click", () => formModal.classList.remove("shown"))

form.addEventListener("submit", e => {
    e.preventDefault();
    modalLoading();
    const body = {
        title: textarea.value,
        completed: false
    }
    sendRequest(link, "POST", body)
        .then(response => {
            modalSuccess();
            const task = createTask(response);
            todoList.prepend(task);
        })
        .catch(() => modalError())
        .finally(() => modalHide());
    formModal.classList.remove("shown");
})