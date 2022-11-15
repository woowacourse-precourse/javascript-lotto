const { Console, MissionUtils } = require("@woowacourse/mission-utils");
const { CONSOLE } = require("./constants");
const Lotto = require("./Lotto");
const LottoGenerator = require("./LottoGenerator");
const ValidationCheck = require("./util/ValidationCheck");

class App {
  #money;
  #lottoSet;
  #winningNumbers;

  play() {
    this.insertMoney();
  }

  insertMoney() {
    Console.readLine(CONSOLE.PURCHASE_MONEY_INPUT + "\n", (input) => {
      ValidationCheck.purchaseMoney(input);
      this.#money = Number(input);
      this.buyLotto(input);
    });
  }

  buyLotto(money) {
    const lottoSet = new LottoGenerator(money);
    this.#lottoSet = lottoSet.play();
    this.inputWinningNumbers();
  }

  inputWinningNumbers() {
    Console.readLine(CONSOLE.WINNING_NUMBER_INPUT + "\n", (number) => {
      const inputNumbers = number.split(",").map(Number);
      const lotto = new Lotto(inputNumbers);
      this.#winningNumbers = lotto.play();

      Console.print("");
    });
  }
}

module.exports = App;
