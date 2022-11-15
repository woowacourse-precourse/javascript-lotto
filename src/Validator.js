const {
  ERROR_MESSAGE,
  LOTTO,
  REGEX,
  DELIMITER,
  INPUT,
} = require('./constants');

class Validator {
  static throwError(message) {
    throw new Error(`${ERROR_MESSAGE.ERROR_FORM}${message}`);
  }

  static throwErrorIfInvalidMoney(money) {
    this.throwErrorIfHasBlack(money);
    this.throwErrorIfStartsWithZero(money);
    if (!REGEX.number.test(money)) this.throwError(ERROR_MESSAGE.INT_FORM);
    if (money % LOTTO.PRICE) this.throwError(ERROR_MESSAGE.HAS_MOD);
  }

  static throwErrorIfInvalidWinningForm(inputValue) {
    this.throwErrorIfHasBlack(inputValue);
    const winningNumbers = inputValue.split(DELIMITER);
    if (!REGEX.winningNumbers.test(winningNumbers)) {
      this.throwError(ERROR_MESSAGE.WINNING_NUM_FORM);
    }
    winningNumbers.forEach((number) => {
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

  static throwErrorIfInvalidBonusNumber(bonusNumber, winningNumbers) {
    this.throwErrorIfHasBlack(bonusNumber);
    this.throwErrorIfStartsWithZero(bonusNumber);
    this.throwErrorIfOutOfRange(bonusNumber);
    if (!REGEX.number.test(bonusNumber)) {
      this.throwError(ERROR_MESSAGE.INT_FORM);
    }

    if (winningNumbers.includes(Number(bonusNumber))) {
      this.throwError(ERROR_MESSAGE.WINNING_HAS);
    }
  }

  static throwErrorIfHasBlack(string) {
    if (string.includes(INPUT.CAN_NOT_INCLUDES)) {
      this.throwError(ERROR_MESSAGE.HAS_BLANK);
    }
  }

  static throwErrorIfStartsWithZero(string) {
    if (string.startsWith(INPUT.CAN_NOT_STARTS_WITH)) {
      this.throwError(ERROR_MESSAGE.START_WITH_ZERO);
    }
  }

  static throwErrorIfOutOfRange(number) {
    if (number < LOTTO.MIN_NUMBER || number > LOTTO.MAX_NUMBER) {
      this.throwError(ERROR_MESSAGE.OUT_OF_RANGE);
    }
  }
}

module.exports = Validator;
