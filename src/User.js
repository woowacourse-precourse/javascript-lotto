const { ERR_MONEY_MIN, ERR_ONLY_NUM, CMM_BUY_LOTTO } = require('./Constants');
const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

class User {
  #money;
  #lottoCnt;
  #lottos = [];
  #earns = 0;
  toString() {
    console.log(`${this.#money}, ${this.#lottoCnt}`);
  }
  constructor(money) {
    this.#money = money;
    this.#lottoCnt = this.buyLotto(money);
    this.makeLotto(this.#lottoCnt);
    Console.print(`\n${this.#lottoCnt}${CMM_BUY_LOTTO}`);
  }
  makeLotto(lottoCnt) {
    for (let i = 0; i < lottoCnt; i++) {
      const randomNum = Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(randomNum);
      this.#lottos.push(lotto);
    }
  }
  buyLotto(money) {
    this.validateMoneyInput(money);
    return money / 1000;
  }
  printUsersLottos() {
    this.#lottos.forEach((e) => e.toString());
  }
  validateMoneyInput(money) {
    const money_int = parseInt(money);
    if (!money_int) {
      throw new Error(ERR_ONLY_NUM);
    }
    if (money_int < 1000) {
      throw new Error(ERR_MONEY_MIN);
    }
  }
}

module.exports = User;
