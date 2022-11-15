const {
  ERROR_USER_MONEY_INPUT,
  ERROR_BONUS_NUMBER,
  ERROR_SIX_NUMBER,
  ERROR_OVERLAP_NUMBER,
  ERROR_NUMBER_RANGE,
  ERROR_NOT_NUMBER,
  LOTTO_COUNT,
  MIN_NUMBER,
  MAX_NUMBER,
} = require('./constants');

class ErrorInfo {
  inputMoneyError(isValidMoney) {
    if (!isValidMoney) {
      throw new Error(ERROR_USER_MONEY_INPUT);
    }
  }

  bonusNumberError(inputBonusNumber, winningLotto) {
    if (!this.isValidNumber(inputBonusNumber, winningLotto)) {
      throw new Error(ERROR_BONUS_NUMBER);
    }
  }

  isValidNumber(bonusNumber, winningLotto) {
    if (
      bonusNumber < MIN_NUMBER ||
      bonusNumber > MAX_NUMBER ||
      isNaN(bonusNumber) ||
      winningLotto.getNumbers().includes(parseInt(bonusNumber, 10))
    ) {
      return false;
    }
    return true;
  }

  notSixNumberError(numbers) {
    if (numbers.length !== LOTTO_COUNT) {
      throw new Error(ERROR_SIX_NUMBER);
    }
  }

  overlapNumberError(numbers) {
    const numberSet = new Set(numbers);
    if (numbers.length !== numberSet.size) {
      throw new Error(ERROR_OVERLAP_NUMBER);
    }
  }

  numberRangeError(number) {
    if (number < MIN_NUMBER || number > MAX_NUMBER) {
      throw new Error(ERROR_NUMBER_RANGE);
    }
  }

  notNumberError(number) {
    if (!Number(number)) {
      throw new Error(ERROR_NOT_NUMBER);
    }
  }
}

module.exports = ErrorInfo;
