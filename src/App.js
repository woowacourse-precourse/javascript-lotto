const { Console } = require("@woowacourse/mission-utils");
const { LOTTO_MESSAGE } = require("./util/Constant");
const buyLotto = require("./BuyLotto");

const Budget = require("./Budget");
const Lotto = require("./Lotto");

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
    this.userBudget = budget;
    this.getLotto();
  }
  getLotto() {
    this.boughtLotto = buyLotto(this.userBudget.lottoToBuy);
    this.printLotto();
  }
  printLotto() {
    Console.print(LOTTO_MESSAGE.BUYING(this.userBudget.lottoToBuy));
    this.boughtLotto.forEach((lotto) => {
      Console.print(lotto);
    });
    this.setWinningNum();
  }
  setWinningNum() {
    Console.readLine(LOTTO_MESSAGE.WIN_NUM, (input) => {
      const numbers = input.split(",").map(Number);
      new Lotto(numbers);
      this.winningLotto = numbers;
    });
  }
}
const app = new App();
app.play();
module.exports = App;
