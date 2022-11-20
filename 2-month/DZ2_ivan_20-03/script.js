const emptyArray = [];
for (let i = 0; i <= 10; emptyArray.push(i), i++);
console.log(emptyArray);

for (let i = 20; i >= 0; console.log(i), i--);

const trafficLight = () => {
    const color = prompt("Введите цвет светофора (красный, желтый, зелёный):").trim().toLocaleLowerCase();
    switch (color) {
        case "красный":
            alert("стоп");
            break;
        case "желтый":
            alert("ждем");
            break;
        case "зелёный":
            alert("едем");
            break;
        default:
            alert("Нужно было ввести один из этих цветов: красный, желтый, зелёный");
            trafficLight();
    }
};
trafficLight();