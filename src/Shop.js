const { ERROR, LOTTO } = require('./utiles/Constant');
const { Random } = require('@woowacourse/mission-utils');

class Shop {
  #money;
  #count;

  constructor(money) {
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
    return this.#money / 1000;
  }

  #invalidMonetaryUnit(money) {
    return money % 1000;
  }

  getLottoNumbers() {
    const lottos = [];

    while (lottos.length !== this.#count) {
      lottos.push(this.#generateLottoNumbers());
    }
    return lottos;
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
