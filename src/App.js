const { Random, Console } = require("@woowacourse/mission-utils");
const { MESSAGE, LOTTERY_PRICE, LOTTERY_RESULT, PRIZE_GRADE, PRIZE_PRICE } = require("./Constant");
const Money = require("./Money");
const Lotto = require("./Lotto");
const BonusNumber = require("./BonusNumber");

class App {
  #money;
  #numberOfLottery;
  #myLottery;
  #winningNumbers;
  #bonusNumber;
  #matchedCounts;
  #lotteryResult;
  #profit;

  constructor() {
    this.#matchedCounts = [];
    this.#lotteryResult = new Array(5).fill(0);
  }

  exitLottery = () => {
    Console.close();
  };

  getPrizeMoney = () => {
    return PRIZE_PRICE.reduce((sum, prizeUnit, index) => sum + prizeUnit * this.#lotteryResult[index], 0);
  };

  printProfit = () => {
    this.#profit = ((this.getPrizeMoney() / this.#money) * 100).toFixed(1);
    Console.print(`${MESSAGE.PROFIT_FRONT}${this.#profit}${MESSAGE.PROFIT_BACK}`);

    this.exitLottery();
  };

  printLotteryResult = () => {
    Console.print(LOTTERY_RESULT.TITLE);
    Console.print(`${LOTTERY_RESULT.MATCHED_THREE}${this.#lotteryResult[PRIZE_GRADE.FIFTH]}${LOTTERY_RESULT.UNIT}`);
    Console.print(`${LOTTERY_RESULT.MATCHED_FOUR}${this.#lotteryResult[PRIZE_GRADE.FOURTH]}${LOTTERY_RESULT.UNIT}`);
    Console.print(`${LOTTERY_RESULT.MATCHED_FIVE}${this.#lotteryResult[PRIZE_GRADE.THIRD]}${LOTTERY_RESULT.UNIT}`);
    Console.print(`${LOTTERY_RESULT.MATCHED_FIVE_AND_BONUS}${this.#lotteryResult[PRIZE_GRADE.SECOND]}${LOTTERY_RESULT.UNIT}`);
    Console.print(`${LOTTERY_RESULT.MATCHED_SIX}${this.#lotteryResult[PRIZE_GRADE.FIRST]}${LOTTERY_RESULT.UNIT}`);

    this.printProfit();
  };

  checkBonusNumber = (index) => {
    if (this.#myLottery[index].includes(this.#bonusNumber)) return this.#lotteryResult[PRIZE_GRADE.SECOND]++;
    else return this.#lotteryResult[PRIZE_GRADE.THIRD]++;
  };

  getLotteryResult = () => {
    this.#matchedCounts.forEach((count, index) => {
      if (count === 6) this.#lotteryResult[PRIZE_GRADE.FIRST]++;
      if (count === 5) this.checkBonusNumber(index);
      if (count === 4) this.#lotteryResult[PRIZE_GRADE.FOURTH]++;
      if (count === 3) this.#lotteryResult[PRIZE_GRADE.FIFTH]++;
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

  checkIsValidBonusNumber = (bonusNumber, winningNumbers) => {
    return new BonusNumber(bonusNumber, winningNumbers);
  };

  getBonusNumber = () => {
    Console.readLine(MESSAGE.GET_BONUS_NUMBER, (bonusNumber) => {
      this.#bonusNumber = Number(bonusNumber);
      this.checkIsValidBonusNumber(this.#bonusNumber, this.#winningNumbers);
      this.getMatchedCounts();
    });
  };

  checkIsValidWinningNumber = (winningNumbers) => {
    return new Lotto(winningNumbers);
  };

  getWinningNumber = () => {
    Console.readLine(MESSAGE.GET_WINNING_NUMBERS, (winningNumbers) => {
      this.#winningNumbers = winningNumbers.split(",").map(Number);
      this.checkIsValidWinningNumber(this.#winningNumbers);
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
    this.#myLottery.forEach((lottery) => Console.print(`[${lottery.join(", ")}]`));
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

  checkIsValidMoney = (money) => {
    return new Money(money);
  };

  getMoney = () => {
    Console.readLine(MESSAGE.GET_MONEY, (money) => {
      this.checkIsValidMoney(money);
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
