const { ERROR, LOTTO, UNIT_MONEY } = require('./utiles/Constant');
const { Random } = require('@woowacourse/mission-utils');

class Shop {
  #money;
  #count;

  buyFor(money) {
    this.#validate(money);
    this.#money = money;
    this.#count = this.getLottoCount();
  }

  #validate(money) {
    if (isNaN(money)) throw new Error(`${ERROR.PREFIX} ${ERROR.NUMBER_ONLY}`);
    if (this.#invalidMonetaryUnit(money))
      throw new Error(`${ERROR.PREFIX} ${ERROR.MONETARY_UNIT}`);
  }

  getLottoCount() {
    return this.#money / UNIT_MONEY;
  }

  #invalidMonetaryUnit(money) {
    return money % UNIT_MONEY;
  }

  getAllLottoNumbers() {
    const lottos = [];

    while (lottos.length !== this.#count) {
      lottos.push(this.#generateLottoNumbers());
    }
    return lottos;
  }

  getMoney() {
    return this.#money;
  }

  #generateLottoNumbers() {
    const lotto = Random.pickUniqueNumbersInRange(
      LOTTO.RANGE_MIN,
      LOTTO.RANGE_MAX,
      LOTTO.COUNT
    );
    return lotto.sort((a, b) => a - b);
  }
}

module.exports = Shop;
