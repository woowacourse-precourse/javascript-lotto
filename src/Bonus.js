const InputException = require('./InputException');

const inputException = new InputException();

class Bonus {
  #number;

  constructor(number) {
    this.validate(number);
    this.#number = number;
  }

  validate(number) {
    inputException.handleBonusNumberException(number);
  }

  isBelong(numbers) {
    inputException.handleBelongException(numbers, this.#number);
  }
}

module.exports = Bonus;
