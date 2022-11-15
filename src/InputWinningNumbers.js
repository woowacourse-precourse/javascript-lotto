const validate = require("./validation/validation");

class WinningNumbers {
  constructor(winningNumbers) {
    // this.validate(winningNumbers);
    this.value = winningNumbers;
  }

  validate(winningNumber) {
    validate.winningNumbers(winningNumber);
  }
}

module.exports = WinningNumbers;
