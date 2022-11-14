const { LOTTO_PRICE, ERROR } = require("./constants/index");

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
    if (money % LOTTO_PRICE !== 0) {
      this.error(ERROR.MONEY_UNIT);
    }
  }

  checkNumbersValid(numbers) {
    this.checkNumbersType(numbers);
    this.checkNumbersLength(numbers);
    this.checkNumbersRange(numbers);
    this.checkNumbersDuplicated(numbers);
  }

  checkNumbersType(numbers) {
    numbers.forEach((number) => {
      if (isNaN(number) === true) {
        this.error(ERROR.NUMBERS_TYPE);
      }
    });
  }

  checkNumbersLength(numbers) {
    if (numbers.length !== 6) {
      this.error(ERROR.NUMBERS_LENGTH);
    }
  }

  checkNumbersRange(numbers) {
    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        this.error(ERROR.NUMBERS_RANGE);
      }
    });
  }

  checkNumbersDuplicated(numbers) {
    if (numbers.length !== new Set(numbers).size) {
      this.error(ERROR.NUMBERS_DUPLICATED);
    }
  }

  checkBonusNumberValid(bonusNumber, numbers) {
    this.checkBonusNumberType(bonusNumber);
    this.checkBonusNumberRange(bonusNumber);
    this.checkBonusNumberIncluded(bonusNumber, numbers);
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

  checkBonusNumberIncluded(bonusNumber, numbers) {
    if (numbers.includes(bonusNumber)) {
      this.error(ERROR.BONUS_NUMBER_INCLUDED);
    }
  }

  error(message) {
    throw new Error(message);
  }
}

module.exports = Validator;
