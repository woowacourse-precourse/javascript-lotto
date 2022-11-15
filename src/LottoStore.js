const { LOTTO } = require('./constant/Constant');

class LottoStore {
  lottoPrice = LOTTO.PRICE;
  rule;

  constructor(rule) {
    this.rule = rule;
  }

  sellLottos(money) {
    const numLottos = Math.floor(money / this.lottoPrice);
    return Array.from({ length: numLottos }, () => this.createLotto());
  }
}

module.exports = LottoStore;
