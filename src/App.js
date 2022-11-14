const { Random, Console } = require("@woowacourse/mission-utils");
const { MESSAGE, LOTTERY_PRICE } = require("./Constant");
class App {
  #money;
  #numberOfLottery;
  #myLottery;

  constructor() {}

  getLotteryNumbers = () => {
    const lotteryNumbers = [];
    for (let i = 0; i < this.#numberOfLottery; i++) {
      lotteryNumbers.push(Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b));
    }
    return lotteryNumbers;
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
    Console.readLine(MESSAGE.GETMONEY, (money) => {
      // TODO: 입력된 값 유효성 체크
      this.#money = money;
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
