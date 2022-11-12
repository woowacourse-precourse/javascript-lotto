const InputException = require('./InputException');

const inputException = new InputException();

class Lotto {
  #number;

  constructor(number) {
    this.validate(number);
    this.#number = number;
  }

  validate(number) {
    inputException.handleBonusNumberException(number);
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
