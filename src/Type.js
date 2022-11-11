class Type {
  #numberList;

  constructor() {
    this.#numberList = [];
  }

  changeType(numbers) {
    numbers.split(",").forEach((number) => {
      this.#numberList.push(parseInt(number, 10));
    });
    return this.#numberList;
  }
}

module.exports = Type;
