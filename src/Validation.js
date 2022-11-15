const { PURCHASE_ERROR_MESSAGE, WINNING_ERROR_MESSAGE, BONUS_ERROR_MESSAGE } = require('./constants/Message');
const { NUMBER } = require('./constants/Setting');

class Validation {
  purchaseInputValue(inputValue) {
    const inputNumber = Number(inputValue);
    if (Number.isNaN(inputNumber)) {
      throw new Error(PURCHASE_ERROR_MESSAGE.INPUT_ONLY_NUMBER);
    }
    if (inputNumber % NUMBER.PURCHASE_UNIT !== 0) {
      throw new Error(PURCHASE_ERROR_MESSAGE.INPUT_VALID_UNIT);
    }
  }

  winningInputValue(inputValue) {
    let winningNumbers;
    if (inputValue.includes(',') === false) {
      throw new Error(WINNING_ERROR_MESSAGE.INPUT_SEPARATION_NUMBER);
    }
    if (Array.isArray(inputValue) === false) {
      winningNumbers = inputValue.split(',');
    } else {
      winningNumbers = inputValue;
    }
    if (winningNumbers.length !== NUMBER.LOTTO_COUNT) {
      throw new Error(WINNING_ERROR_MESSAGE.INPUT_SIX_NUMBER);
    }
    winningNumbers.forEach((item) => {
      const numberItem = Number(item);
      if (Number.isNaN(numberItem)) {
        throw new Error(WINNING_ERROR_MESSAGE.INPUT_ONLY_NUMBER);
      }
      if (numberItem < NUMBER.MIN_RANGE || numberItem > NUMBER.MAX_RANGE) {
        throw new Error(WINNING_ERROR_MESSAGE.INPUT_WITHIN_RANGE);
      }
    });
    winningNumbers = new Set(winningNumbers);
    if (winningNumbers.size !== NUMBER.LOTTO_COUNT) {
      throw new Error(WINNING_ERROR_MESSAGE.INPUT_DIFFERENT_NUMBER);
    }
    winningNumbers = [...winningNumbers].map((item) => Number(item));
    return winningNumbers;
  }

  bonusInputValue(winningInput, bonusInput) {
    const bonusNumber = Number(bonusInput);
    if (Number.isNaN(bonusNumber)) {
      throw new Error(BONUS_ERROR_MESSAGE.INPUT_ONLY_NUMBER);
    }
    if (bonusNumber < NUMBER.MIN_RANGE || bonusNumber > NUMBER.MAX_RANGE) {
      throw new Error(BONUS_ERROR_MESSAGE.INPUT_WITHIN_RANGE);
    }
    if (winningInput.includes(bonusNumber)) {
      throw new Error(BONUS_ERROR_MESSAGE.INPUT_NON_WINNING_NUMBER);
    }
  }
}

module.exports = Validation;