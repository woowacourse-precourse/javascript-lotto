const { error_message } = require("./const");

class Bonus {
  constructor(bonusNumber, winningNumbers) {
    this.validate(bonusNumber, winningNumbers);
  }

  validate(bonusNumber, winningNumbers) {
    this.checkIsNumber(bonusNumber);
    this.checkRange(bonusNumber);
    this.checkDuplicates(bonusNumber, winningNumbers);
  }

  checkIsNumber(bonusNumber) {
    if (isNaN(bonusNumber)) throw new Error(error_message.not_only_num_bouns);
  }

  checkRange(bonusNumber) {
    if (bonusNumber < 1 || bonusNumber > 45)
      throw new Error(error_message.not_valid_range);
  }

  checkDuplicates(bonusNumber, winningNumbers) {
    if (winningNumbers.includes(bonusNumber))
      throw new Error(error_message.not_unique_bonus);
  }
}

module.exports = Bonus;
