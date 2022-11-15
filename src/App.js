const { Console } = require('@woowacourse/mission-utils');
const { LOTTERY_PRICE, MESSAGE, EXCEPTIONS } = require('./constant/constant');
const { isNumber } = require('./utils/checkInput/isNumber');
const { throwException } = require('./utils/Exception/Exceptions');
const { allowedInterval } = require('./utils/checkInput/allowedInterval');
const { createLotteryNumber } = require('./utils/generate/createLottryNumber');
const Lotto = require('./Lotto');
class App {
  #LotteryBudget;
  #numberOfLottery;
  #lotteryList;

  play() {
    return this.calculateNumberOfLottery();
  }

  calculateNumberOfLottery() {
    Console.readLine(MESSAGE.LOTTERY_BUDGET, (input) => {
      if (!isNumber(input)) throwException(EXCEPTIONS.NOT_A_NUMBER);
      //input이 1000으로 안 나눠질 경우 예외처리를 한다!
      if (!allowedInterval(Number(input)))
        throwException(EXCEPTIONS.UNIT_ERROR);
      this.#LotteryBudget = Number(input);
      this.#numberOfLottery = Math.round(this.#LotteryBudget / LOTTERY_PRICE);
      this.newLine();

      //구매한 lottery의 갯수를 출력한다
      Console.print(`${this.#numberOfLottery}${MESSAGE.NUMBER_PURHCASED}`);
      return this.generateLotteryLists();
    });
  }

  generateLotteryLists() {
    this.#lotteryList = Array(this.#numberOfLottery).fill(0);
    //lottery번호 생성하는 함수
    this.#lotteryList = this.#lotteryList.map((Object) => {
      const LotteryNumber = createLotteryNumber();
      Object = new Lotto(LotteryNumber);
      return Object;
    });
    this.#lotteryList.forEach((lottreyNumber) => {
      Console.print(lottreyNumber.getLotteryNumber());
    });
    return this.inSertWinningNumber();
  }

  inSertWinningNumber() {}

  newLine() {
    console.log('\n');
  }
}
const app = new App();
app.play();

module.exports = App;
