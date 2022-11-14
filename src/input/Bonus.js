const { ERROR_MESSAGES, NUMBERS } = require("../utils/constants");

class Bonus {
  #bonusNumber;
  #winningNumbers;

  constructor(bonusNumber, winningNumbers) {
    this.#winningNumbers = winningNumbers;
    this.validate(bonusNumber);
    this.#bonusNumber = Number(bonusNumber);
  }

  validate(bonusNumber) {
    if (!Number(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.INVALID_BONUS_TYPE);
    }

    if (!this.correctInRange(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.INVALID_BONUS_RANGE);
    }

    if (this.#winningNumbers.includes(Number(bonusNumber))) {
      throw new Error(ERROR_MESSAGES.DUPLICATED_BONUS_NUM);
    }
  }

  correctInRange(bonusNumber) {
    if (+bonusNumber >= NUMBERS.MIN_LOTTO_NUMBER && +bonusNumber <= NUMBERS.MAX_LOTTO_NUMBER) {
      return true;
    }
    return false;
  }

  output() {
    return this.#bonusNumber;
  }
}

module.exports = Bonus;
