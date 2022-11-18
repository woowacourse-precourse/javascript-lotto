const { ERROR } = require("./constant");

class Lotto {
  #numbers;

  constructor(numbers, bonusNumber) {
    this.validate(numbers, bonusNumber);
    this.#numbers = numbers;
    this.bonusNumber = bonusNumber;
  }

  validate(numbers, bonusNumber) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.LOTTO_NUMBER);
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERROR.LOTTO_DUPLICATED);
    }
    if (numbers.includes(Number(bonusNumber))) {
      throw new Error(ERROR.BONUS_DUPLICATED);
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  getBonusNumber() {
    return this.bonusNumber;
  }
}

module.exports = Lotto;
