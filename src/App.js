const { Console } = require('@woowacourse/mission-utils');
const { LOTTERY_PRICE, MESSAGE, EXCEPTIONS } = require('./constant/constant');
const { isNumber } = require('./utils/checkInput/isNumber');
const { throwException } = require('./utils/Exception/Exceptions');
const { allowedInterval } = require('./utils/checkInput/allowedInterval');
class App {
  #LotteryBudget;

  play() {
    return this.budget();
  }

  budget() {
    Console.readLine(MESSAGE.LOTTERY_BUDGET, (input) => {
      if (!isNumber(input)) throwException(EXCEPTIONS.NOT_A_NUMBER);
      //input이 1000으로 안 나눠질 경우 예외처리를 한다!
      if (!allowedInterval(input)) throwException(EXCEPTIONS.UNIT_ERROR);
      this.#LotteryBudget = input;
    });
  }
}
const app = new App();
app.play();

module.exports = App;
