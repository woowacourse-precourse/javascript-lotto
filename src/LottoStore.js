const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class LottoStore {
  makeLotto(money) {
    this.isMoneyValidate(money);
    const count = this.calculateLottoCount(money);
    const lottos = this.generateLottoNumber(count);
    console.log(lottos);
    return lottos;
  }

  isMoneyValidate(moneyString) {
    const money = parseInt(moneyString);
    if (money % 1000 !== 0)
      throw new Error("[ERROR] 구입 금액이 천원 단위가 아닙니다");
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
