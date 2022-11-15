const { REGEXP, ERROR_MESSAGE } = require('./constant/constant');

class Bonus {
  #number;

  constructor(number, lottoNumber) {
    this.validate(number, lottoNumber);
    this.#number = number;
  }

  validate(number, lottoNumber) {
    if (!REGEXP.CHECK_NUMBER.test(number)) {
      throw new Error(ERROR_MESSAGE.ONLY_INPUT_INTEGER);
    } else if (REGEXP.CHECK_START_NUMBER.test(number)) {
      throw new Error(ERROR_MESSAGE.START_NUMBER_ZERO);
    } else if (number < 1 || number > 45) {
      throw new Error(ERROR_MESSAGE.NUMBER_INVALID_RANGE);
    } else if (lottoNumber.includes(parseInt(number, 10))) {
      throw new Error(ERROR_MESSAGE.SAME_LOTTO_NUMBER);
    }
  }

  getNumber() {
    return parseInt(this.#number, 10);
  }
}

module.exports = Bonus;
