const MissionUtils = require("@woowacourse/mission-utils");

const Lotto = require("./Lotto");
const Receipt = require("./Receipt");

class LottoStore { 
  static LOTTO_PRICE = 1000;

  buy(money) {
    this.vaildate(money);

    const purchasedLottos = [];
    while(money > 0) {
      money -= 1000;
      const lotto =  this.generateLotto();
      purchasedLottos.push(lotto);
    }

    const receipt = new Receipt(purchasedLottos);
    receipt.print();

    return receipt.purchasedLottos;
  }

  vaildate(money) {
    if(isNaN(money)) {
      throw new Error("[ERROR] 금액은 숫자로 입력해야 합니다.");
    }
    if(money % LottoStore.LOTTO_PRICE != 0) {
      throw new Error("[ERROR] 금액은 "+ LottoStore.LOTTO_PRICE +"로 나누어 떨어져야 합니다."); 
    }
  }

  generateLotto() {
    return new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
  }
}

module.exports = LottoStore;