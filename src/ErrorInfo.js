const {
  ERROR_USER_MONEY_INPUT,
  ERROR_BONUS_NUMBER,
  ERROR_SIX_NUMBER,
  ERROR_OVERLAP_NUMBER,
  ERROR_NUMBER_RANGE,
  ERROR_NOT_NUMBER,
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
      bonusNumber < 1 ||
      bonusNumber > 45 ||
      !Number(bonusNumber) ||
      winningLotto.getNumbers().includes(bonusNumber)
    ) {
      return false;
    }
    return true;
  }

  notSixNumberError(numbers) {
    if (numbers.length !== 6) {
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
    if (number <= 0 || number > 45) {
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
