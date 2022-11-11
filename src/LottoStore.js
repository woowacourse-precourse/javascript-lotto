const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class LottoStore {
  constructor() {}

  generateLotto(money) {
    const count = this.calculateLottoCount(money);
    const lottos = this.generateLottoNumber(count);
    return lottos;
  }

  calculateLottoCount(money) {
    return money / 1000;
  }

  generateLottoNumber(count) {
    const lottoInstanceArray = [];
    let LOTTO_MAKE_COUNT = count;
    while (LOTTO_MAKE_COUNT > 0) {
      const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      );
      const lottoInstance = new Lotto(lottoNumbers);
      lottoInstanceArray.push(lottoInstance);
      LOTTO_MAKE_COUNT--;
    }
    return lottoInstanceArray;
  }
}

module.exports = LottoStore;
