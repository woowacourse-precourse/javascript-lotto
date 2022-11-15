const Lotto = require('./Lotto');
const { checkValidMoney } = require('./utils/validator');
const { Random } = require('@woowacourse/mission-utils');

class User {
  #money;
  #lottos;

  buyLottos(money) {
    checkValidMoney(money);
    this.#lottos = Array.from({ length: money / 1000 }, () => {
      this.#money = money;
      let LOTTO_NUMBER = this.pickNumber();
      return new Lotto(LOTTO_NUMBER);
    });
  }

  pickNumber() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

module.exports = User;
