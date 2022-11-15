const Lotto = require('./Lotto');
const Validation = require('./Validation');
const { UTILS } = require('../constant/constant');
const { Random } = require('@woowacourse/mission-utils');

class IssueLotto {
  static setLottoNumber(purchase) {
    Validation.validatePurchase(purchase);
    const results = [];
    const count = IssueLotto.#drawLotto({ results, purchase });
    return [results, count];
  }

  static #drawLotto({ results, purchase }) {
    let draw = purchase / UTILS.LOTTO_PRICE;
    let count = draw;
    while (draw !== UTILS.EMPTY_DRAW) {
      const randoms = Random.pickUniqueNumbersInRange(
        UTILS.LOTTO_MIN,
        UTILS.LOTTO_MAX,
        UTILS.LOTTO_COUNT,
      );
      results.push(new Lotto(randoms));
      draw -= 1;
    }
    return count;
  }
}

module.exports = IssueLotto;
