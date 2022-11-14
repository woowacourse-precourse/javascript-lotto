const Lotto = require('./Lotto');

class User {
  /** @type {Lotto[]} */
  #lottos = [];

  /**
   * @param {number} money
   */
  buyLottos(money) {
    if (money < Lotto.PRICE) {
      throw new Error('[ERROR] 최소 로또를 1개 이상 구매할 수 있는 금액을 입력해야 합니다.');
    }
    if (money % Lotto.PRICE !== 0) {
      throw new Error('[ERROR] 로또를 구입한 후 남는 금액이 없어야 합니다.');
    }
    const amount = money / Lotto.PRICE;
    this.#lottos.concat(
      Array(amount)
        .fill()
        .map(() => Lotto.fromRandom()),
    );
  }

  getLottos() {
    return this.#lottos;
  }
}

module.exports = User;
