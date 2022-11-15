const { VALIDATE_NUMBER, ERROR_MESSAGE } = require('./utils/Constants');

class Bonus {
  constructor(bonusNumber, winNumber) {
    this.validate(bonusNumber, winNumber);
  }

  validate(bonusNumber, winNumber) {
    this.checkIsNumber(bonusNumber);
    this.checkRange(bonusNumber);
    this.checkDuplicate(bonusNumber, winNumber);
  }

  checkIsNumber(number) {
    if (isNaN(number) === true) {
      throw new Error(ERROR_MESSAGE.notNumber);
    }
  }

  checkRange(number) {
    if (number > VALIDATE_NUMBER.end || number < VALIDATE_NUMBER.start) {
      throw new Error(ERROR_MESSAGE.range);
    }
  }

  checkDuplicate(number, winNumber) {
    if (winNumber.includes(number)) {
      throw new Error(ERROR_MESSAGE.bonusDuplicate);
    }
  }
}

module.exports =  Bonus;
