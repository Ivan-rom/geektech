const wrapper = document.querySelector(".wrapper");

wrapper.addEventListener("click", e => {
    const wrapperChildren = wrapper.children;
    for (let i = 0; i < wrapperChildren.length; i++) {
        const child = wrapperChildren[i];
        if (child != e.target) {
            child.classList.remove("button-active");
        }
    }
    if (e.target.tagName === "BUTTON") {
        e.target.classList.toggle("button-active");
    }
})

const newButton = document.createElement("button");
wrapper.append(newButton);