const { ERROR_MESSAGES } = require("../utils/constants");

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

    if (String(bonusNumber).split("").length > 2) {
      throw new Error(ERROR_MESSAGES.INVALID_BONUS_RANGE);
    }

    if (this.#winningNumbers.includes(Number(bonusNumber))) {
      throw new Error(ERROR_MESSAGES.DUPLICATED_BONUS_NUM);
    }
  }

  output() {
    return this.#bonusNumber;
  }
}

module.exports = Bonus;
