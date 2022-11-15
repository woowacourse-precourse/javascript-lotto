const Lotto = require('./Lotto');
const { checkValidMoney } = require('./utils/validator');
const { Console, Random } = require('@woowacourse/mission-utils');
const MESSAGE = require('./constants/message');

class User {
  #money;
  #lottos;

  buyLottos(money) {
    checkValidMoney(money);
    this.#lottos = Array.from({ length: money / 1000 }, () => {
      this.#money = money;
      let lottoNumber = this.pickNumber();
      return new Lotto(lottoNumber);
    });
    this.printLottos();
  }

  pickNumber() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  printLottos() {
    Console.print(`\n${this.#lottos.length}${MESSAGE.OUTPUT.PURCHASE}`);
    this.#lottos.forEach((lotto) => lotto.printLotto());
  }
}

module.exports = User;
