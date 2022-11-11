const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const BuyLottery = require("./BuyLottery");

class App {
  play() {
    this.inputOutputAmount();
    this.buyLotto();
  }

  inputOutputAmount() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (amount) => {
      MissionUtils.Console.print("구입금액을 입력해 주세요.");
      MissionUtils.Console.print(amount);
      this.amount = amount;
    });
  }
  buyLotto() {
    const buyLottery = new BuyLottery();
    buyLottery.checkAmout(this.amount);
    const quantity = buyLottery.numberOfpurchases(this.amount);
    const lottos = buyLottery.createRendomLotto(quantity);
    this.quantity = quantity;
    this.lottos = lottos;
    this.outPurchaseSuccess();
  }
  outPurchaseSuccess() {
    MissionUtils.Console.print(`${this.quantity}개를 구매했습니다.`);
    let idx = 0;
    while (idx !== this.quantity) {
      MissionUtils.Console.print(`${this.lottos[idx]}`);
      idx++;
    }
  }
}

module.exports = App;
