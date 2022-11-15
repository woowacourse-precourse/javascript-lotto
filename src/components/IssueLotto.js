const { Random } = require('@woowacourse/mission-utils');
const Lotto = require('../Lotto');
const Validation = require('./Validation');
const { UTILS } = require('../constant/constant');

class IssueLotto {
  static setLotteryNumber(purchase) {
    Validation.validatePurchase(purchase);
    const results = [];
    let draw = purchase / UTILS.LOTTO_PRICE;
    let count = draw;
    while (draw !== UTILS.EMPTY_DRAW) {
      results.push(
        new Lotto(
          Random.pickUniqueNumbersInRange(
            UTILS.LOTTO_MIN,
            UTILS.LOTTO_MAX,
            UTILS.LOTTO_COUNT,
          ),
        ),
      );
      draw -= 1;
    }
    return [results, count];
  }
}

module.exports = IssueLotto;
