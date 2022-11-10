const { ERROR_MESSAGES } = require('./Constant');

class Lotto {
  #numbers;

  constructor(numbersArray) {
    this.validate(numbersArray);
    this.#numbers = numbersArray;
  }

  static validate(numbersArray) {
    if (numbersArray.length !== 6) throw new Error(ERROR_MESSAGES.LOTTO_NUMBER_LENGTH_ONLY_SIX);
    if (new Set([...numbersArray]).size !== 6) {
      throw new Error(ERROR_MESSAGES.LOTTO_NUMBER_ONLY_UNIQUE);
    }
  }

  // TODO: 추가 기능 구현
}

const lotto = new Lotto([1, 1, 2, 3, 4, 5]);

console.log(lotto.validate());

module.exports = Lotto;
