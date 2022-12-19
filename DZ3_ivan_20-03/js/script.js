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