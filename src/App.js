const { Random, Console } = require("@woowacourse/mission-utils");
const { MESSAGE, LOTTERY_PRICE, LOTTERY_RESULT, PRIZE } = require("./Constant");
class App {
  #money;
  #numberOfLottery;
  #myLottery;
  #winningNumbers;
  #bonusNumber;
  #matchedCounts;
  #lotteryResult;

  constructor() {
    this.#matchedCounts = [];
    this.#lotteryResult = new Array(5).fill(0);
  }

  checkBonusNumber = (index) => {
    if (this.#myLottery[index].includes(this.#bonusNumber)) return this.#lotteryResult[PRIZE.SECOND_PLACE]++;
    else return this.#lotteryResult[PRIZE.THIRD_PLACE]++;
  };

  getLotteryResult = () => {
    this.#matchedCounts.forEach((count, index) => {
      if (count === 6) this.#lotteryResult[PRIZE.FIRST_PLACE]++;
      if (count === 5) this.checkBonusNumber(index);
      if (count === 4) this.#lotteryResult[PRIZE.FOURTH_PLACE]++;
      if (count === 3) this.#lotteryResult[PRIZE.FIFTH_PLACE]++;
    });

    this.printLotteryResult();
  };

  compareLotteryNumbers = (lottery) => {
    let matchedCount = 0;
    lottery.forEach((number) => {
      if (this.#winningNumbers.includes(number)) matchedCount++;
    });
    return matchedCount;
  };

  getMatchedCounts = () => {
    this.#myLottery.forEach((lottery) => {
      const numberOfMatchedNumbers = this.compareLotteryNumbers(lottery);
      this.#matchedCounts.push(numberOfMatchedNumbers);
    });
    this.getLotteryResult();
  };

  getBonusNumber = () => {
    Console.readLine(MESSAGE.GET_BONUS_NUMBER, (bonusNumber) => {
      this.#bonusNumber = Number(bonusNumber);
      // TODO: bonusNumber Validate Test
      this.getMatchedCounts();
    });
  };

  getWinningNumber = () => {
    Console.readLine(MESSAGE.GET_WINNING_NUMBERS, (winningNumbers) => {
      this.#winningNumbers = winningNumbers.split(",").map(Number);
      // TODO: winningNumbers Validate Test
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
      // TODO: money Validate Test
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
