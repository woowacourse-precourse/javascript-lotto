const {
  ERROR_MONEY,
  ERROR_LOTTO,
  ERROR_BONUS,
} = require("../constants/messages");

const { RULE } = require("../constants/rule");

class Validation {
  checkNumberType = (numbers) => {
    return numbers.every((number) => !isNaN(number));
  };

  checkLottoRange = (numbers) => {
    return numbers.every(
      (number) =>
        number >= RULE.MIN_LOTTO_NUMBER && number <= RULE.MAX_LOTTO_NUMBER
    );
  };

  isValidMoney = (purchaseAmount) => {
    if (purchaseAmount === "0") throw new Error(ERROR_MONEY.ZERO);

    if (isNaN(purchaseAmount)) throw new Error(ERROR_MONEY.TYPE_NUMBER);

    if (purchaseAmount.length === 0) throw new Error(ERROR_MONEY.EMPTY);

    if (purchaseAmount < 0) throw new Error(ERROR_MONEY.NEGATIVE_INPUT);

    if (purchaseAmount % RULE.LOTTO_PRICE !== 0)
      throw new Error(ERROR_MONEY.NOT_THOUSAND_UNIT);

    return true;
  };

  isValidLottoNumber = (numbers) => {
    if (numbers.length !== RULE.LOTTO_NUMS) throw new Error(ERROR_LOTTO.LENGTH);

    if (!this.checkNumberType(numbers)) throw new Error(ERROR_LOTTO.TYPE);

    if (!this.checkLottoRange(numbers)) throw new Error(ERROR_LOTTO.RANGE);

    if ([...new Set(numbers)].length !== RULE.LOTTO_NUMS)
      throw new Error(ERROR_LOTTO.DUPLICATED);

    return true;
  };

  isBonusNumber(number, winNumbers) {
    if (number < RULE.MIN_LOTTO_NUMBER || number > RULE.MAX_LOTTO_NUMBER)
      throw new Error(ERROR_BONUS.RANGE);

    if (isNaN(number)) throw new Error(ERROR_BONUS.TYPE);

    if (winNumbers.includes(number)) throw new Error(ERROR_BONUS.DUPLICATED);
    return true;
  }
}

module.exports = Validation;
