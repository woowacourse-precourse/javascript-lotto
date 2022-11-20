const { BONUS_ERROR } = require('../constants/error.constants');
const { LOTTO_MIN, LOTTO_MAX } = require('../constants/lotto.constants');

class BonusValidation {
  static isInteger(number) {
    if (!Number.isInteger(number)) throw new Error(BONUS_ERROR.NOT_INTEGER);
  }
  static isOutOfRange(number) {
    if (number < LOTTO_MIN || number > LOTTO_MAX) throw new Error(BONUS_ERROR.OUT_OF_RANGE);
  }
  static hasOverlapNumbers(winnerNumbers, bonusNumber) {
    if (winnerNumbers.includes(bonusNumber)) throw new Error(BONUS_ERROR.OVERLAP_EXIST);
  }
}

module.exports = BonusValidation;
