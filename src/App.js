const PurchaseLotto = require("./PurchaseLotto.js");
const Lotto = require("./Lotto.js");

class App {
  play() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (money) => {
      this.purchaseLotto = new PurchaseLotto(money)
    });

    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.', (numbers) => {
      this.lotto = new Lotto(numbers)
    });
  }
}

module.exports = App;
