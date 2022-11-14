const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class LottoStore { 
  static LOTTO_PRICE = 1000;

  buy(money) {
    this.vaildate(money);

    const lottos = [];

    while(money > 0) {
      money -= 1000;
      lottos.push(new Lotto([ 1, 2, 3, 4, 5, 6 ]));
    }
  }

  vaildate(money) {
    if(isNaN(money)) {
      throw new Error("[ERROR] 금액은 숫자로 입력해야 합니다.");
    }
    if(money % this.LOTTO_PRICE != 0) {
      throw new Error("[ERROR] 금액은 "+this.LOTTO_PRICE+"로 나누어 떨어져야 합니다."); 
    }
  }
}

module.exports = LottoStore;