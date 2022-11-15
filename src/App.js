const { Console } = require('@woowacourse/mission-utils');
const { LOTTERY_PRICE, MESSAGE, EXCEPTIONS } = require('./constant/constant');
const { isNumber } = require('./utils/checkInput/isNumber');
const { throwException } = require('./utils/Exception/Exceptions');
class App {
  play() {
    return this.budget();
  }

  budget() {
    Console.readLine(MESSAGE.LOTTERY_BUDGET, (input) => {
      if (!isNumber(input)) throwException(EXCEPTIONS.NOT_A_NUMBER);
    });
  }
}
const app = new App();
app.play();

module.exports = App;
