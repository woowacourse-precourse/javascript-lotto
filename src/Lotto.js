const Validator = require('./model/Validator');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  validate(numbers) {
    Validator.validateNumbersLength(numbers);
    Validator.validateUnique(numbers);

    numbers.forEach((number) => {
      Validator.validateNaN(number);
      Validator.validateNumberRange(number);
    });
  }

  get numbers() {
    return [...this.#numbers];
  }
}

module.exports = Lotto;
