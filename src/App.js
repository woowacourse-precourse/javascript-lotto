const PurchaseLotto = require("./PurchaseLotto.js");

class App {
  play() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (money) => {
      this.purchaseLotto = new PurchaseLotto(money)
    });
  }
}

module.exports = App;
