const { ERROR } = require("./constants/index");

class Validator {
  checkMoneyValid(money) {
    this.checkMoneyType(money);
    this.checkMoneyZero(money);
    this.checkMoneyUnit(money);
  }

  checkMoneyType(money) {
    if (isNaN(money) === true) {
      this.error(ERROR.MONEY_TYPE);
    }
  }

  checkMoneyZero(money) {
    if (money === 0) {
      this.error(ERROR.MONEY_ZERO);
    }
  }

  checkMoneyUnit(money) {
    if (money % 1000 !== 0) {
      this.error(ERROR.MONEY_UNIT);
    }
  }

  checkNumberValid(number) {
    this.checkNumberType(number);
    this.checkNumberLength(number);
    this.checkNumberRange(number);
    this.checkNumberDuplicated(number);
  }

  checkNumberType(number) {
    number.forEach((item) => {
      if (isNaN(item) === true) {
        this.error(ERROR.NUMBER_TYPE);
      }
    });
  }

  checkNumberLength(number) {
    if (number.length !== 6) {
      this.error(ERROR.NUMBER_LENGTH);
    }
  }

  checkNumberRange(number) {
    number.forEach((item) => {
      if (item < 1 || item > 45) {
        this.error(ERROR.NUMBER_RANGE);
      }
    });
  }

  checkNumberDuplicated(number) {
    if (number.length !== new Set(number).size) {
      this.error(ERROR.NUMBER_DUPLICATED);
    }
  }

  checkBonusNumberValid(bonusNumber, number) {
    this.checkBonusNumberType(bonusNumber);
    this.checkBonusNumberRange(bonusNumber);
    this.checkBonusNumberIncluded(bonusNumber, number);
  }

  checkBonusNumberType(bonusNumber) {
    if (isNaN(bonusNumber) === true) {
      this.error(ERROR.NUMBER_TYPE);
    }
  }

  checkBonusNumberRange(bonusNumber) {
    if (bonusNumber < 1 || bonusNumber > 45) {
      this.error(ERROR.NUMBER_RANGE);
    }
  }

  checkBonusNumberIncluded(bonusNumber, number) {
    if (number.includes(bonusNumber)) {
      this.error(ERROR.BONUS_NUMBER_INCLUDED);
    }
  }

  error(message) {
    throw new Error(message);
  }
}

module.exports = Validator;
