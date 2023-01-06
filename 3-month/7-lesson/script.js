const button = document.querySelector("#button");
const wrapper = document.querySelector(".wrapper");
const forms = document.querySelectorAll("form");

const getData = url => {
    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(data => {
        return data.json()
    })
    .catch(err => console.error("SERVER ERROR: ", err))
}

const show = content => {
    content.forEach(element => {
        const block = document.createElement("div");
        block.style = `
            width: 200px;
            border: 1px solid green
        `
        block.innerHTML = `
            <div class="content">
                <h2 class="h2">${element.title}</h2>
            </div>
        `
        wrapper.append(block);
    })
}

const postData = form => {
    form.addEventListener("submit", e => {
        e.preventDefault();

        const formData = new FormData(form);
        const obj = {}
        
        formData.forEach((value, key) => {
            obj[key] = value;
        });

        try {
            fetch('http://localhost:3000/requests', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(obj),
            })
        } catch {
            console.log("error");
        } finally {
            console.log("Request ends===");
        }
    })
}






// async await      try catch

const getData2 = async url => {
    try {
        const response = await fetch(url, {method: "GET"})
        const result = await response.json();
        show(result);
    } catch {
        console.log("Error");
    } finally {
        console.log("REQUEST ENDS ===");
    }
}

// =================================





button.addEventListener("click", () => {
    getData2("http://localhost:3000/menu")
        // .then(res => show(res))
})

forms.forEach(form => postData(form));