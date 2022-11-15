const { Console } = require('@woowacourse/mission-utils');
const { LOTTERY_PRICE, MESSAGE, EXCEPTIONS } = require('./constant/constant');
const isNumber = require('./utils/isNumber');

class App {
  play() {
    return this.budget();
  }

  budget() {
    Console.readLine(MESSAGE.LOTTERY_BUDGET, (input) => {
      if (!isNumber(input)) {
        throw new Error(EXCEPTIONS.NOT_A_NUMBER);
      }
    });
  }
}

module.exports = App;
