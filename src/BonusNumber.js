const { ERROR, NUMBER } = require('./utils/constants');

class BonusNumber {
  constructor(bonusNumber, winningLottoNumbers) {
    this.valid(bonusNumber, winningLottoNumbers);
    this.bonusNumber = bonusNumber;
  }

  getBonusNumber() {
    return this.bonusNumber;
  }

  valid(number, numbers) {
    if (numbers.includes(number)) {
      throw ERROR.MUST_NOT_BE_INCLUDED_IN_WINNING_NUMBER;
    }
    if (number < NUMBER.MIN_LOTTO_NUMBER || number > NUMBER.MAX_LOTTO_NUMBER) {
      throw ERROR.MUST_BE_WITHIN_RANGE;
    }
    if (Number.isNaN(number)) {
      throw ERROR.MUST_INPUT_ONLY_NUMBER;
    }
  }
}

module.exports = BonusNumber;
