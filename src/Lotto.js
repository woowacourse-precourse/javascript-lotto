class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  getLotto() {
    return this.#numbers;
  }
}

module.exports = Lotto;
