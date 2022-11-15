const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("../src/Lotto");
const LottoPurchase = require("../src/LottoPurchase");

class App {

  constructor() {}

  play() {}

  inputAmount() {
    MissionUtils.Console.readLine("구입 금액을 입력해 주세요.", (amount) => {
      amount = Number(amount);
      const lottoPurchase = new LottoPurchase(amount);
      this.lottoListPrint(lottoPurchase);
    })
  }
}

const app = new App;
app.play();

module.exports = App;
