// =======JSON==============================
const obj = {
    age: 20,
};

// console.log(obj);

const strobj = JSON.stringify(obj);
const parseobj = JSON.parse(strobj);

// console.log(parseobj);


// =======XML Requests======================
const requestButton = document.querySelector("#request-btn");
const requestTable = document.querySelector("#request-table");
const link = "data.json";

requestButton.addEventListener("click", () => {
    const request = new XMLHttpRequest();
    request.open("GET", link);
    request.setRequestHeader("Content-Type", "application/json");
    request.send();

    request.addEventListener("load", () => {
        requestTable.innerHTML = 
        `<tr>
            <td>Name</td>
            <td>Age</td>
        </tr>`
        const data = JSON.parse(request.response);
        data.forEach(element => {
            const tr = document.createElement("tr");

            const tdName = document.createElement("td");
            const tdAge = document.createElement("td");

            tdName.textContent = element.name;
            tdAge.textContent = element.age;

            tr.append(tdName, tdAge);

            requestTable.append(tr);
        });
    })
});
