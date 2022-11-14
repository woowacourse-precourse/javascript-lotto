const { LOTTO_COST_ERROR } = require('../constant/errorMessage');
const STRING = require('../constant/string');
const NUMBER = require('../constant/number');

class LottoCost {
  constructor(lottoCost) {
    this.validate(lottoCost);
    this.hasDot(lottoCost);
  }

  validate(lottoCost) {
    if (+lottoCost % 1 !== NUMBER.ZERO) {
      throw new Error(LOTTO_COST_ERROR.CHECK_ISINTEGER);
    }
    if (+lottoCost % NUMBER.THOUSAND !== NUMBER.ZERO) {
      throw new Error(LOTTO_COST_ERROR.CHECK_THOUSAND);
    }
    if (lottoCost === STRING.BLANK) {
      throw new Error(LOTTO_COST_ERROR.CHECK_ISNULL);
    }
    const input = lottoCost.split(STRING.BLANK);
    input.map(el => {
      if (el === STRING.SPACE) {
        throw new Error(LOTTO_COST_ERROR.CHECK_SPACE);
      }
    });
  }

  hasDot(lottoCost) {
    lottoCost.split(STRING.BLANK).map(el => {
      if (el === STRING.DOT) {
        throw new Error(LOTTO_COST_ERROR.CHECK_DOT);
      }
    });
  }
}

module.exports = LottoCost;
