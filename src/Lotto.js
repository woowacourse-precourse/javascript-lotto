class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  get numbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
