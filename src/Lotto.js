const Validator = require('./Validator');
const { TYPE } = require('./constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    Validator.isNum(numbers, TYPE.LOTTO);
    Validator.isEnoughNumbers(numbers, TYPE.LOTTO);
    Validator.isNumsInRange(numbers, TYPE.LOTTO);
    Validator.isDuplicated(numbers, TYPE.LOTTO);
  }

  getLotto() {
    return this.#numbers;
  }
}

module.exports = Lotto;