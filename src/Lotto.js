const Validator = require('./Validator');

class Lotto {
  #numbers;

  constructor(numbers) {
    Validator.checkValidLottoLength(numbers);
    this.#numbers = numbers;
  }

  getLotto() {
    return this.#numbers;
  }
}

module.exports = Lotto;
