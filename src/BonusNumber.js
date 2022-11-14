const checkValidation = require("./errors/checkValidation");

class BonusNumber {
  constructor(bonusNumber, winningNumbers) {
    checkValidation.checkBonusNumber(bonusNumber, winningNumbers);
    this.value = bonusNumber;
  }
}
module.exports = BonusNumber;
