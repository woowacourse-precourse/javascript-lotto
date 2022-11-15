const { Random } = require('@woowacourse/mission-utils');
const Lotto = require('../Lotto');
const Validation = require('./Validation');

class IssueLotto {
  static setLotteryNumber(purchase) {
    Validation.validatePurchase(purchase);
    const results = [];
    let draw = purchase / 1000;
    let count = draw;
    while (draw !== 0) {
      results.push(new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6)));
      draw -= 1;
    }
    return [results, count];
  }
}

module.exports = IssueLotto;
