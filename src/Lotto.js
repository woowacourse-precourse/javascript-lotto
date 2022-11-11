const { ERROR } = require('./Constants')

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  getNumber() {
    return this.#numbers;
  }

  validate(numbers) {
    let uniqueNumbers = new Set(numbers);

    if (numbers.length !== 6) {
      throw new Error(ERROR.NOT_SIX_NUMBER);
    }
    if (uniqueNumbers.size !== 6) {
      throw new Error(ERROR.NOT_UNIQUE);
    }
    if (uniqueNumbers.has(NaN)) {
      throw new Error(ERROR.NOT_NUMBER);
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
