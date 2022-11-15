const { Console } = require('@woowacourse/mission-utils');
const { LOTTERY_PRICE, MESSAGE, EXCEPTIONS } = require('./constant/constant');

class App {
  play() {
    return this.budget();
  }

  budget() {
    Console.readLine(MESSAGE.LOTTERY_BUDGET, (input) => {});
  }
}

module.exports = App;
