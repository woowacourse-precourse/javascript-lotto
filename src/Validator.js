const { ERROR_MESSAGE, LOTTO, REGEX } = require('./constants');

class Validator {
  static throwError(message) {
    throw new Error(`${ERROR_MESSAGE.ERROR_FORM}${message}`);
  }

  static throwErrorIfInvalidMoney(money) {
    this.throwErrorIfHasBlack(money);
    this.throwErrorIfStartsWithZero(money);
    if (!REGEX.money.test(money)) this.throwError(ERROR_MESSAGE.INT_FORM);
    if (money % LOTTO.PRICE) this.throwError(ERROR_MESSAGE.HAS_MOD);
  }

  static throwErrorIfInvalidWinningNumbers(inputValue) {
    this.throwErrorIfHasBlack(inputValue);
    const winningNumbers = inputValue.split(',');
    if (!REGEX.winningNumber.test(inputValue)) {
      this.throwError(ERROR_MESSAGE.WINNING_NUM_FORM);
    }
    winningNumbers.forEach((number) => {
      this.throwErrorIfStartsWithZero(number);
    });
    if (winningNumbers.length !== LOTTO.LENGTH) {
      this.throwError(ERROR_MESSAGE.LENGTH);
    }
    winningNumbers.forEach((number) => {
      this.throwErrorIfOutOfRange(number);
    });
    if (new Set(winningNumbers).size < LOTTO.LENGTH) {
      this.throwError(ERROR_MESSAGE.DUPLICATION);
    }
  }

  static throwErrorIfInvalidBonusNumber(winningNumbers, bonusNumber) {
    this.throwErrorIfHasBlack(bonusNumber);
    this.throwErrorIfStartsWithZero(bonusNumber);
    this.throwErrorIfOutOfRange(bonusNumber);
    if (!REGEX.bonusNumber.test(bonusNumber)) {
      this.throwError(ERROR_MESSAGE.INT_FORM);
    }
    if (winningNumbers.split(',').includes(bonusNumber)) {
      this.throwError(ERROR_MESSAGE.WINNING_HAS);
    }
  }

  static throwErrorIfHasBlack(string) {
    if (string.includes(' ')) this.throwError(ERROR_MESSAGE.HAS_BLACK);
  }

  static throwErrorIfStartsWithZero(string) {
    if (string.startsWith('0')) this.throwError(ERROR_MESSAGE.START_WITH_ZERO);
  }

  static throwErrorIfOutOfRange(number) {
    if (number < 1 || number > 45) this.throwError(ERROR_MESSAGE.OUT_OF_RANGE);
  }
}

module.exports = Validator;
