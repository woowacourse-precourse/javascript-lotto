const MESSAGE = require("./constant/message");
const { MIN, MAX, NUMBERS_LENGTH, BONUS_LENGTH, PRICE } = require("./constant");

class Validation {
  constructor() {}

  static validatePayment(paymentString) {
    const payment = Number(paymentString);
    if (isNaN(payment)) {
      throw new Error(MESSAGE.ERROR.PURCHASE_INTEGER);
    }

    if (payment < PRICE) {
      throw new Error(MESSAGE.ERROR.PURCHASE_RANGE);
    }

    if (payment % PRICE !== 0) {
      throw new Error(MESSAGE.ERROR.PURCHASE_UNIT);
    }
  }

  static validateNumbers(numbers) {
    if (numbers.some((number) => isNaN(number))) {
      throw new Error(MESSAGE.ERROR.NUMBER_INTEGER);
    }

    numbers.forEach((number) => {
      if (number < MIN || number > MAX) {
        throw new Error(MESSAGE.ERROR.NUMBER_RANGE);
      }
    });

    if (new Set(numbers).size !== numbers.length) {
      throw new Error(MESSAGE.ERROR.NUMBER_DUPLICATE);
    }
  }

  static validateWinningNumbers(numbers) {
    if (numbers.length !== NUMBERS_LENGTH) {
      throw new Error(MESSAGE.ERROR.WINNING_NUMBER_LENGTH);
    }
  }

  static validateBonusNumber(winningNumbers, bonusNumber) {
    if (bonusNumber.length !== BONUS_LENGTH) {
      throw new Error(MESSAGE.ERROR.BONUS_NUMBER_LENGTH);
    }

    if (winningNumbers.includes(bonusNumber[0])) {
      throw new Error(MESSAGE.ERROR.NUMBER_DUPLICATE);
    }
  }
}

module.exports = Validation;
