// ================TABS=====================================
const tabContents = document.querySelectorAll(".tabcontent");
const tabButtons = document.querySelectorAll(".tabheader__item");
const tabButtonsParent = document.querySelector(".tabheader__items");

const hideTabContent = () => {
    tabContents.forEach(tabContent => tabContent.classList.remove("tabcontent_active"));
    tabButtons.forEach(tabBtn => tabBtn.classList.remove("tabheader__item_active"));
};

const showTabConent = (index = 0) => {
    tabContents[index].classList.add("tabcontent_active");
    tabButtons[index].classList.add("tabheader__item_active");
}

hideTabContent();
showTabConent();

tabButtonsParent.addEventListener("click", e => {
    const target = e.target;
    if (!target.classList.contains("tabheader__item_active")) {
        tabButtons.forEach((button, i) => {
            if (button === target) {
                hideTabContent();
                showTabConent(i);
            }
        })
    }
});

// ==============MODAL=====================================
const modal = document.querySelector(".modal")
const modalOpen = document.getElementById("modal-btn");
const modalClose = document.querySelector(".modal__close");

modalOpen.addEventListener("click", () => modal.classList.add("modal_open"));
modalClose.addEventListener("click", () => modal.classList.remove("modal_open"));



// ===============FORMS=====================================
const forms = document.querySelectorAll("form");

const messageText = {
    loading: "Загрузка...",
    success: "Все успешно сохранено!",
    error: "Что-то пошло не так!",
}

const formData = form => {
    form.addEventListener("submit", e => {
        e.preventDefault();

        const messageBlock = document.createElement("div");
        messageBlock.classList.add("message");
        messageBlock.textContent = messageText.loading;
        messageBlock.classList.add("loading");
        form.append(messageBlock);

        const formData = new FormData(form);

        const request = fetch("./php/server.php1", {
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data",
            },
            body: formData,
        })
        request.then(() => {
            messageBlock.classList.add("success");
            messageBlock.textContent = messageText.success;
        });
        request.catch(() => {
            messageBlock.classList.add("error");
            messageBlock.textContent = messageText.error;
        });
        request.finally(() => {
            messageBlock.classList.remove("loading");
            setInterval(() => {
                messageBlock.remove();
            }, 5000);
        });
    })
}

forms.forEach(form => {
    formData(form);
});
