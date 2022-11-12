var emptyArray = [];
for (let i = 0; i <= 10; i++) {
    emptyArray.push(i);
}

for (let i = 20; i >= 0; i--) {
    console.log(i);
}

function trafficLight() {
    var color = prompt("Введите цвет светофора (красный, желтый, зелёный):");
    if (color === "красный") {
        alert("стоп");
    } else if (color === "желтый") {
        alert("ждем");
    } else if (color === "зелёный") {
        alert("едем");
    } else {
        alert("Нужно было ввести один из этих цветов: красный, желтый, зелёный");
        trafficLight();
    }
};
trafficLight();