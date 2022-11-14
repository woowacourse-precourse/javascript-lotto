const { Random, Console } = require("@woowacourse/mission-utils");
const LOTTOPRICE = 1000;

class App {
  play() {}
  #purchaseAmount;

  constructor() {}

  play() {
    this.inputAmount();
  }

  inputAmount() {
    Console.readLine("구입금액을 입력해 주세요.", (purchaseAmount) => {});
  }
}

module.exports = App;
