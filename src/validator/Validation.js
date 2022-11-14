const {
  ERROR_MONEY,
  ERROR_LOTTO,
  ERROR_BONUS,
} = require("../constants/messages");

class Validation {
  checkType = (purchaseAmount) => {
    if (isNaN(purchaseAmount)) throw new Error(ERROR_MONEY.TYPE_NUMBER);
  };

  checkNotZero = (purchaseAmount) => {
    if (purchaseAmount === "0") throw new Error(ERROR_MONEY.ZERO);
  };

  checkEmpty = (purchaseAmount) => {
    if (purchaseAmount.length === 0) throw new Error(ERROR_MONEY.EMPTY);
  };

  checkNotThousandUnit = (purchaseAmount) => {
    if (purchaseAmount % 1000 !== 0)
      throw new Error(ERROR_MONEY.NOT_THOUSAND_UNIT);
  };

  checkNegativeInput = (purchaseAmount) => {
    if (purchaseAmount < 0) throw new Error(ERROR_MONEY.NEGATIVE_INPUT);
  };

  isNumberType = (numbers) => {
    return numbers.every((number) => !isNaN(number));
  };

  isLottoRange = (numbers) => {
    return numbers.every((number) => number >= 1 && number <= 45);
  };

  checkLottoLength(numbers) {
    if (numbers.length !== 6) throw new Error(ERROR_LOTTO.LENGTH);
  }

  checkLottoType(numbers) {
    if (!this.isNumberType(numbers)) throw new Error(ERROR_LOTTO.TYPE);
  }

  checkLottoRange(numbers) {
    if (!this.isLottoRange(numbers)) throw new Error(ERROR_LOTTO.RANGE);
  }

  checkDuplicatedNumber(numbers) {
    if ([...new Set(numbers)].length !== 6)
      throw new Error(ERROR_LOTTO.DUPLICATED);
  }

  isValidMoney = (purchaseAmount) => {
    this.checkNotZero(purchaseAmount);
    this.checkType(purchaseAmount);
    this.checkEmpty(purchaseAmount);
    this.checkNegativeInput(purchaseAmount);
    this.checkNotThousandUnit(purchaseAmount);
    return true;
  };

  isValidLottoNumber = (numbers) => {
    this.checkLottoLength(numbers);
    this.checkLottoType(numbers);
    this.checkLottoRange(numbers);
    this.checkDuplicatedNumber(numbers);
    return true;
  };

  isBonusNumber(number, winNumbers) {
    if (number < 1 || number > 45) throw new Error(ERROR_BONUS.RANGE);

    if (isNaN(number)) throw new Error(ERROR_BONUS.TYPE);

    if (winNumbers.includes(number)) throw new Error(ERROR_BONUS.DUPLICATED);
    return true;
  }
}

module.exports = Validation;
