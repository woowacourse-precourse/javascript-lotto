const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("Lotto");

class LottoStore { 
  static LOTTO_PRICE = 1000;

  buy(money) {
    lottos = [];

    while(money > 0) {
      money -= 1000;
      lottos.push(new Lotto());
    }
  }
}

module.exports = LottoStore;