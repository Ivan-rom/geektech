class Worker {
  #name;
  #surname;
  #rate;
  #days;

  constructor(options) {
    this.#name = options.name;
    this.#surname = options.surname;
    this.#rate = options.rate;
    this.#days = options.days;
  }
  get salary() {
    return this.#rate * this.#days;
  }
  get fullName() {
    return `${this.#surname} ${this.#name}`;
  }
}

const worker1 = new Worker({
  name: "Ivan",
  surname: "Romanenko",
  rate: 500,
  days: 12,
});

console.log(worker1.fullName);