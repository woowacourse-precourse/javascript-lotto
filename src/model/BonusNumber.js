const Validation = require('../utils/Validation');

class BonusNumber {
  #bonusNumber;

  constructor(bonusNumber, winningNumbers) {
    this.validate(bonusNumber, winningNumbers);
    this.#bonusNumber = bonusNumber;
  }

  validate(bonusNum, winningNums) {
    Validation.isNumber(bonusNum);
    Validation.beInRange(bonusNum);
    Validation.notIncludedInWinningNums(bonusNum, winningNums);
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

module.exports = BonusNumber;
