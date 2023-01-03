//// ============AJAX==================

////-----CallBack Hell---------------
// console.log("Загрузка данных...");
// setTimeout(() => {
//     console.log("Запрос на сервер");
//     const product = {
//         name: "Banana",
//         price: 25,
//     }

//     setTimeout(() => {
//         product.order = "ordered";

//         setTimeout(() => {
//             console.log(product);
//         }, 2000);
//     }, 2000);
// }, 2000);
////---------------------------------

//// ------Promise-------------------
// const request = new Promise((resolve, reject) => {
//     const query = new XMLHttpRequest();
//     query.open("GET", "https://jsonplaceholder.typicode.com/users");
//     query.setRequestHeader("Content-Type", "application/json");
//     query.send();
//     query.addEventListener("load", () => {
//         resolve(query.response);
//         reject();
//     });
// }).then(users => {
//     return new Promise((resolve, reject) => {
//         console.log(users);
//         resolve(users);
//         reject();
//     })
// }).then(usersString => {
//     return new Promise((resolve, reject) => {
//         const usersParsed = JSON.parse(usersString);
//         console.log(usersParsed);
//         resolve(usersParsed);
//         reject();
//     })
// }).then(usersAll => {
//     usersAll.forEach(user => {
//         console.log(user.name);
//     });
// });

// request.catch(() => {
//     console.log("Error");
// });

// request.finally(() => {
//     console.log("========================Request ends===========================");
// });


//// ==========Fetch========================
const request = fetch("https://jsonplaceholder.typicode.com/users");
request.then((users) => users.json())
    .then(data => data.forEach(user => console.log(user)))
    .catch(() => console.error("Server error"))
    .finally(() => console.log("======Request ends====="));