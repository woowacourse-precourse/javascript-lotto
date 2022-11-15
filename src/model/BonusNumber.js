const Validation = require('../utils/Validation');

class BonusNumber {
  #bonusNumber;

  constructor(bonusNumber, winningNumbers) {
    BonusNumber.validate(bonusNumber, winningNumbers);
    this.#bonusNumber = bonusNumber;
  }

  static validate(bonusNum, winningNums) {
    Validation.checkType(bonusNum);
    Validation.checkRange(bonusNum);
    Validation.checkIncludedInWinningNums(bonusNum, winningNums);
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

module.exports = BonusNumber;
