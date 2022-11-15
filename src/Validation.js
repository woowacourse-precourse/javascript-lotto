const { LOTTO_BUY_ERROR, PRICE_PER_LOTTO } = require('./Const');
class Validation {
  static checkInputPrice(price) {
    if (price < 0) {
      throw new Error(LOTTO_BUY_ERROR.UNDER_ZERO_EXCEPTION);
    }

    if (isNaN(price)) {
      throw new Error(LOTTO_BUY_ERROR.NOT_A_NUMBER_EXCEPTION);
    }

    if (price % PRICE_PER_LOTTO !== 0) {
      throw new Error(LOTTO_BUY_ERROR.NOT_A_PRICE_UNIT_EXCEPTION);
    }

    return true;
  }
}
