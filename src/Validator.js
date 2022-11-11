const { ERROR_MESSAGE, LOTTO, REGEX } = require('./constants');

class Validator {
  static throwErrorIfInvalidMoney(money) {
    if (!REGEX.money.test(money)) {
      throw Error(ERROR_MESSAGE.MONEY_FORM);
    }
    if (money) {
      if (money % LOTTO.PRICE) {
        throw Error(ERROR_MESSAGE.MONEY_MULTIPLE);
      }
    }
    if (money[0] === '0') {
      throw Error(ERROR_MESSAGE.INT_FORM);
    }
  }

  static throwErrorIfInvalidFormOfWinningNumber(inputValue) {
    if (!REGEX.winningNumber.test(inputValue)) {
      throw Error(ERROR_MESSAGE.WINNING_NUM_FORM);
    }
    inputValue.split(LOTTO.SPLIT_WITH).forEach((number) => {
      if (number[0] === '0') {
        throw Error(ERROR_MESSAGE.INT_FORM);
      }
    });
  }

  static throwErrorIfInvalidWinningNumbers(winningNumbers) {
    if (winningNumbers.length !== LOTTO.LENGTH) {
      throw Error(ERROR_MESSAGE.LOTTO_NUM_LENGTH);
    }
    winningNumbers.forEach((number) => {
      if (number > LOTTO.MAX_NUMBER || number < LOTTO.MIN_NUMBER) {
        throw Error(ERROR_MESSAGE.LOTTO_NUM_RANGE);
      }
    });
    if (new Set(winningNumbers).size < LOTTO.LENGTH) {
      throw Error(ERROR_MESSAGE.WINNING_NUM_DUPLICATION);
    }
  }

  static throwErrorIfInvalidBonusNumber(winningNumbers, bonusNumber) {
    if (
      !REGEX.bonusNumber.test(bonusNumber) ||
      bonusNumber > LOTTO.MAX_NUMBER ||
      bonusNumber < LOTTO.MIN_NUMBER
    ) {
      throw Error(ERROR_MESSAGE.LOTTO_NUM_RANGE);
    }
    if (winningNumbers.includes(Number(bonusNumber))) {
      throw Error(ERROR_MESSAGE.INCLUDED_WINNING_NUM);
    }
  }
}

module.exports = Validator;
