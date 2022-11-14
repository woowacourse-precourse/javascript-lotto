const {
  ERROR,
  MIN_LOTTO_NUMBER,
  MAX_LOTTO_NUMBER,
} = require('./utils/constants');

class BonusNumber {
  constructor(bonusNumber, winningNumbers) {
    this.valid(bonusNumber, winningNumbers);
    this.bonusNumber = bonusNumber;
  }

  valid(bonusNum, winningNums) {
    if (Number.isNaN(bonusNum)) {
      throw ERROR.MUST_INPUT_ONLY_NUMBER;
    }
    if (bonusNum < MIN_LOTTO_NUMBER || bonusNum > MAX_LOTTO_NUMBER) {
      throw ERROR.MUST_BE_WITHIN_RANGE;
    }
    if (winningNums.includes(bonusNum)) {
      throw ERROR.MUST_NOT_BE_INCLUDED_IN_WINNING_NUMBERS;
    }
  }

  getBonusNumber() {
    return this.bonusNumber;
  }
}

module.exports = BonusNumber;
