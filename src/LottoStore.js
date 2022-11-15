const { LOTTO } = require('./constant/Constant');

class LottoStore {
  lottoPrice = LOTTO.PRICE;
  rule;

  constructor(rule) {
    this.rule = rule;
  }
}

module.exports = LottoStore;
