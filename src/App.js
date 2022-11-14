const { Random, Console } = require("@woowacourse/mission-utils");
const LOTTOPRICE = 1000;

class App {
  play() {}
  #purchaseAmount;
  #lottoNum;

  constructor() {}

  play() {
    this.inputAmount();
  }

  inputAmount() {
    Console.readLine("구입금액을 입력해 주세요. \n", (purchaseAmount) => {
      this.isValidInput(purchaseAmount);
      this.#purchaseAmount = purchaseAmount;
      this.issueLotto();
    });
  }

  isValidInput(purchaseAmount) {
    if (isNaN(purchaseAmount)) {
      throw "[EROR] 로또 구입금액은 숫자여야 합니다.";
    } else if (purchaseAmount % LOTTOPRICE !== 0) {
      throw "[EROR] 로또 구입금액은 1,000원 단위여야 합니다.";
    }
  }

  issueLotto() {
    this.#lottoNum = this.#purchaseAmount / LOTTOPRICE;
  }

  printIssuedLotto() {
    Console.print(`\n${this.#lottoNum}개를 구매했습니다.`);
  }
}

module.exports = App;
