const { UTILS, ERROR } = require('../constant/constant');

class Validation {
  static validatePurchase(number) {
    if (Number.isNaN(number)) throw new Error(ERROR.PURCHASE_ONLY_NUMBER);
    if (number % UTILS.LOTTO_PRICE !== UTILS.EMPTY_PRICE) {
      throw new Error(ERROR.LOTTO_PRICE);
    }
  }

  static validateLotto(numbers) {
    if (numbers.length !== UTILS.LOTTO_COUNT) {
      throw new Error(ERROR.LOTTO_MUST_SIX);
    }
    if (numbers.length !== new Set(numbers).size) {
      throw new Error(ERROR.LOTTO_MUST_UNIQUE);
    }
    numbers.forEach((number) => {
      if (number > UTILS.LOTTO_MAX || number < UTILS.LOTTO_MIN) {
        throw new Error(ERROR.LOTTO_BETWEEN);
      }
      if (Number.isNaN(Number(number))) {
        throw new Error(ERROR.LOTTO_ONLY_NUMBER);
      }
    });
  }

  static validateBonus(number) {
    if (Number.isNaN(number)) throw new Error(ERROR.BONUS_ONLY_NUMBER);
    if (number > UTILS.LOTTO_MAX || number < UTILS.LOTTO_MIN) {
      throw new Error(ERROR.BONUS_BETWEEN);
    }
  }
}

module.exports = Validation;
