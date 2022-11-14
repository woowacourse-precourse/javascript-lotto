const checkValidation = require("./errors/checkValidation");

class BonusNumber {
  constructor(bonusNumber, winningNUmbers) {
    this.validate(bonusNumber, winningNumbers);
    this.value = bonusNumber;
  }
  validate(bonusNumber, winningNumbers) {
    checkValidation.checkBonusNumber(bonusNumber, winningNumbers);
  }
}
module.exports = BonusNumber;
