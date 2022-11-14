const Lotto = require('./Lotto');
const MESSAGE = require('./MESSAGE');
const { Random } = require('@woowacourse/mission-utils');

class User {
  #money;
  #lottos;

  buyLottos(money) {
    this.validateMoney(money);
    this.#lottos = Array.from({ length: money / 1000 }, () => {
      this.#money = money;
      let LOTTO_NUMBER = this.pickNumber();
      return new Lotto(LOTTO_NUMBER);
    });
  }

  validateMoney(money) {
    const numberStyle = /^[0-9]+$/;
    if (!numberStyle.test(money)) throw new Error(MESSAGE.ERROR.MONEY.NUMBER);
    if (money % 1000 !== 0) throw new Error(MESSAGE.ERROR.MONEY.THOUSAND);
    if (money === 0) throw new Error(MESSAGE.ERROR.MONEY.ZERO);
  }

  pickNumber() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

module.exports = User;
