const { Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
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

  createLotto() {
    return new Lotto(this.createLottoNumbers());
  }

  createLottoNumbers() {
    return Random.pickUniqueNumbersInRange(
      this.rule.range.min,
      this.rule.range.max,
      this.rule.winningNumberCount,
    ).sort((a, b) => a - b);
  }
}

module.exports = LottoStore;
