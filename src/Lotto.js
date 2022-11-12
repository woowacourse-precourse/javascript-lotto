const ERROR = require('./constants/error');
const Validator = require('./Validator');

class Lotto {
  #numbers;

  constructor(numbers) {
    Validator.validateLottoNumbers(numbers);
    this.#numbers = numbers;
  }
}

module.exports = Lotto;
