const { Random } = require('@woowacourse/mission-utils');
const Messages = require('./Messages');
const Lotto = require('./Lotto');

class LottoSeller {
  #lottoPrice;

  constructor() {
    this.#lottoPrice = 1000;
  }

  sellLotto(money) {
    this.#validateInputMoney(money);

    const lottos = [];
    const lottoCount = money / this.#lottoPrice;

    for (let i = 1; i <= lottoCount; i++) {
      let uniqueNumberInRange = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      const lotto = new Lotto(uniqueNumberInRange);
      lottos.push(lotto);
    }

    return lottos;
  }

  #validateInputMoney(money) {
    if (money % this.#lottoPrice !== 0) throw new Error(Messages.ZERO_REST);
  }

  getLottoPrice() {
    return this.#lottoPrice;
  }
}

module.exports = LottoSeller;
