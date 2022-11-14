const { LOTTO, ERROR_MESSAGE } = require('./constant');
const Util = require('../Util');

class Validation {
  static validatePerchaseAmount(purchaseAmount) {
    if (!Util.isNumericInput(purchaseAmount)) {
      throw new Error(ERROR_MESSAGE.NON_NUMERIC_INPUT);
    }
    if (!Util.isPositiveNumber(purchaseAmount)) {
      throw new Error(ERROR_MESSAGE.NON_POSITIVE_INPUT);
    }
    if (Util.isZeroStartInput(purchaseAmount)) {
      throw new Error(ERROR_MESSAGE.ZERO_START_INPUT);
    }
    if (!Util.isDivisibleBy(purchaseAmount, LOTTO.PRICE)) {
      throw new Error(ERROR_MESSAGE.NON_DIVISIBLE_INPUT);
    }
  }

  static validateWinningNumbersInput(str) {
    const NUMBER_COMMA_REGEXP = /^[0-9,]+$/;
    const START_IS_COMMA_REGEXP = /^[,]/;
    const END_IS_COMMA_REGEXP = /[,]$/;
    const DUPLICATE_COMMA_REGEXP = /[,]{2,}/;

    if (
      !NUMBER_COMMA_REGEXP.test(str) ||
      DUPLICATE_COMMA_REGEXP.test(str) ||
      START_IS_COMMA_REGEXP.test(str) ||
      END_IS_COMMA_REGEXP.test(str)
    ) {
      throw new Error(ERROR_MESSAGE.INVALID_WINNING_NUMBERS);
    }
  }

  static validateWinningNumbers(numbers) {
    if (!Util.hasNElements(numbers, LOTTO.LENGTH)) {
      throw new Error(ERROR_MESSAGE.INVALID_LENGTH_LOTTO);
    }
    if (!Util.isBetween(numbers, LOTTO.START, LOTTO.END)) {
      throw new Error(ERROR_MESSAGE.OUT_OF_RANGE_LOTTO);
    }
    if (Util.hasDuplicateElements(numbers)) {
      throw new Error(ERROR_MESSAGE.HAS_DUPLICATE_NUMBERS);
    }
  }

  static validateBonusNumber({ bonusNumber, winningNumbers }) {
    if (!Util.isNumericInput(bonusNumber) || !Util.isBetween(bonusNumber, LOTTO.START, LOTTO.END)) {
      throw new Error(ERROR_MESSAGE.OUT_OF_RANGE_LOTTO);
    }
    if (winningNumbers.includes(parseInt(bonusNumber))) {
      throw new Error(ERROR_MESSAGE.INVALID_BONUS_NUMBER);
    }
  }
}

module.exports = Validation;
