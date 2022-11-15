const { PURCHASE_ERROR_MESSAGE, WINNING_ERROR_MESSAGE, BONUS_ERROR_MESSAGE } = require('./constants/Message');

class Validation {
  purchaseInputValue(inputValue) {
    const inputNumber = Number(inputValue);
    if (Number.isNaN(inputNumber)) {
      throw new Error(PURCHASE_ERROR_MESSAGE.INPUT_ONLY_NUMBER);
    }
    if (inputNumber % 1000 !== 0) {
      throw new Error(PURCHASE_ERROR_MESSAGE.INPUT_VALID_UNIT);
    }
  }

  winningInputValue(inputValue) {
    let winningNumbers = inputValue.split(',');
    if (inputValue.includes(',') === false) {
      throw new Error(WINNING_ERROR_MESSAGE.INPUT_SEPARATION_NUMBER);
    }
    if (winningNumbers.length !== 6) {
      throw new Error(WINNING_ERROR_MESSAGE.INPUT_SIX_NUMBER);
    }
    winningNumbers.forEach((item) => {
      const numberItem = Number(item);
      if (Number.isNaN(numberItem)) {
        throw new Error(WINNING_ERROR_MESSAGE.INPUT_ONLY_NUMBER);
      }
      if (numberItem < 1 || numberItem > 45) {
        throw new Error(WINNING_ERROR_MESSAGE.INPUT_WITHIN_RANGE);
      }
    });
    winningNumbers = new Set(winningNumbers);
    if (winningNumbers.size !== 6) {
      throw new Error(WINNING_ERROR_MESSAGE.INPUT_DIFFERENT_NUMBER);
    }
  }

  bonusInputValue(winningInput, bonusInput) {
    const bonusNumber = Number(bonusInput);
    if (Number.isNaN(bonusNumber)) {
      throw new Error(BONUS_ERROR_MESSAGE.INPUT_ONLY_NUMBER);
    }
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error(BONUS_ERROR_MESSAGE.INPUT_WITHIN_RANGE);
    }
    if (winningInput.includes(bonusNumber)) {
      throw new Error(BONUS_ERROR_MESSAGE.INPUT_NON_WINNING_NUMBER);
    }
  }
}

module.exports = Validation;