const Validation = require('./utils/Validation');

class BonusNumber {
  constructor(bonusNumber, winningNumbers) {
    this.valid(bonusNumber, winningNumbers);
    this.bonusNumber = bonusNumber;
  }

  valid(bonusNum, winningNums) {
    Validation.isNumber(bonusNum);
    Validation.beInRange(bonusNum);
    Validation.notIncludedInWinningNums(bonusNum, winningNums);
  }

  getBonusNumber() {
    return this.bonusNumber;
  }
}

module.exports = BonusNumber;
