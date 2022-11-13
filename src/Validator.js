const { ERROR } = require("./constants/index");

class Validator {
  checkMoneyValid(money) {
    if (money % 1000 !== 0) {
      this.error(ERROR.INPUT_MONEY);
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

  error(message) {
    throw new Error(message);
  }
}

module.exports = Validator;
