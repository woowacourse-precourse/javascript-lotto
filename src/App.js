const { Random, Console } = require("@woowacourse/mission-utils");
const LOTTOPRICE = 1000;

class App {
  play() {}
  #purchaseAmount;
  #lottoNum;
  #winningNum;

  constructor() {
    this.issuedLottoNum = [];
  }

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
    for (var count = 0; count < this.#lottoNum; count++) {
      this.issuedLottoNum.push(Random.pickUniqueNumbersInRange(1, 45, 6));
    }
    this.printIssuedLotto();
  }

  printIssuedLotto() {
    Console.print(`\n${this.#lottoNum}개를 구매했습니다.`);
    for (var count = 0; count < this.#lottoNum; count++) {
      Console.print(this.issuedLottoNum[count]);
    }
    this.inputWinningNum();
  }

  inputWinningNum() {
    Console.readLine("당첨 번호를 입력해 주세요. \n", (winningNum) => {});
  }
}

module.exports = App;
