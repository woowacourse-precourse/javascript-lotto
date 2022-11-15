const Validator = require('./Validator');

class Lotto {
  #numbers;

  constructor(numbers) {
    Validator.checkValidLottoLength(numbers);
    Validator.checkDuplicateNumber(numbers);
    this.#numbers = numbers;
  }

  getLotto() {
    return this.#numbers;
  }
}

module.exports = Lotto;
