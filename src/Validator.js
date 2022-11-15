const Constant = require("./Constant.js");

class Validator {
  static validateInputPurchase(price) {
    if (isNaN(price)) {
      throw new Error(Constant.PURCHASE_AMOUNT_ERROR_MESSAGE_MUST_INT);
    }
    if (price <= 0) {
      throw new Error(Constant.PURCHASE_AMOUNT_ERROR_MESSAGE2_MUST_POSITIVE);
    }
    if (price % 1000 !== 0) {
      throw new Error(Constant.PURCHASE_AMOUNT_ERROR_MESSAGE3);
    }
  }

  static validateInputWinningNumbers(winningNumbersArray) {
    if (winningNumbersArray.length !== 6) {
      throw new Error(Constant.WINNING_NUMBERS_ERROR_MESSAGE);
    }
    if (
      winningNumbersArray
        .map((number) => parseInt(number))
        .some((number) => isNaN(number))
    ) {
      throw new Error(Constant.WINNING_NUMBERS_ERROR_MESSAGE);
    }
    if (winningNumbersArray.some((number) => number < 1 || number > 45)) {
      throw new Error(Constant.WINNING_NUMBERS_ERROR_MESSAGE2);
    }

    const set = new Set(winningNumbersArray);
    if (set.size !== winningNumbersArray.length) {
      throw new Error(Constant.WINNING_NUMBERS_ERROR_MESSAGE3);
    }
  }

  static validateInputBonusNumber(bonusNumberInput, winningNumbers) {
    if (isNaN(bonusNumberInput)) {
      throw new Error(Constant.BONUS_NUMBER_ERROR_MESSAGE);
    }
    if (bonusNumberInput < 1 || bonusNumberInput > 45) {
      throw new Error(Constant.BONUS_NUMBER_ERROR_MESSAGE2);
    }
    if (winningNumbers.includes(bonusNumberInput)) {
      throw new Error(Constant.BONUS_NUMBER_ERROR_MESSAGE3);
    }
  }
}

module.exports = Validator;
