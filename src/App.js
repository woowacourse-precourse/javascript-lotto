const MissionUtils = require("@woowacourse/mission-utils");
const LottoStore = require("LottoStore");
const Lotto = require("Lotto");

class App {
  constructor() {  
    this.store = new LottoStore();
    this.purchasedLottos = [];

  }

  play() {

  }

  buyLotto() {
    MissionUtils.Console.readLine('구입 금액을 입력해 주세요.', (answer) => {
        const money = Number(answer);
        this.purchasedLottos = [... store.buy(money)];
    })
  }
}

module.exports = App;
