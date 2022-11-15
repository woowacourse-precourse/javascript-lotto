const { Console } = require("@woowacourse/mission-utils");
const Bonus = require("./Bonus");
const CheckLotto = require("./CheckLotto");
const { CONSOLE, RESULT, RULES } = require("./constants");
const Lotto = require("./Lotto");
const LottoGenerator = require("./LottoGenerator");
const ValidationCheck = require("./util/ValidationCheck");

class App {
  #money;
  #lottoSet;
  #winningNumbers;
  #bonusNumber;
  #matchResult;
  #profitResult;

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
      this.checkLotto();
    });
  }

  checkLotto() {
    const checkLotto = new CheckLotto();
    const result = checkLotto.play(this.#money, this.#lottoSet, this.#winningNumbers, this.#bonusNumber);
    this.#matchResult = result.matchResult;
    this.#profitResult = result.profitResult;

    this.printResult(this.#matchResult, this.#profitResult);
  }

  printResult(matchResult, profitResult) {
    const rankResult = ["FIFTH", "FOURTH", "THIRD", "SECOND", "FIRST"];

    Console.print(CONSOLE.RESULT);
    rankResult.forEach((rank, idx) => {
      Console.print(RESULT[rank](matchResult[RULES.RANK_COUNT - 1 - idx]));
    });
    Console.print(RESULT.TOTAL_PER(profitResult));
    Console.close();
  }
}

module.exports = App;
