const { Console } = require("@woowacourse/mission-utils");
const { QUESTION } = require("./Constants");
const { getValidatedInput } = require("./Validation/App");
const { getPurchaseAmount } = require("./Lotto/Purchase");
const Lotto = require("./Lotto/Lotto");
const LottosMaker = require("./Lotto/LottosMaker");
const Bonus = require("./Lotto/Bonus");
const Statistics = require("./Statistics/Statistics");

class App {
  constructor() {
    this.result;
    this.issueCount;
    this.lottos;
    this.winningNumbers;
    this.bonusNumbers;
  }

  play() {
    this.getInput("purchase");
  }

  getInput(type) {
    let question = QUESTION[type];
    Console.readLine(question, (input) =>
      this.getNext({ input: input, type: type })
    );
  }

  getNext({ input, type }) {
    let validatedInput = getValidatedInput({ input: input, type: type });

    switch (type) {
      case "purchase":
        return this.purchaseAndIssuance(validatedInput);
      case "winning_numbers":
        return this.getWinningNumbers(validatedInput);
      case "bonus_number":
        return this.getBonusNumbers(validatedInput);
    }
  }

  purchaseAndIssuance(amount) {
    this.issueCount = getPurchaseAmount(amount);
    Console.print(`\n${this.issueCount}개를 구매했습니다.`);
    this.lottos = LottosMaker.makeLottos(this.issueCount);
    this.printLottos();
    this.getInput("winning_numbers");
  }

  printLottos() {
    this.lottos.forEach((lotto) => lotto.print());
    Console.print("");
  }

  getWinningNumbers(input) {
    this.winningNumbers = new Lotto(input);
    this.getInput("bonus_number");
  }

  getBonusNumbers(input) {
    this.bonusNumbers = new Bonus({
      numbers: input,
      winningNumbers: this.winningNumbers,
    });
    this.getStatistics();
  }

  getStatistics() {
    if (!this.result) {
      this.result = new Statistics({
        lottos: this.lottos,
        winningNumbers: this.winningNumbers,
        bonusNumbers: this.bonusNumbers,
        amount: this.issueCount,
      });
    }
    this.printResults();
  }

  printResults() {
    if (!this.result) this.getStatistics();
    this.result.print();
    this.end();
  }

  end() {
    Console.close();
  }
}

module.exports = App;
const app = new App();
app.play();
