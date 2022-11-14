const Lotto = require('./Lotto');

class User {
  /** @type {Lotto[]} */
  #lottos = [];

  /**
   * @param {number} money
   */
  buyLottos(money) {
    if (money % Lotto.PRICE !== 0) {
      throw new Error('[ERROR] 로또를 구입한 후 남는 금액이 없어야 합니다.');
    }
  }
}

module.exports = User;
