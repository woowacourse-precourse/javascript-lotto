const checkValue = require('./libs/checkValue');
const exitWithError = require('./libs/exitWithError');

class BonusNumber {
  constructor(bonusNumber, winningNumbers) {
    this.validate(bonusNumber, winningNumbers);
    this.value = bonusNumber;
  }

  validate(bonusNumber, winningNumbers) {
    const { errorMsg } = checkValue.bonusNumber(bonusNumber, winningNumbers);

    if (errorMsg) exitWithError(errorMsg);
  }
}

module.exports = BonusNumber;
