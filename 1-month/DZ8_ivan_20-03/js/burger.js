var openButton = document.getElementById("burger__button");
var closeButton = document.getElementById("burger__close");
var burger = document.getElementById("burger");

openButton.addEventListener("click", () => {
    burger.classList.add("active");
})

closeButton.addEventListener("click", () => {
    burger.classList.remove("active");
})