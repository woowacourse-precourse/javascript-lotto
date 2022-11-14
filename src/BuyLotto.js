const { print, getRandom } = require('./utils');
const { LOTTO, BUY_MESSAGE } = require('./constant/constant');

class BuyLotto {
  #buyCount;

  #buyLotto = [];

  constructor(buyCount) {
    this.#buyLottoCountTimes(buyCount);
    this.#buyCount = buyCount;
  }

  getBuyCount() {
    return `${this.#buyCount}${BUY_MESSAGE}`;
  }

  #buyLottoCountTimes(buyCount) {
    for (let currentCount = 0; currentCount < buyCount; currentCount += 1) {
      this.#buyLotto.push(
        getRandom(LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER, LOTTO.INPUT_COUNT).sort(
          (lottoA, lottoB) => lottoA - lottoB,
        ),
      );
    }
  }

  getValue() {
    return this.#buyLotto;
  }
}

module.exports = BuyLotto;
