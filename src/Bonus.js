const { Console } = require("@woowacourse/mission-utils");
const { ERROR, RULES } = require("./constants");

class Bonus {
  #bonusNumber;
  #winningNumbers;

  constructor(winningNumber, bonusNumber) {
    this.#bonusNumber = Number(bonusNumber);
    this.#winningNumbers = winningNumber;
    this.validate(bonusNumber);
  }

  validate(bonusNumber) {
    if (this.#winningNumbers.includes(this.#bonusNumber)) {
      throw new Error(ERROR.DUPLICATE_CHECK);
    }

    if (this.#bonusNumber < RULES.START_RANGE || this.#bonusNumber > RULES.END_RANGE) {
      throw new Error(ERROR.WINNING_NUMBER_RANGE_CHECK);
    }

    if (isNaN(bonusNumber)) {
      throw new Error(ERROR.INPUT_NUMBER_CHECK);
    }
  }
}

module.exports = Bonus;
