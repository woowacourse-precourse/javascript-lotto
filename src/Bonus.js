const { REGEX, ERROR } = require('./constants');

class Bonus {
  #number;

  constructor(inputStr, lotto) {
    this.#number = this.validate(inputStr, lotto);
  }

  validate(inputStr, lotto) {
    if (!REGEX.BONUS_NUMBER.test(inputStr)) {
      throw new Error(ERROR.ENTER_VALID_BONUS_NUMBER);
    }

    const inputNum = parseInt(inputStr);
    if (!lotto.isBonusValid(inputNum)) {
      throw new Error(ERROR.ENTER_WITHOUT_REPETITION);
    }

    return inputNum;
  }

  compare(lotto) {
    return lotto.includes(this.#number);
  }
}

module.exports = Bonus;
