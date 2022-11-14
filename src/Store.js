const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const { MESSAGES, ERROR_MESSAGES } = require('./constants/index');

const LOTTO_PRICE = 1_000;

class Store {
  #money;
  #winningLotto;
  #randomLottos = [];

  #validateMoney(money) {
    if (money % LOTTO_PRICE !== 0)
      throw new Error(ERROR_MESSAGES.INVALID_MONEY_UNIT);
  }
  setMoney(money) {
    this.#validateMoney(money);
    this.#money = money;
  }
  setLottos(numbers) {
    this.#winningLotto = new Lotto(numbers);
  }

  getBuyLottoCount() {
    return Number(this.#money / LOTTO_PRICE);
  }

  createRandomLottos() {
    const count = this.getBuyLottoCount();

    for (let index = 0; index < count; index++) {
      const randomLotto = Lotto.createRandomNumbers();
      this.#randomLottos.push(randomLotto);
      Console.print(`[${randomLotto.join(', ')}]`);
    }
  }
}

module.exports = Store;
