const Validation = require("./Validation");

class Lotto {
  numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.numbers = numbers;
  }

  validate(numbers) {
    const validation = new Validation();

    validation.length(numbers);

    validation.isDuplicate(numbers);
  }
}

module.exports = Lotto;
