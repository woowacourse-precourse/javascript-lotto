const { LOTTO_ERROR } = require('../constants/error.constants');
const { LOTTO_MIN, LOTTO_MAX } = require('../constants/lotto.constants');

class LottoValidation {
  static isInteger(numbers) {
    numbers.map((number) => {
      if (!Number.isInteger(number)) throw new Error(LOTTO_ERROR.NOT_INTEGER);
    });
  }
  static isOutOfRange(numbers) {
    numbers.forEach((number) => {
      if (number < LOTTO_MIN || number > LOTTO_MAX) throw new Error(LOTTO_ERROR.OUT_OF_RANGE);
    });
  }
  static hasLengthOfSix(numbers) {
    if (numbers.length !== 6) throw new Error(LOTTO_ERROR.OUT_LENGTH);
  }
  static hasOverlapNumbers(numbers) {
    const numberSet = new Set([...numbers]);
    if (numberSet.size !== numbers.length) throw new Error(LOTTO_ERROR.OVERLAP_EXIST);
  }
}

module.exports = LottoValidation;
