const MissionUtils = require("@woowacourse/mission-utils");
const LottoStore = require("./LottoStore");
const Lotto = require("./Lotto");

class App {
  constructor() {  
    this.store = new LottoStore();
    this.purchasedLottos = [];

  }

  play() {
    this.buyLotto();
  }

  buyLotto() {
    MissionUtils.Console.readLine('구입 금액을 입력해 주세요.', (answer) => {
        const money = Number(answer);
        this.purchasedLottos = this.store.buy(money);

        this.receipt();
    })
  }
  receipt() {
     MissionUtils.Console.print(this.purchasedLottos.length+'개를 구매했습니다.');

      this.purchasedLottos.forEach((element) => {
        printLottoNum(element);
      });
  }
  printLottoNum(lotto) {
    MissionUtils.Console.print(JSON.stringify(lotto.getNumbers()).replace(/,/g, ', '));
  }
}

module.exports = App;
