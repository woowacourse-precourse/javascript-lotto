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
    Console.readLine("구입금액을 입력해 주세요.", (purchaseAmount) => {
      this.isValidInput(purchaseAmount);
      this.#purchaseAmount = purchaseAmount;
    });
  }

  isValidInput(purchaseAmount) {
    if (isNaN(purchaseAmount)) {
      throw "[EROR] 로또 구입금액은 숫자여야 합니다.";
    } else if (purchaseAmount % LOTTOPRICE !== 0) {
      throw "[EROR] 로또 구입금액은 1,000원 단위여야 합니다.";
    }
  }
}

module.exports = App;
