const Lotto = require('./Lotto');
const MESSAGE = require('./MESSAGE');

class User {
  #money;
  #lottos;

  buyLottos(money) {
    this.validateMoney(money);
    this.#lottos = Array.from({ length: money / 1000 }, () => {
      this.#money = money;
      return new Lotto([1, 2, 3, 4, 5, 6]);
    });
  }

  validateMoney(money) {
    const numberStyle = /^[0-9]+$/;
    if (!numberStyle.test(money)) throw new Error(MESSAGE.ERROR.MONEY.NUMBER);
    if (money % 1000 !== 0) throw new Error(MESSAGE.ERROR.MONEY.THOUSAND);
    if (money === 0) throw new Error(MESSAGE.ERROR.MONEY.ZERO);
  }
}

module.exports = User;
