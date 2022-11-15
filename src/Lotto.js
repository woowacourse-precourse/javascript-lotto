class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.validate(numbers);
  }

  validate(numbers) {
    this.checkLength(numbers);
    this.checkDuplicate(numbers);
    this.checkRange(numbers);
  }
}

module.exports = Lotto;
