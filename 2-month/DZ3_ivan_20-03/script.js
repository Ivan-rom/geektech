// Первое задание ////////////////
const minimalNumber = (a, b) => {
    if (a < b) {
        console.log(a);;
    } else if (b < a) {
        console.log(b);;
    } else {
        console.log("Числа равны");
    }
}
const x = Number(prompt("Введите первое число:"));
const y = Number(prompt("Введите второе число:"));
minimalNumber(x, y);

// Второе задание //////////////////
const stringLength = string => console.log(string.length);
stringLength(prompt("Введите строку:"));

// Третье задание//////////////////////
const calculator = () => {
    const a = Number(prompt("Введите первые число:"));
    const b = Number(prompt("Введите второе число:"));

    console.log(`Результат сложения:\n${a + b}`);
    console.log(`Результат вычитания:\n${a - b}`);
    if (b === 0) {
        console.log("На ноль делить нельзя");
    } else {
        console.log(`Результат деления:\n${a / b}`);
    }
    console.log(`Результат умножения:\n${a * b}`);
}
calculator();