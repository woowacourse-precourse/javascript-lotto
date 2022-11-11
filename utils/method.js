const { VARIABLE_LOTTO, LOTTO_ERROR_MESSAGE } = require('./constants');

const validateLottoRange = number => {
  if (!VARIABLE_LOTTO.regex.test(number)) {
    throw new Error(LOTTO_ERROR_MESSAGE.range);
  }

  return Number(number);
};

module.exports = {
  validateLottoRange,
};
