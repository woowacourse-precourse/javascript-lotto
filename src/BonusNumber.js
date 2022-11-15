const { BONUS_NUMBER_ERROR } = require("./Constant");

class Lotto {
  #bonusNumber;
  #winningNumbers;

  constructor(bonusNumber, winningNumber) {
    this.checkIsInteger(bonusNumber);
    this.checkRange(bonusNumber);
    this.checkIsDuplicated(bonusNumber, winningNumber);
    this.#bonusNumber = bonusNumber;
    this.#winningNumbers = winningNumber;
  }

  checkIsDuplicated(bonusNumber, winningNumber) {
    if (winningNumber.includes(bonusNumber)) {
      throw new Error(BONUS_NUMBER_ERROR.DUPLICATED);
    }
  }

  checkIsInteger(bonusNumber) {
    if (!Number.isInteger(bonusNumber)) {
      throw new Error(BONUS_NUMBER_ERROR.INTEGER);
    }
  }

  checkRange(bonusNumber) {
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error(BONUS_NUMBER_ERROR.RANGE);
    }
  }
}

new Lotto(44, [1, 2, 3, 4, 5, 6]);

module.exports = Lotto;
