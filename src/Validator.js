const { ERROR_MESSAGE, LOTTO, REGEX } = require('./constants');

class Validator {
  static throwErrorIfInvalidMoney(money) {
    this.throwErrorIfhasBlack(money);
    this.throwErrorIfstartsWithZero(money);
    if (!REGEX.money.test(money)) {
      throw Error(ERROR_MESSAGE.INT_FORM);
    }
    if (money % LOTTO.PRICE) {
      throw Error(ERROR_MESSAGE.HAS_MOD);
    }
  }

  static throwErrorIfInvalidWinningNumbers(inputValue) {
    this.throwErrorIfhasBlack(inputValue);
    const winningNumbers = inputValue.split(',');
    if (!REGEX.winningNumber.test(inputValue)) {
      throw Error(ERROR_MESSAGE.WINNING_NUM_FORM);
    }
    winningNumbers.forEach((number) => {
      this.throwErrorIfstartsWithZero(number);
    });
    if (winningNumbers.length !== LOTTO.LENGTH) {
      throw Error(ERROR_MESSAGE.LENGTH);
    }
    winningNumbers.forEach((number) => {
      this.throwErrorIfoutOfRange(number);
    });
    if (new Set(winningNumbers).size < LOTTO.LENGTH) {
      throw Error(ERROR_MESSAGE.DUPLICATION);
    }
  }

  static throwErrorIfInvalidBonusNumber(winningNumbers, bonusNumber) {
    this.throwErrorIfhasBlack(bonusNumber);
    this.outOfRange(bonusNumber);
    this.throwErrorIfstartsWithZero(bonusNumber);
    this.throwErrorIfoutOfRange(bonusNumber);
    if (!REGEX.bonusNumber.test(bonusNumber)) {
      throw Error(ERROR_MESSAGE.INT_FORM);
    }
    if (winningNumbers.split(',').includes(bonusNumber)) {
      throw Error(ERROR_MESSAGE.WINNING_HAS);
    }
  }

  static throwErrorIfhasBlack(string) {
    if (string.includes(' ')) {
      throw Error(ERROR_MESSAGE.HAS_BLACK);
    }
  }

  static throwErrorIfstartsWithZero(string) {
    if (string.startsWith('0')) {
      throw Error(ERROR_MESSAGE.START_WITH_ZERO);
    }
  }

  static throwErrorIfoutOfRange(number) {
    if (number < 1 || number > 45) {
      throw Error(ERROR_MESSAGE.OUT_OF_RANGE);
    }
  }
}

module.exports = Validator;
