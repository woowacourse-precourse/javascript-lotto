const checkValue = require("./errors/checkValidation");
const existError = require("./errors/existError");

class BonusNumber {
  constructor(bonusNumber, winningNumbers) {
    this.validate(bonusNumber, winningNumbers);
    this.value = bonusNumber;
  }

  validate(bonusNumber, winningNumbers) {
    const { errorMsg } = checkValue.bonusNumber(bonusNumber, winningNumbers);

    if (errorMsg) existError(errorMsg);
  }
}

module.exports = BonusNumber;
