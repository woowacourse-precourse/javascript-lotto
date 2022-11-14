const { LOTTO_COST_ERROR } = require('../constant/errorMessage');

class LottoCost {
  constructor(lottoCost) {
    this.validate(lottoCost);
  } 
  
  validate(lottoCost) {
    if (+lottoCost % 1 !== 0) {
      throw new Error(LOTTO_COST_ERROR.CHECK_ISINTEGER);
    }
    if (+lottoCost % 1000 !== 0) {
      throw new Error(LOTTO_COST_ERROR.CHECK_THOUSAND);
    }
    if (lottoCost === '') {
      throw new Error(LOTTO_COST_ERROR.CHECK_ISNULL);
    }
    const input = lottoCost.split('');
    input.map((el) => {
      if (el === ' ') {
        throw new Error(LOTTO_COST_ERROR.CHECK_BLANK);
      }
    });
  }
}

module.exports = LottoCost;
