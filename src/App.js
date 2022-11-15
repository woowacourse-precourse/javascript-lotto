const { Console } = require("@woowacourse/mission-utils");
const Bonus = require("./Bonus");
const { CONSOLE } = require("./constants");
const Lotto = require("./Lotto");
const LottoGenerator = require("./LottoGenerator");
const ValidationCheck = require("./util/ValidationCheck");

class App {
  #money;
  #lottoSet;
  #winningNumbers;
  #bonusNumber;

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
    Console.readLine(CONSOLE.WINNING_NUMBER_INPUT + "\n", (winningNumber) => {
      this.#winningNumbers = winningNumber.split(",").map(Number);
      new Lotto(this.#winningNumbers);

      Console.print("");
      this.inputBonusNumber(this.#winningNumbers);
    });
  }

  inputBonusNumber(winningNumber) {
    Console.readLine(CONSOLE.BONUS_NUMBER_INPUT + "\n", (bonusNumber) => {
      this.#bonusNumber = bonusNumber;
      new Bonus(winningNumber, bonusNumber);

      Console.print("");
    });
  }
}

module.exports = App;
