class Cars {
    constructor(options) {
        this.model = options.model;
        this.color = options.color;
        this.wheels = options.wheels;
    }

    start() {
        console.log("Машина заведена");
    }
}

class Toyota extends Cars {
    constructor(options) {
        super(options);
        
        this.brand = "Toyota";
        this.drive = "Rear-Wheel";
    }
}

class Mercedes extends Cars {
    constructor(options) {
        super(options);
        
        this.brand = "Mercedes";
        this.drive = "Front-Wheel";
    }
}

class BMW extends Cars {
    constructor(options) {
        super(options);
        
        this.brand = "BMW";
        this.drive = "Four-Wheel";
    }
}

const car1 = new Toyota({
    model: "supra",
    color: "white",
    wheels: 4,
});

const car2 = new Mercedes({
    model: "gelenvegen",
    color: "black",
    wheels: 4,
});

const car3 = new BMW({
    model: "M3",
    color: "blue",
    wheels: 4,
});



class Light {
    constructor(activeColor) {
        this.activeColor = activeColor;
        this.deafaultColor = "#2d2d2d";
        this.$element = document.createElement("div");
        this.$element.style.backgroundColor = this.deafaultColor;
        this.$element.style.borderRadius = "50%";
        this.$element.style.width = "25px";
        this.$element.style.height = "25px";
        traficLight.append(this.$element);
    }

    activate() {
        this.$element.style.backgroundColor = this.activeColor;
    }

    disactivate() {
        this.$element.style.backgroundColor = this.deafaultColor;
    }
}

const traficLight = document.querySelector(".traffic-light");

const red = new Light("red");
const yellow = new Light("yellow");
const green = new Light("green");

const form = document.querySelector("form");
const message = document.querySelector(".message");
form.addEventListener("submit", e => {
    e.preventDefault();

    red.disactivate();
    yellow.disactivate();
    green.disactivate();

    const input = document.querySelector(".color-input").value.toUpperCase().trim();

    switch (input) {
        case "КРАСНЫЙ":
            red.activate();
            message.textContent = "STOP";
            break;
        case "ЖЕЛТЫЙ":
            yellow.activate();
            message.textContent = "WAIT";
            break;
        case "ЗЕЛЕНЫЙ":
            green.activate();
            message.textContent = "GO";
            break;
        default:
            message.textContent = "Не правильный цвет";
    }
});