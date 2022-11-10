const {
  UNIT_INVALID_ERROR_MESSAGES,
  LOTTO_NUMBER_RANGE,
  COMMON_INVALID_ERROR_MESSAGES,
} = require('./Constant');

const validate = {
  validateCommon(input) {
    if (typeof +input !== 'number' || Number.isNaN(input)) {
      throw new Error(COMMON_INVALID_ERROR_MESSAGES.ONLY_NUMBER);
    }
    if (Math.sign(+input) === -1 || !Number.isInteger(+input)) {
      throw new Error(COMMON_INVALID_ERROR_MESSAGES.NOT_DECIMAL_AND_MINUS);
    }
    if (input === '') throw new Error(COMMON_INVALID_ERROR_MESSAGES.NOT_EMPTY);
    if (+input > LOTTO_NUMBER_RANGE.MAX_RANGE || +input === 0) {
      throw new Error(COMMON_INVALID_ERROR_MESSAGES.ONLY_NUMBER_BETWEEN_1_45);
    }
    return true;
  },

  validateUnit(input) {
    if (input % LOTTO_NUMBER_RANGE.UNIT !== 0) throw new Error(UNIT_INVALID_ERROR_MESSAGES);
    return true;
  },
};

console.log(validate.validateCommon(''));
