const checkValidation = require("./errors/checkValidation");
const existError = require("./errors/existError");

class BonusNumber {
  constructor(bonusNumber, winningNumbers) {
    this.validate(bonusNumber, winningNumbers);
    this.value = bonusNumber;
  }

  validate(bonusNumber, winningNumbers) {
    const { errorMessage } = checkValidation.bonusNumber(
      bonusNumber,
      winningNumbers
    );

    if (errorMessage) existError(errorMessage);
  }
}
module.exports = BonusNumber;
