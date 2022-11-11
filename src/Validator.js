const { ERROR_MESSGE, LOTTO } = require('./constants');

class Validator {
  static throwErrorIfInvalidMoney(money) {
    const regex = /^\d+$/;
    if (!regex.test(money)) {
      throw Error(ERROR_MESSGE.MONEY_FORM);
    }
    if (money) {
      if (money % LOTTO.PRICE) {
        throw Error(ERROR_MESSGE.MONEY_MULTIPLE);
      }
    }
    if (money[0] === '0') {
      throw Error(ERROR_MESSGE.INT_FORM);
    }
  }

  static throwErrorIfInvalidFormOfWinningNumber(inputValue) {
    const regex = /^(\d+,)+\d+$/;
    if (!regex.test(inputValue)) {
      throw Error(ERROR_MESSGE.WINNING_NUM_FORM);
    }
    inputValue.split(',').forEach((number) => {
      if (number[0] === '0') {
        throw Error(ERROR_MESSGE.INT_FORM);
      }
    });
  }

  static throwErrorIfInvalidWinningNumbers(winningNumbers) {
    if (winningNumbers.length !== LOTTO.LENGTH) {
      throw Error(ERROR_MESSGE.LOTTO_NUM_LENGTH);
    }
    winningNumbers.forEach((number) => {
      if (number > LOTTO.MAX_NUMBER || number < LOTTO.MIN_NUMBER) {
        throw Error(ERROR_MESSGE.LOTTO_NUM_RANGE);
      }
    });
    if (new Set(winningNumbers).size < LOTTO.LENGTH) {
      throw Error(ERROR_MESSGE.WINNING_NUM_DUPLICATION);
    }
  }

  static throwErrorIfInvalidBonusNumber(winningNumbers, bonusNumber) {
    const regex = /^\d+$/;
    if (
      !regex.test(bonusNumber) ||
      bonusNumber > LOTTO.MAX_NUMBER ||
      bonusNumber < LOTTO.MIN_NUMBER
    ) {
      throw Error(ERROR_MESSGE.LOTTO_NUM_RANGE);
    }
    if (winningNumbers.includes(Number(bonusNumber))) {
      throw Error(ERROR_MESSGE.INCLUDED_WINNING_NUM);
    }
  }
}

module.exports = Validator;
