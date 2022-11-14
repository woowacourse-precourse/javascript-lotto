const { Console } = require('@woowacourse/mission-utils');
const Store = require('./Store');
const { MESSAGES } = require('./constants/index');

class App {
  constructor() {
    this.store = new Store();
  }

  play() {
    Console.readLine(MESSAGES.INPUT_MONEY, (money) => {
      this.store.setMoney(money);
      const count = this.store.getBuyLottoCount(money);

      Console.print(MESSAGES.BUY_COUNT(count));
      this.store.createRandomLottos();

      this.inputLotto();
    });
  }

  inputLotto() {
    Console.readLine(MESSAGES.INPUT_LOTTO_NUMBERS, (numbers) => {
      const splittedNumbers = numbers.split(',');
      this.store.setLottos(splittedNumbers);
    });
  }
}

module.exports = App;
