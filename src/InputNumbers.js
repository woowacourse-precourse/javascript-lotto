const validate = require("./validation/validation");

class WinningNumbers {
  constructor(winningNumbers) {
    validate.winningNumbers(winningNumbers);
    this.value = winningNumbers;
  }
}

class BonusNumber {
  constructor(bonusNumber, winningNumbers) {
    validate.bonusNumber(bonusNumber, winningNumbers);
    this.value = bonusNumber;
  }
}

module.exports = WinningNumbers;
module.exports = BonusNumber;
