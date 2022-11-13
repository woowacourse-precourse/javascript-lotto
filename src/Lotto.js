const Validator = require("./Validator");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validator = new Validator();

    this.validator.checkNumbersValid(numbers);
    this.#numbers = numbers;
  }
}

module.exports = Lotto;
