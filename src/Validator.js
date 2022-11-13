const { ERROR } = require("./constants/index");

class Validator {
  checkMoneyValid(money) {
    if (isNaN(money) === true) {
      this.error(ERROR.MONEY_TYPE);
    }

    if (money === 0) {
      this.error(ERROR.MONEY_ZERO);
    }

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

  checkBonusNumberValid(bonusNumber) {
    if (isNaN(bonusNumber) === true) {
      this.error(ERROR.NUMBER_TYPE);
    }

    if (bonusNumber < 1 || bonusNumber > 45) {
      this.error(ERROR.NUMBER_RANGE);
    }
  }

  error(message) {
    throw new Error(message);
  }
}

module.exports = Validator;
