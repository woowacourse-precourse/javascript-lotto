const { ERROR_MESSAGE, PARAMETERS } = require('./utils/constants');

class Exception {
  validatePurchaseAmount(input) {
    this.checkIsDigit(input);

    if (input % PARAMETERS.purchaseAmountUnit !== 0) {
      throw new Error(ERROR_MESSAGE.inValidUnitOfMoney);
    }
  }

  validateWinningNumber(input) {
    const WINNING_NUMBER_SET = new Set(input);

    if (WINNING_NUMBER_SET.size !== input.length) {
      throw new Error(ERROR_MESSAGE.duplicateWinningNumber);
    }
  }

  checkIsDigit(number) {
    if (!/^\d+$/.test(number)) {
      throw new Error(ERROR_MESSAGE.nonDigitInput);
    }
  }
}

module.exports = Exception;
