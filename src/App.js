const { Console } = require("@woowacourse/mission-utils");
const {
  LOTTO_MESSAGE,
  LOTTO_MIN,
  LOTTO_MAX,
  LOTTO_ERROR,
} = require("./util/Constant");
const buyLotto = require("./BuyLotto");

const Budget = require("./Budget");
const Lotto = require("./Lotto");
const Result = require("./Result");

class App {
  play() {
    this.lottoMachineOn();
  }
  lottoMachineOn() {
    Console.readLine(LOTTO_MESSAGE.BUDGET, (input) => {
      this.setBudget(input);
    });
  }
  setBudget(money) {
    const budget = new Budget(money);
    this.buyCount = budget.lottoToBuy;
    this.getLotto();
  }
  getLotto() {
    this.boughtLotto = buyLotto(this.buyCount);
    this.printLotto();
  }
  printLotto() {
    Console.print(LOTTO_MESSAGE.BUYING(this.buyCount));
    const userLotto = this.boughtLotto;
    userLotto.forEach((lotto) => {
      Console.print(`[${lotto.join(", ")}]`);
    });
    this.setWinningNum();
  }
  setWinningNum() {
    Console.readLine(LOTTO_MESSAGE.WIN_NUM, (input) => {
      const numbers = input.split(",").map(Number);
      new Lotto(numbers);
      this.winningLotto = numbers;
      this.setBonusNum();
    });
  }
  setBonusNum() {
    Console.readLine(LOTTO_MESSAGE.BONUS_NUM, (input) => {
      const number = Number(input);
      this.bonusLotto = this.checkBonusNum(number);
      this.makeResult();
    });
  }
  checkBonusNum(number) {
    if (isNaN(number)) {
      throw new Error(LOTTO_ERROR.NUM);
    }
    if (!(number <= LOTTO_MAX && number >= LOTTO_MIN)) {
      throw new Error(LOTTO_ERROR.RANGE);
    }
    if (this.winningLotto.indexOf(number) != -1) {
      throw new Error(LOTTO_ERROR.REPEAT);
    }
    return number;
  }
  makeResult() {
    new Result(
      this.boughtLotto,
      this.winningLotto,
      this.bonusLotto,
      this.buyCount
    );
    Console.close();
  }
}
const app = new App();
app.play();
module.exports = App;
