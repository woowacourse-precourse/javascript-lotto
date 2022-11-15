class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  getNumbers() {
    return this.#sortNumbers(this.#numbers);
  }

  #sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
  }
}

module.exports = Lotto;
