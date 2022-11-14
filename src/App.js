const { Random, Console } = require("@woowacourse/mission-utils");
const { MESSAGE, LOTTERY_PRICE } = require("./Constant");
class App {
  #money;
  #numberOfLottery;
  #myLottery;
  #winningNumbers;
  #bonusNumber;

  constructor() {}

  getBonusNumber = () => {
    Console.readLine(MESSAGE.GET_BONUS_NUMBER, (bonusNumber) => {
      this.#bonusNumber = Number(bonusNumber);
      this.printResult();
    });
  };

  getWinningNumber = () => {
    Console.readLine(MESSAGE.GET_WINNING_NUMBERS, (winningNumbers) => {
      this.#winningNumbers = winningNumbers.split(",").map(Number);
      // TODO: validate test
      this.getBonusNumber();
    });
  };

  getLotteryNumbers = () => {
    const lotteryNumbers = [];
    for (let i = 0; i < this.#numberOfLottery; i++) {
      lotteryNumbers.push(Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b));
    }
    return lotteryNumbers;
  };

  printMyLottery = () => {
    Console.print(`\n${this.#numberOfLottery}${MESSAGE.BOUGHT_LOTTERY}`);
    this.#myLottery.forEach((lottery) => Console.print(lottery));
    this.getWinningNumber();
  };

  buyLottery = () => {
    this.#myLottery = this.getLotteryNumbers();
    this.printMyLottery();
  };

  getNumberOfLottery = () => {
    this.#numberOfLottery = Math.trunc(this.#money / LOTTERY_PRICE);
    this.buyLottery();
  };

  getMoney = () => {
    Console.readLine(MESSAGE.GET_MONEY, (money) => {
      // TODO: 입력된 값 유효성 체크
      this.#money = Number(money);
      this.getNumberOfLottery();
    });
  };

  play() {
    this.getMoney();
  }
}

const app = new App();
app.play();

module.exports = App;
