const validate = require("./validation/validation");

class BonusNumber {
  constructor(bonusNumber, winningNumbers) {
    // this.validate(bonusNumber, winningNumbers);
    this.value = bonusNumber;
  }

  validate(bonusNumber, winningNumbers) {
    validate.bonusNumber(bonusNumber, winningNumbers);
  }
}

module.exports = BonusNumber;
