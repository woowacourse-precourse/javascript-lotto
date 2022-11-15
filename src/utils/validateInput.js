const { AMOUNT_UNIT } = require('./constants');
const { hasChar, isDivisible, hasCharExceptComma, isOutOfRange, hasDuplicate } = require('./utils');
const {
  InvalidAmountInputError,
  IndivisibleError,
  InvalidWinningNumbersInputError,
  InvalidBonusNumberInputError,
  InvalidLottoNumberRangeError,
} = require('../lib/errors');

const validateAmount = amount => {
  if (hasChar(amount)) {
    throw new InvalidAmountInputError();
  }

  if (!isDivisible(amount, AMOUNT_UNIT)) {
    throw new IndivisibleError();
  }
};

const validateWinningNumbers = numbers => {
  if (hasCharExceptComma(numbers)) {
    throw new InvalidWinningNumbersInputError();
  }
};

const validateBonusNumber = (winningNumbers, number) => {
  if (hasChar(number)) {
    throw new InvalidBonusNumberInputError();
  }

  if (isOutOfRange(number)) {
    throw new InvalidLottoNumberRangeError();
  }

  if (hasDuplicate([...winningNumbers, Number(number)])) {
    throw new InvalidBonusNumberInputError();
  }
};

module.exports = {
  validateAmount,
  validateWinningNumbers,
  validateBonusNumber,
};
