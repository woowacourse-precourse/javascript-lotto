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

    if (input.length === 1) {
      throw new Error(ERROR_MESSAGE.inValidSeperation);
    }

    if (input.length !== 6) {
      throw new Error(ERROR_MESSAGE.inValidInputCount);
    }

    input.forEach((number) => {
      this.checkIsDigit(number);
      this.checkIsNumberInRange(number);
    });
  }

  checkIsDigit(number) {
    if (!/^\d+$/.test(number)) {
      throw new Error(ERROR_MESSAGE.nonDigitInput);
    }
  }

  checkIsNumberInRange(number) {
    const [START, END] = PARAMETERS.lottoNumberRange;

    if (number < START || number > END) {
      throw new Error(ERROR_MESSAGE.outOfRange);
    }
  }
}

module.exports = Exception;
