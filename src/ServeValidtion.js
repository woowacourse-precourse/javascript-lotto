const Lotto = require('./Lotto');
const { LOTTO, NUMBER, ERROR, REGEXP } = require('./Constant');

class ServeValidtion {
  static validateLottoBuyPrice(price) {
    const limit = REGEXP.PRICE_LIMIT;
    if (Number(price)%LOTTO.PRICE !== NUMBER.ZERO
    || !limit.test(price)
    || Number(price) < LOTTO.PRICE) {
      throw new Error(ERROR.LOTTO_PRICE);
    }

    return true;
  }

  static validateJackpotNumber(number) {
    const limits = REGEXP.LOTTO_INPUT_LIMIT;
    number.split(',').map((type) => {
      if (!limits.test(type)) {
        throw new Error(ERROR.JACKPOT_INPUT_TYPE);
      }
    });
  }

  static validateLottoBonusNumber(number, jackpotNumber) {
    Lotto.validateScope(number);
    const limit = REGEXP.LOTTO_INPUT_LIMIT;
    if (!limit.test(number)) {
      throw new Error(ERROR.BONUS_ONLY);
    }
    if (jackpotNumber.includes(number)) {
      throw new Error(ERROR.BONUS_IS_JACKPOT);
    }
  }
}

module.exports = ServeValidtion;
