const validate = require("./validation/validation");

class WinningNumbers {
  constructor(winningNumbers) {
    this.validate(winningNumbers);
    this.value = winningNumbers;
  }

  validate(winningNumber) {
    validate.winningNumbers(winningNumber);
  }
}

class BonusNumber {
  constructor(bonusNumber, winningNumbers) {
    this.validate(bonusNumber, winningNumbers);
    this.value = bonusNumber;
  }

  validate(bonusNumber, winningNumbers) {
    validate.bonusNumber(bonusNumber, winningNumbers);
  }
}

module.exports = WinningNumbers;
module.exports = BonusNumber;
