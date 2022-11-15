const { VALID_LOTTO, ERROR_MESSAGES } = require('./constant');

const Utils = {
  validateLottoSingleNumber(singleNumber) {
    if (
      isNaN(Number(singleNumber)) ||
      singleNumber < VALID_LOTTO.NUMBER_MIN ||
      singleNumber > VALID_LOTTO.NUMBER_MAX
    )
      throw new Error(`${ERROR_MESSAGES.LOTTO_OUT_OF_RANGE}`);
  },
};

module.exports = Utils;
