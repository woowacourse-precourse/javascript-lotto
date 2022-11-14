const { Console, Random } = require('@woowacourse/mission-utils');
const { MESSAGES, ERROR_MESSAGES } = require('./constants/index');

const LOTTO_PRICE = 1000;
class App {
  #buyLotto = [];

  play() {
    Console.readLine(MESSAGES.INPUT_MONEY, (number) => {
      if (number % LOTTO_PRICE !== 0)
        throw new Error(ERROR_MESSAGES.INVALID_MONEY_UNIT);
      this.buy(Number(number / LOTTO_PRICE));
    });
  }

  buy(count) {
    Console.print(MESSAGES.BUY_COUNT(count));

    for (let index = 1; index <= count; index++) {
      const randomLotto = this.randomLotto();

      this.#buyLotto.push(randomLotto);
      Console.print(randomLotto);
    }
  }

  randomLotto() {
    const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    if (!randomNumbers) throw new Error(ERROR_MESSAGES.EMPTY_NUMBERS);
    return randomNumbers.sort((a, b) => a - b);
  }
}

module.exports = App;
