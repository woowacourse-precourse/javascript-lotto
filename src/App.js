const { Console, Random } = require('@woowacourse/mission-utils');
const { MESSAGES, ERROR_MESSAGES } = require('./constants/index');

const LOTTO_PRICE = 1000;
class App {
  play() {
    Console.readLine(MESSAGES.INPUT_MONEY, (number) => {
      if (number % LOTTO_PRICE !== 0)
        throw new Error(ERROR_MESSAGES.INVALID_MONEY_UNIT);
    });
  }
}

module.exports = App;
