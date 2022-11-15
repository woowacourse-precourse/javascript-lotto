const { isOutOfRange, isDuplicated } = require("../utils/utils");
const { ERROR_MESSAGES, NUMBERS } = require("../constants/constants");

const validateWinningNumbers = (winningNumbers) => {
  if (winningNumbers.length !== NUMBERS.LOTTO_NUM)
    throw new Error(ERROR_MESSAGES.INVALID_LOTTO_LENGTH);

  if (isDuplicated(winningNumbers)) {
    throw new Error(ERROR_MESSAGES.DUPLICATED_LOTTO_NUM);
  }

  if (isOutOfRange(winningNumbers))
    throw new Error(ERROR_MESSAGES.INVALID_LOTTO_RANGE);

  return true;
};

const validateBonusNumber = (bonusNumber, winningNumber) => {
  if (isNaN(bonusNumber)) {
    throw new Error(ERROR_MESSAGES.FORMAT_ERROR);
  }

  if (winningNumber.includes(bonusNumber)) {
    throw new Error(ERROR_MESSAGES.DUPLICATED_LOTTO_NUM);
  }

  if (isOutOfRange(bonusNumber))
    throw new Error(ERROR_MESSAGES.INVALID_LOTTO_RANGE);

  return true;
};

module.exports = { validateWinningNumbers, validateBonusNumber };
