const { ERROR_MESSAGE, LOTTO, REGEX } = require('./constants');

class Validator {
  winningNumbers;

  static throwError(message) {
    throw new Error(`${ERROR_MESSAGE.ERROR_FORM}${message}`);
  }

  static throwErrorIfInvalidMoney(money) {
    this.throwErrorIfHasBlack(money);
    this.throwErrorIfStartsWithZero(money);
    if (!REGEX.money.test(money)) this.throwError(ERROR_MESSAGE.INT_FORM);
    if (money % LOTTO.PRICE) this.throwError(ERROR_MESSAGE.HAS_MOD);
  }

  static throwErrorIfInvalidWinningForm(inputValue) {
    this.throwErrorIfHasBlack(inputValue);
    this.throwErrorIfHasBlack(inputValue);
    this.winningNumbers = inputValue.split(',');
    if (!REGEX.winningNumbers.test(this.winningNumbers)) {
      this.throwError(ERROR_MESSAGE.WINNING_NUM_FORM);
    }
    this.winningNumbers.forEach((number) => {
      this.throwErrorIfStartsWithZero(number);
    });
  }

  static throwErrorIfInvalidWinningNumbers(winningNumbers) {
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

  static throwErrorIfInvalidBonusNumber(bonusNumber) {
    this.throwErrorIfHasBlack(bonusNumber);
    this.throwErrorIfStartsWithZero(bonusNumber);
    this.throwErrorIfOutOfRange(bonusNumber);
    if (!REGEX.bonusNumber.test(bonusNumber)) {
      this.throwError(ERROR_MESSAGE.INT_FORM);
    }
    if (this.winningNumbers.includes(bonusNumber)) {
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
