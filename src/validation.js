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
  if (
    numbers.find(
      (number) => number < 1 || number > 45 || Number.isNaN(numbers)
    ) === undefined
  ) {
    return true;
  }
  return false;
}

function isNotDuplicateNumber(numbers) {
  const removeDupkicateNumber = new Set(numbers);
  if (numbers.length === removeDupkicateNumber.size) {
    return true;
  }
  return false;
}

const validation = {
  isUnitOf1000(amount) {
    if (amount % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.PURCHASE_AMOUNT_UNIT);
    }
  },
  isLottoNumber(numbers) {
    const convertedNumbersToInt = numbers
      .split(',')
      .map((number) => parseInt(number, 10));
    if (!isNumberAndComma(numbers)) throw new Error(ERROR_MESSAGE.NUMBER_COMMA);

    if (!isLengthOfSix(convertedNumbersToInt))
      throw new Error(ERROR_MESSAGE.LOTTO_LENGTH);

    if (!isOutOf1To45(convertedNumbersToInt))
      throw new Error(ERROR_MESSAGE.OUT_OF_RANGE);

    if (!isNotDuplicateNumber(convertedNumbersToInt))
      throw new Error(ERROR_MESSAGE.DUPLICATE_NUMBER);
  },
};

module.exports = validation;
