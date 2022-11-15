const { Console, Random } = require("@woowacourse/mission-utils");
const Lotto = require("../src/Lotto");

class App {
  constructor() {
    this.usedMoney = 0;
    this.lottoAmount = 0;
    this.lottoNumbers = [];
  }

  play() {
    this.buyLotto();
    this.consoleLottoAmount();
    this.getRandomLottoNumbers();
  }

  buyLotto() {
    Console.readLine(
      "로또를 구매할 금액을 입력해주세요.",
      (input) => {
        if (input % 1000 != 0)
          throw new Error(
            "[ERROR] 구입 금액은 1000원 단위로만 구매 가능합니다.\n"
          );
        this.usedMoney = input;
        this.lottoAmount = input / 1000;
      }
    );
  }

  consoleLottoAmount() {
    Console.print(this.lottoAmount + "개를 구매했습니다.\n");
  }

  getRandomLottoNumbers() {
    for (let i = 0; i < this.lottoAmount; i++) {
      this.lottoNumbers.push(
        new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6))
      );
    }
  }
}

module.exports = App;