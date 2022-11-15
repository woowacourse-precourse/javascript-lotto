const { Console, Random } = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.usedMoney = 0;
    this.lottoAmount = 0;
  }

  play() {
    this.buyLotto();
    this.consoleLottoAmount();
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
}

module.exports = App;