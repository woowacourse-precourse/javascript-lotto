const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("../constant/Message");
const MyLotto = require("./MyLotto");
const Lotto = require("./Lotto");
const Calculator = require("./Calculator");

let money = 0;
class App {
  play() {
    this.purchaseAmount();
  }

  purchaseAmount() {
    Console.readLine(MESSAGE.INSERT_MONEY, (amount) => {
      const lotteryTicket = new MyLotto(amount);
      money = Number(amount);
      const myLottos = lotteryTicket.getMyLottery();
      lotteryTicket.printMyLottery(myLottos);
      this.getWinningNumbers(myLottos);
    });
  }

  getWinningNumbers(myLottos) {
    Console.readLine(MESSAGE.INPUT_WINNINGNUMBERS, (numbers) => {
      const winningNumbers = numbers.split(",").map((item) => Number(item));
      const lotto = new Lotto(winningNumbers);
      this.getBonusNumber(lotto, myLottos, winningNumbers);
    });
  }

  getBonusNumber(lotto, myLottos, winningNumbers) {
    Console.readLine(MESSAGE.INPUT_BONUSNUMBER, (number) => {
      const bonus = lotto.validateBonus(Number(number));
      const calculator = new Calculator(myLottos, winningNumbers, bonus);
      this.printProfitRate(calculator.returnTotal(), money);
    });
  }

  printProfitRate(total, money) {
    Console.print(
      `${MESSAGE.REWARD_HEAD}${(total / money) * 100}%${MESSAGE.REWARD_TAIL}`
    );
    this.exit();
  }

  exit() {
    Console.close();
  }
}

const app = new App();
app.play();
module.exports = App;
