// const animal = {
//     name: "Animal",
//     age: 5,
//     hasTail: true,
// }

// class Animals {
//     static type = "ANIMAL";

//     constructor(options) {
//         this.name = options.name;
//         this.age = options.age;
//         this.hasTail = options.hasTail;
//     }

//     voice() {
//         console.log("I am animal!");
//     }
// }

// const animal = new Animal({
//     name: "Animal",
//     age: 5,
//     hasTail: true,
// });

// animal.voice();

// class Cats extends Animals {
//     static type = "CAT";

//     constructor(options) {
//         super(options);
//         this.color = options.color;
//         this.eyeColor = options.eyeColor;
//     }

//     voice() {
//         console.log("Meow");
//     }

//     get getAgeInfo() {
//         return this.age * 7;
//     }

//     set setAgeInfo(newAge) {
//         this.age = newAge;
//     }
// }

// const cat = new Cats({
//     name: "Барсик",
//     age: 7,
//     hasTail: true,
//     color: "white",
//     eyeColor: "green",
// })

// console.log(cat);


class Component {
    constructor(selector) {
        this.$element = document.querySelector(selector);
    }

    hide() {
        this.$element.style.display = "none";
    }

    show() {
        this.$element.style.display = "block";
    }
}

class Block extends Component {
    constructor(options) {
        super(options.selector);

        this.$element.style.width = this.$element.style.height = options.size + "px";
        this.$element.style.backgroundColor = options.color;
    }
}

class Circle extends Block {
    constructor(options) {
        super(options);

        this.$element.style.borderRadius = "50%";
    }
}

const block1 = new Block ({
    selector: "#block1",
    size: 100,
    color: "red",
});

const block2 = new Circle ({
    selector: "#block2",
    size: 150,
    color: "green",
})

block1.hide();
block1.show();