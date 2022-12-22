const select = document.querySelector("#select");
const firstInput = document.querySelector("#first-input"),
      secondInput = document.querySelector("#second-input");
const path = "data.json";
const selectedValue = document.querySelector("#selected-value");

const request = new XMLHttpRequest();
request.open("GET", path);
request.setRequestHeader("Content-Type", "application/json");
request.send();
request.addEventListener("load", () => {
    const requestResponse = JSON.parse(request.response);
    for (const key in requestResponse) {
        const option = document.createElement("option");
        option.textContent = key;
        option.value = requestResponse[key];
        select.append(option);
        selectedValue.textContent = select.options[select.selectedIndex].textContent;
    }
})

const changeValue = (input = firstInput) => {
    if (input.id === "second-input") {
        const convertedValue = Math.floor(input.value * select.value * 100) / 100;
        firstInput.value = convertedValue;
    } else {
        const convertedValue = Math.floor(input.value / select.value * 100) / 100;
        secondInput.value = convertedValue;
    }
}

firstInput.addEventListener("input", () => changeValue())
secondInput.addEventListener("input", () => changeValue(secondInput))
select.addEventListener("input", () => {
    changeValue();
    selectedValue.textContent = select.options[select.selectedIndex].textContent;
})
