const { Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class LottoCompany {
  #lottoPrice;

  constructor(lottoPrice) {
    this.#lottoPrice = lottoPrice;
  }

  publishLottos(money) {
    const lottoCount = money / this.#lottoPrice;
    const lottos = Array(lottoCount);
    for (let i = 0; i < lottoCount; i += 1) {
      lottos[i] = new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6));
    }
    return lottos;
  }

  makeWinningNumbers() {}

  notifyLottoResult() {}
}

module.exports = LottoCompany;
