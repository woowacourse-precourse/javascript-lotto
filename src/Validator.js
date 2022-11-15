const {
  UNIT_INVALID_ERROR_MESSAGES,
  LOTTO_NUMBER_RANGE,
  COMMON_INVALID_ERROR_MESSAGES,
  LOTTO_ERROR_MESSAGES,
} = require('./Constant');

class Validator {
  static common(input) {
    const spaceReg = /\s/g;
    if (typeof +input !== 'number' || Number.isNaN(input)) {
      throw new Error(COMMON_INVALID_ERROR_MESSAGES.ONLY_NUMBER);
    }
    if (Math.sign(+input) === -1 || !Number.isInteger(+input)) {
      throw new Error(COMMON_INVALID_ERROR_MESSAGES.NOT_DECIMAL_AND_MINUS);
    }
    if (input === '' || input.match(spaceReg)) {
      throw new Error(COMMON_INVALID_ERROR_MESSAGES.NOT_EMPTY);
    }

    return true;
  }

  static checkRange(input) {
    if (+input > LOTTO_NUMBER_RANGE.MAX_RANGE || +input < 1) {
      throw new Error(COMMON_INVALID_ERROR_MESSAGES.ONLY_NUMBER_BETWEEN_1_45);
    }
    return true;
  }

  static lotto(numbersArray) {
    if (numbersArray.length !== LOTTO_NUMBER_RANGE.LENGTH) {
      throw new Error(LOTTO_ERROR_MESSAGES.LENGTH_ONLY_SIX);
    }
    if (new Set([...numbersArray]).size !== LOTTO_NUMBER_RANGE.LENGTH) {
      throw new Error(LOTTO_ERROR_MESSAGES.UNIQUE);
    }
    numbersArray.forEach((number) => Validator.checkRange(number));

    return true;
  }

  static unit(input) {
    if (input % LOTTO_NUMBER_RANGE.UNIT !== 0) throw new Error(UNIT_INVALID_ERROR_MESSAGES);
    return true;
  }
}

module.exports = Validator;
