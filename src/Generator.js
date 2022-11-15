const validate = require("./validation/validation");

class WinningNumbers {
  constructor(winningNumbers) {
    this.validate(winningNumbers);
    this.value = winningNumbers;
  }

  validate(winningNumberInput) {
    validate.winningNumbers(winningNumberInput);
  }
}

class BonusNumber {
  constructor(bonusNumber, winningNumbers) {
    this.validate(bonusNumber, winningNumbers);
    this.value = bonusNumber;
  }

  validate(bonusNumberInput, winningNumbersInput) {
    validate.bonusNumber(bonusNumberInput, winningNumbersInput);
  }
}

module.exports = WinningNumbers;
module.exports = BonusNumber;
