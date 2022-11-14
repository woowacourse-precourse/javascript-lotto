const { LOTTO_INFO, CURRENCY_UNIT } = require('../constant');
const Lotto = require('../Lotto');
const { pickUniqueNumbersInRange } = require('../utils/Utils');

class LottoGameModel {
  payMoney(money) {
    const lottoCount = Number(money) / CURRENCY_UNIT;

    return this.createLotto(lottoCount);
  }

  createLotto(count) {
    const lottos = [];

    for (let i = 0; i < count; i++) {
      const lotto = pickUniqueNumbersInRange(
        LOTTO_INFO.START,
        LOTTO_INFO.END,
        LOTTO_INFO.COUNT
      );

      lottos.push(new Lotto(lotto));
    }

    return lottos;
  }
}

module.exports = LottoGameModel;
