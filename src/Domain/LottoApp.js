const CONSTANT = require("../constant");
const Lotto = require("../Lotto");
const MissionUtils = require("@woowacourse/mission-utils");

class LottoApp {
  #lottos = [];

  constructor(money) {
    this.#lottos = this.buyLottos(money);
  }

  buyLottos(money) {
    const buyAmount = money / CONSTANT.LOTTO_PRICE;
    return this.generateLottos(buyAmount);
  }

  generateLottos(buyAmount) {
    let lottoArray = [];

    while (lottoArray.length < buyAmount) {
      const random = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoArray.push(new Lotto(random));
    }

    return lottoArray;
  }

  getLottos() {
    return this.#lottos;
  }
}
module.exports = LottoApp;
