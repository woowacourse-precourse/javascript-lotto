const { ERROR_MESSAGE } = require('./constants');

function isNumberAndComma(numbers) {
  const notNumberAndComma = /[^0-9|^,]/;
  return !notNumberAndComma.test(numbers);
}

function isLengthOfSix(numbers) {
  if (numbers.length === 6) {
    return true;
  }
  return false;
}

function isOutOf1To45(numbers) {
  if (Array.isArray(numbers)) {
    if (
      numbers.find(
        (number) => number < 1 || number > 45 || Number.isNaN(numbers)
      ) === undefined
    )
      return true;
    return false;
  }
  if (numbers >= 1 && numbers <= 45) return true;
  return false;
}

function isNotDuplicateWinningNumber(numbers) {
  const removeDuplicateNumber = new Set(numbers);
  if (numbers.length === removeDuplicateNumber.size) {
    return true;
  }
  return false;
}

function isNotDuplicateBonusNumber(bonusNumber, winningNumber) {
  if (winningNumber.includes(bonusNumber)) {
    return false;
  }
  return true;
}

const validation = {
  isUnitOf1000(amount) {
    if (amount % 1000 !== 0 || !Number(amount)) {
      throw new Error(ERROR_MESSAGE.PURCHASE_AMOUNT_UNIT);
    }
  },

  isLottoNumber(numbers) {
    if (!isNumberAndComma(numbers.join(',')))
      throw new Error(ERROR_MESSAGE.NUMBER_COMMA);

    if (!isLengthOfSix(numbers)) throw new Error(ERROR_MESSAGE.LOTTO_LENGTH);

    if (!isOutOf1To45(numbers)) throw new Error(ERROR_MESSAGE.OUT_OF_RANGE);

    if (!isNotDuplicateWinningNumber(numbers))
      throw new Error(ERROR_MESSAGE.DUPLICATE_NUMBER);
  },

  isBonusNumber(bonusNumber, winningNumber) {
    const convertedNumberToInt = parseInt(bonusNumber, 10);
    if (!isOutOf1To45(convertedNumberToInt)) {
      throw new Error(ERROR_MESSAGE.OUT_OF_RANGE);
    }
    if (!isNotDuplicateBonusNumber(convertedNumberToInt, winningNumber)) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_NUMBER);
    }
  },
};

module.exports = validation;
