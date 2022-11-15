const { Console } = require("@woowacourse/mission-utils");
const { QUESTION } = require("./Constants");
const { getValidatedInput } = require("./Validate");
const { getPurchaseAmount } = require("./Purchase");
const Lotto = require("./Lotto");
const LottosMaker = require("./LottoMaker");
const Bonus = require("./Bonus");
const Statistics = require("./Statistics");
// 인풋, 아웃풋 담당
class App {
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
        return this.getBonusNumber(validatedInput);
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
    this.winningLotto = new Lotto(input);
    this.getInput("bonus_number");
  }

  getBonusNumber(input) {
    this.bonusNumber = new Bonus(input, this.winningLotto);
    this.getStatics();
  }

  getStatics() {
    if (!this.result) {
      this.result = new Statistics({
        lottos: this.lottos,
        winning: this.winningLotto,
        bonus: this.bonusNumber,
        amount: this.issueCount,
      });
    }
    this.printResults();
  }

  printResults() {
    if (!this.result) this.getStatics();
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
